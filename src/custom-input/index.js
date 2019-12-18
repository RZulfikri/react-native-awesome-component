import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Keyboard, TouchableOpacity, Text } from 'react-native'
import { TopContainer, RowContainer, Label, StyledTextInput, ErrorLabel, StyledTextInputContainer } from './custom-input.styled'
import { Formik } from 'formik';
import * as Obj from '../method/object'
import * as GlobalConst from '../global-const'
import * as Yup from 'yup'
import _ from 'lodash'
import { getSimpleCountryList } from '../method/helper'
import { Container, TouchableContainer } from '../styled/share.styled'
import ModalList from '../custom-select/Modal'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const LABEL_TYPE = {
  top: 'top-label',
  default: 'default',
  left: 'left-label',
  right: 'right-label'
}

const INPUT_TYPE = {
  email: 'email',
  password: 'password',
  phone: 'phone',
  phoneCountry: 'phone-country',
  number: 'number',
  text: 'text',
  textArea: 'text-area',
}

class CustomInput extends Component {
  static propTypes = {
    minLength: PropTypes.number,
    labelType: PropTypes.oneOf([LABEL_TYPE.top, LABEL_TYPE.default, LABEL_TYPE.left, LABEL_TYPE.right]),
    label: PropTypes.string,
    inputType: PropTypes.oneOf([INPUT_TYPE.email, INPUT_TYPE.password, INPUT_TYPE.phone, INPUT_TYPE.number, INPUT_TYPE.text, INPUT_TYPE.textArea, INPUT_TYPE.phoneCountry]),
    labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    errorLabelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    underlineWidth: PropTypes.number,
    underlineColor: PropTypes.string,
    isRequired: PropTypes.bool,
    focusColor: PropTypes.string,
    errorColor: PropTypes.string,
    validateOnChange: PropTypes.bool,
    onPress: PropTypes.func,
    onChangeValidation: PropTypes.func,
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),

    // ERROR MESSAGE
    passwordRegex: PropTypes.any,
    forceErrorMessage: PropTypes.string,
    errorEmail: PropTypes.string,
    errorPassword: PropTypes.string,
    errorRequired: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    errorMinimum: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    errorMaximum: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    // ACTION BUTTON
    renderLeftAction: PropTypes.func,
    renderRightAction: PropTypes.func,

    // PROPS FOR PHONE COUNTRY TYPE
    valueCountry: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      nameWithFlag: PropTypes.string,
      flag: PropTypes.string,
      code: PropTypes.string,
      callingCode: PropTypes.string,
    }),
    onSelectCountry: PropTypes.func,
    countryPlaceholder: PropTypes.string,
    countrySelectionLabel: PropTypes.string,
    countryValueLabel: PropTypes.string,
  }

  static defaultProps = {
    inputType: INPUT_TYPE.text,
    isRequired: false,
    onChangeValidation: () => null,
    valueCountry: {
      id: 101,
      name: 'Indonesia',
      nameWithFlag: '🇮🇩 Indonesia',
      flag: '🇮🇩',
      code: 'ID',
      callingCode: '62',
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      showCountryList: false,
    }
    this.setRef = this.setRef.bind(this)
    this.getContainerByType = this.getContainerByType.bind(this)
    this.getLabelStyleByType = this.getLabelStyleByType.bind(this)
    this.getValidationSchema = this.getValidationSchema.bind(this)
    this.getKeyboardType = this.getKeyboardType.bind(this)
    this.renderLabel = this.renderLabel.bind(this)
    this.renderInput = this.renderInput.bind(this)
    this.renderModalSelectCountry = this.renderModalSelectCountry.bind(this)
    this.setCountryListVisible = this.setCountryListVisible.bind(this)
  }

  value = ''
  errorValue
  isFocus
  textInput

  setRef(currentRef) {
    this.textInput = currentRef
    if (this.props.ref) {
      this.props.ref(currentRef)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props
    const thisState = this.state

    let shouldUpdate = true

    // this condition to ignore custom select that using custom input
    if (nextProps.onPress === undefined) {
      // this condition to prevent re render for common input
      if ((
        (nextProps.inputType === INPUT_TYPE.text) ||
        (nextProps.inputType === INPUT_TYPE.email) ||
        (nextProps.inputType === INPUT_TYPE.password) ||
        (nextProps.inputType === INPUT_TYPE.phone) ||
        (nextProps.inputType === INPUT_TYPE.number) ||
        (nextProps.inputType === INPUT_TYPE.textArea)
      )
        && (nextProps.value === thisProps.value)
        && (nextProps.defaultValue === thisProps.defaultValue)
      ) {
        shouldUpdate = false
      }

      // this condition to prevent re render for phone-country input
      if ((nextProps.inputType === INPUT_TYPE.phoneCountry) && 
      (
        (nextProps.valueCountry && thisProps.valueCountry) && (nextProps.valueCountry.id === thisProps.valueCountry.id)
      ) && (
        (nextProps.defaultValue === thisProps.defaultValue)
      )) {
        if (thisState.showCountryList === nextState.showCountryList) {
          shouldUpdate = false
        } else {
          shouldUpdate = true
        }
      }
    } else {
      // this condition to prevent re render for custom input, that used in custom select
      if (thisProps.defaultValue === nextProps.defaultValue) {
        shouldUpdate = false
      }
    }

    // condition to check other props, that makes app need to re render but value is equal
    if (thisProps.editable !== nextProps.editable) {
      shouldUpdate = true
    }

    return shouldUpdate
  }

  getContainerByType(labelType) {
    switch (labelType) {
      case LABEL_TYPE.top:
      case LABEL_TYPE.default: {
        return TopContainer
      }
      case LABEL_TYPE.left:
      case LABEL_TYPE.right: {
        return RowContainer
      }

      default: {
        return TopContainer
      }
    }
  }

  getLabelStyleByType(labelType) {
    switch (labelType) {
      case LABEL_TYPE.top: return {}
      case LABEL_TYPE.default: return {}
      case LABEL_TYPE.left: return { marginRight: 10 }
      case LABEL_TYPE.right: return { marginRight: 10 }
      default: return {}
    }
  }

  getValidationSchema(inputType) {
    const {
      isRequired,
      label,
      maxLength,
      minLength,
      passwordRegex,
      errorEmail,
      errorPassword,
      errorRequired,
      errorMinimum,
      errorMaximum,
    } = this.props

    let value = Yup.string()
    let errorRequiredString = GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED(label)
    let errorMinLength = GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_MINIMUM(label, minLength)
    let errorMaxLength = GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_MAXIMUM(label, maxLength)
    let errorEmailMessage = errorEmail ? errorEmail : GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_EMAIL
    let regexPassword = passwordRegex ? passwordRegex : GlobalConst.getValue().CUSTOM_INPUT_PASSWORD_REGEX
    let errorPasswordMessage = errorPassword ? errorPassword : GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_PASSWORD

    if (errorRequired) {
      if (typeof errorRequired === 'function') {
        errorRequiredString = errorRequired(label)
      } else {
        errorRequiredString = errorRequired
      }
    }

    if (errorMinimum) {
      if (typeof errorMinimum === 'function') {
        errorMinLength = errorMinimum(label, minLength)
      } else {
        errorMinLength = errorMinimum
      }
    }

    if (errorMaximum) {
      if (typeof errorMaximum === 'function') {
        errorMaxLength = errorMaximum(label, maxLength)
      } else {
        errorMaxLength = errorMaximum
      }
    }

    switch (inputType) {
      case INPUT_TYPE.email: {
        value = value.email(errorEmailMessage)
        break
      }
      case INPUT_TYPE.password: {
        value = value.min(8, GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_MINIMUM(label, 8))
        value = value.matches(regexPassword, errorPasswordMessage)
        break
      }

      case INPUT_TYPE.phoneCountry:
      case INPUT_TYPE.phone:
      case INPUT_TYPE.number: {
        value = value.matches(new RegExp('^\\d+$'), GlobalConst.getValue().CUSTOM_INPUT_ERROR_MESSAGE_INPUT)
        break
      }
    }

    if (maxLength) {
      value = value.max(maxLength, errorMaxLength)
    }

    if (minLength && minLength > 0) {
      value = value.min(minLength, errorMinLength)
    }


    if (isRequired) {
      value = value.required(errorRequiredString)
    }

    return Yup.object().shape({
      value
    });
  }

  getKeyboardType(inputType) {
    switch (inputType) {
      case INPUT_TYPE.email: return 'email-address'
      case INPUT_TYPE.password: return 'default'
      case INPUT_TYPE.phone: return 'phone-pad'
      case INPUT_TYPE.phoneCountry: return 'phone-pad'
      case INPUT_TYPE.number: return 'numeric'
      case INPUT_TYPE.text: return 'default'
      case INPUT_TYPE.textArea: return 'default'
    }
  }

  renderLabel(labelType, labelStyle) {
    const { label, isRequired, errorColor } = this.props
    const lErrorColor = errorColor ? errorColor : GlobalConst.getValue().CUSTOM_INPUT_ERROR_COLOR

    let renderLabel = <Label style={[this.getLabelStyleByType(labelType), labelStyle]} key={'main-label'}>
      {label}
    </Label>

    if (isRequired) {
      const additionalRequired = <Label style={[this.getLabelStyleByType(labelType), labelStyle, { color: lErrorColor }]} key={'required-mark'}>
        *
    </Label>
      renderLabel = Obj.appendChildToView(renderLabel, additionalRequired)
    }
    return (
      <View style={{ justifyContent: 'center' }}>
        {renderLabel}
      </View>
    )
  }

  setCountryListVisible(isVisible) {
    this.setState({ showCountryList: isVisible })
  }

  renderModalSelectCountry(formikProps) {
    const { showCountryList } = this.state
    const { style, valueCountry, onSelectCountry, countryPlaceholder, countrySelectionLabel, countryValueLabel } = this.props
    const countriesCode = getSimpleCountryList(true)
    const renderItem = GlobalConst.getValue().CUSTOM_SELECT_ITEM_RENDER
    const renderHeader = GlobalConst.getValue().CUSTOM_SELECT_HEADER_RENDER

    const placeholder = countryPlaceholder ? countryPlaceholder : GlobalConst.getValue().CUSTOM_INPUT_PHONE_COUNTRY_PLACEHODLER
    const selectionLabel = countrySelectionLabel ? countrySelectionLabel : GlobalConst.getValue().CUSTOM_INPUT_PHONE_COUNTRY_SELECT_LABEL

    let textInputStyle = GlobalConst.getValue().CUSTOM_INPUT_TEXT_INPUT_STYLE
    let placeholderStyle = {}
    if (style) {
      textInputStyle = {
        ...textInputStyle,
        ...style,
      }
    }

    if (this.props.placeholderTextColor === undefined && GlobalConst.getValue().CUSTOM_INPUT_PLACEHOLDER_COLOR) {
      placeholderStyle = {
        ...placeholderStyle,
        color: GlobalConst.getValue().CUSTOM_INPUT_PLACEHOLDER_COLOR
      }
    }

    if (this.props.placeholderTextColor) {
      placeholderStyle = {
        ...placeholderStyle,
        color: this.props.placeholderTextColor
      }
    }

    let value = placeholder

    if (valueCountry) {
      if (countryValueLabel) {
        value = countryValueLabel
      } else {
        value = `${valueCountry.code} (+${valueCountry.callingCode})`
      }
    }

    return (
      <Container style={{ width: '25%', backgroundColor: 'transparent', marginRight: 5 }}>
        <TouchableContainer onPress={() => this.setCountryListVisible(true)} style={{ backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
          <Text style={[{ flex: 1 }, textInputStyle, placeholderStyle]}>{value}</Text>
          <Icons name='menu-down' size={28} color={`rgba(0,0,0,0.5)`} />
        </TouchableContainer>
        <ModalList
          data={countriesCode}
          multiSelect={false}
          keyDescription={'nameWithFlag'}
          keyValue={'id'}
          initialValue={valueCountry}
          modalVisible={showCountryList}
          onSubmit={selectValue => {
            this.setCountryListVisible(false)
            onSelectCountry(selectValue);
          }}
          closeModal={() => {
            this.setCountryListVisible(false)
          }}
          renderItem={renderItem}
          renderHeader={renderHeader}
          title={selectionLabel}
        />
      </Container>
    )
  }

  renderInput(formikProps) {
    const { errors, touched } = formikProps
    const { label, underlineWidth, underlineColor, inputType, focusColor, errorColor, forceErrorMessage, renderLeftAction, renderRightAction, onPress, onChangeValidation, editable, containerStyle } = this.props
    let { labelType } = this.props

    if (labelType === undefined || labelType === null) {
      labelType = GlobalConst.getValue().CUSTOM_INPUT_LABEL_TYPE
    }

    let activeProps = { ...this.props }

    const Container = this.getContainerByType(labelType)
    const lFocusColor = focusColor ? focusColor : GlobalConst.getValue().CUSTOM_INPUT_FOCUS_COLOR
    const lErrorColor = errorColor ? errorColor : GlobalConst.getValue().CUSTOM_INPUT_ERROR_COLOR
    let fErrorMessage = forceErrorMessage ? forceErrorMessage : ''

    // HANDLER BORDER STYLE
    let containerTyle = {
      ...containerStyle,
      borderBottomWidth: underlineWidth ? underlineWidth : GlobalConst.getValue().CUSTOM_INPUT_UNDERLINE_WIDTH,
      borderBottomColor: underlineColor ? underlineColor : GlobalConst.getValue().CUSTOM_INPUT_UNDERLINE_COLOR,
    }

    let labelStyle = {}
    let errorLabelStyle = {}
    let errorLabel = <View />

    // HANDLE ERROR STYLE
    if (errors.value) {
      containerTyle = Obj.appendObject(containerTyle, 'borderBottomColor', lErrorColor)
      labelStyle = Obj.appendObject(labelStyle, 'color', lErrorColor)
      errorLabelStyle = { color: lErrorColor }
      fErrorMessage = errors.value
    }

    // HANDLE FOCUS STYLE
    if (touched.value) {
      containerTyle = Obj.appendObject(containerTyle, 'borderBottomColor', lFocusColor)
      labelStyle = Obj.appendObject(labelStyle, 'color', lFocusColor)
      errorLabelStyle = { color: lFocusColor }
    }

    // HANDLE FORCE MESSAGE STYLE
    if (fErrorMessage && !touched.value) {
      containerTyle = Obj.appendObject(containerTyle, 'borderBottomColor', lErrorColor)
      labelStyle = Obj.appendObject(labelStyle, 'color', lErrorColor)
    }

    // SET ERROR MESSAGE
    errorLabel = (
      <ErrorLabel style={[errorLabelStyle]}>
        {fErrorMessage}
      </ErrorLabel>
    )

    if (!_.isEqual(fErrorMessage, this.errorValue) && onChangeValidation) {
      this.errorValue = fErrorMessage
      onChangeValidation(fErrorMessage !== '' ? true : false)
    }

    // HANDLE ONCHANGE TEXT
    if (this.props.onChangeText) {
      if (this.value !== formikProps.values.value) {
        this.props.onChangeText(formikProps.values.value)
        this.value = formikProps.values.value
      }
    }

    // CHECK FOCUS
    if (this.isFocus !== touched.value) {
      this.isFocus = touched.value
    }

    // HANDLER CUSTOM STYLE
    let styledTextInputContainerStyle = {}
    let textInputStyle = GlobalConst.getValue().CUSTOM_INPUT_TEXT_INPUT_STYLE
    if ((labelType === LABEL_TYPE.left) || (labelType === LABEL_TYPE.right)) {
      textInputStyle = {
        ...textInputStyle,
        flex: 1,
      }
      styledTextInputContainerStyle = {
        flex: 1,
      }
    }

    if (this.props.style) {
      textInputStyle = {
        ...textInputStyle,
        ...this.props.style,
      }
    }

    // HANDLER TEXT AREA INPUT
    if (inputType === INPUT_TYPE.textArea) {
      activeProps = {
        ...activeProps,
        multiline: true,
        numberOfLines: 10,
      }

      textInputStyle = {
        ...textInputStyle,
        minHeight: 40,
        maxHeight: 100,
        paddingTop: 8,
        height: undefined
      }
    }

    if (activeProps.placeholderTextColor === undefined && GlobalConst.getValue().CUSTOM_INPUT_PLACEHOLDER_COLOR) {
      activeProps = Obj.appendObject(activeProps, 'placeholderTextColor', GlobalConst.getValue().CUSTOM_INPUT_PLACEHOLDER_COLOR)
    }

    if ((inputType === INPUT_TYPE.phone || inputType === INPUT_TYPE.phoneCountry) && activeProps.returnKeyType === undefined) {
      activeProps = Obj.appendObject(activeProps, 'returnKeyType', 'done')
    }

    const onFocus = activeProps.onFocus;
    const onBlur = activeProps.onBlur;

    // REMOVE UNUSED PROPS
    delete activeProps.ref
    delete activeProps.underlineColorAndroid
    delete activeProps.style
    delete activeProps.defaultValue
    delete activeProps.onChangeText
    delete activeProps.value
    delete activeProps.onSubmitEditing
    // delete activeProps.onFocus
    // delete activeProps.onBlur
    delete activeProps.keyboardType

    return (
      <View contentContainerStyle={{ flexGrow: 1 }} >
        <Container style={[containerTyle]}>
          {labelType === LABEL_TYPE.top && label && this.renderLabel(labelType, labelStyle)}
          {labelType === LABEL_TYPE.left && label && this.renderLabel(labelType, labelStyle)}
          {onPress ?
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={!editable}>
              <StyledTextInputContainer style={[styledTextInputContainerStyle]}>
                {renderLeftAction && (typeof renderLeftAction === 'function') && renderLeftAction()}
                <StyledTextInput
                  ref={currentRef => this.setRef(currentRef)}
                  pointerEvents="none"
                  secureTextEntry={inputType === INPUT_TYPE.password}
                  {...activeProps}
                  underlineColorAndroid={'transparent'}
                  style={textInputStyle}
                  defaultValue={formikProps.initialValues.value}
                  onChangeText={formikProps.handleChange('value')}
                  value={formikProps.values.value}
                  onSubmitEditing={formikProps.handleSubmit}
                  onFocus={() => {
                    formikProps.setFieldTouched('value');
                    if (onFocus) {
                      onFocus();
                    }
                  }}
                  onBlur={() => {
                    formikProps.setFieldTouched('value', false);
                    if (onBlur) {
                      onBlur();
                    }
                  }}
                  keyboardType={this.getKeyboardType(inputType)}
                  editable={false}
                />
                {renderRightAction && (typeof renderRightAction === 'function') && renderRightAction()}
              </StyledTextInputContainer>
            </TouchableOpacity> :
            <StyledTextInputContainer style={[styledTextInputContainerStyle]}>
              {renderLeftAction && (typeof renderLeftAction === 'function') && renderLeftAction()}
              {inputType === INPUT_TYPE.phoneCountry && this.renderModalSelectCountry(formikProps)}
              <StyledTextInput
                ref={currentRef => this.setRef(currentRef)}
                secureTextEntry={inputType === INPUT_TYPE.password}
                {...activeProps}
                underlineColorAndroid={'transparent'}
                style={[textInputStyle]}
                defaultValue={formikProps.initialValues.value}
                onChangeText={formikProps.handleChange('value')}
                value={formikProps.values.value}
                onSubmitEditing={formikProps.handleSubmit}
                onFocus={() => {
                  formikProps.setFieldTouched('value');
                  if (onFocus) {
                    onFocus();
                  }
                }}
                onBlur={() => {
                  formikProps.setFieldTouched('value', false);
                  if (onBlur) {
                    onBlur();
                  }
                }}
                keyboardType={this.getKeyboardType(inputType)}
              />
              {renderRightAction && (typeof renderRightAction === 'function') && renderRightAction()}
            </StyledTextInputContainer>
          }
          {labelType === LABEL_TYPE.right && label && this.renderLabel(labelStyle)}
        </Container>
        {errorLabel}
      </View>
    )
  }

  render() {
    const { inputType, defaultValue, onSubmitEditing, validateOnChange, onPress } = this.props
    let validationSchema = this.getValidationSchema(inputType)
    const initialValues = defaultValue ? { value: defaultValue } : { value: '' }
    const lValidateOnChange = validateOnChange ? validateOnChange : GlobalConst.getValue().CUSTOM_INPUT_VALIDATE_ON_CHANGE
    const lOnSubmit = onSubmitEditing ? () => null : onSubmitEditing
    return (
      <View>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={lValidateOnChange}
          validateOnBlur={true}
          onSubmit={lOnSubmit}
          enableReinitialize
        >
          {props => this.renderInput(props)}
        </Formik>
      </View>
    )
  }
}

export default CustomInput