import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native'
import { TopContainer, RowContainer, Label, StyledTextInput, ErrorLabel, StyledTextInputContainer } from './custom-input.styled'
import { Formik } from 'formik';
import * as Obj from '../method/object'
import * as GlobalConst from '../global-const'
import * as Yup from 'yup'
import _ from 'lodash'

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
  number: 'number',
  text: 'text',
  textArea: 'text-area',
}

class CustomInput extends Component {
  static propTypes = {
    minLength: PropTypes.number,
    labelType: PropTypes.oneOf([LABEL_TYPE.top, LABEL_TYPE.default, LABEL_TYPE.left, LABEL_TYPE.right]),
    label: PropTypes.string,
    inputType: PropTypes.oneOf([INPUT_TYPE.email, INPUT_TYPE.password, INPUT_TYPE.phone, INPUT_TYPE.number, INPUT_TYPE.text, INPUT_TYPE.textArea]),
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
  }

  static defaultProps = {
    inputType: INPUT_TYPE.text,
    isRequired: false,
    onChangeValidation: () => null,
  }

  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
    this.getContainerByType = this.getContainerByType.bind(this)
    this.getLabelStyleByType = this.getLabelStyleByType.bind(this)
    this.getValidationSchema = this.getValidationSchema.bind(this)
    this.getKeyboardType = this.getKeyboardType.bind(this)
    this.renderLabel = this.renderLabel.bind(this)
    this.renderInput = this.renderInput.bind(this)
  }

  value = ''
  errorValue
  layoutPosition
  isFocus
  textInput

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide,
    );
  }

  setRef(currentRef) {
    this.textInput = currentRef
    if (this.props.ref) {
      this.props.ref(currentRef)
    }
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
      case INPUT_TYPE.number: return 'numeric'
      case INPUT_TYPE.text: return 'default'
      case INPUT_TYPE.textArea: return 'default'
    }
  }

  renderLabel(labelType, labelStyle) {
    const { label } = this.props
    return (
      <View style={{ justifyContent: 'center' }}>
        <Label style={[this.getLabelStyleByType(labelType), labelStyle]}>
          {label}
        </Label>
      </View>
    )
  }

  renderInput(formikProps) {
    const { errors, touched } = formikProps
    const { label, underlineWidth, underlineColor, inputType, focusColor, errorColor, forceErrorMessage, renderLeftAction, renderRightAction, onPress, onChangeValidation } = this.props
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

    // REMOVE UNUSED PROPS
    delete activeProps.ref
    delete activeProps.underlineColorAndroid
    delete activeProps.style
    delete activeProps.defaultValue
    delete activeProps.onChangeText
    delete activeProps.value
    delete activeProps.onSubmitEditing
    delete activeProps.onFocus
    delete activeProps.onBlur
    delete activeProps.keyboardType

    return (
      <KeyboardAvoidingView keyboardVerticalOffset={500} behavior={'padding'} contentContainerStyle={{ flexGrow: 1 }} onLayout={(e) => this.layoutPosition = e.nativeEvent.layout} >
        <Container style={[containerTyle]}>
          {labelType === LABEL_TYPE.top && label && this.renderLabel(labelType, labelStyle)}
          {labelType === LABEL_TYPE.left && label && this.renderLabel(labelType, labelStyle)}
          {onPress ?
            <TouchableOpacity onPress={onPress}>
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
                  onFocus={() => formikProps.setFieldTouched('value')}
                  onBlur={() => formikProps.setFieldTouched('value', false)}
                  keyboardType={this.getKeyboardType(inputType)}
                />
                {renderRightAction && (typeof renderRightAction === 'function') && renderRightAction()}
              </StyledTextInputContainer>
            </TouchableOpacity> :
            <StyledTextInputContainer style={[styledTextInputContainerStyle]}>
              {renderLeftAction && (typeof renderLeftAction === 'function') && renderLeftAction()}
              <StyledTextInput
                ref={currentRef => this.setRef(currentRef)}
                secureTextEntry={inputType === INPUT_TYPE.password}
                {...activeProps}
                underlineColorAndroid={'transparent'}
                style={textInputStyle}
                defaultValue={formikProps.initialValues.value}
                onChangeText={formikProps.handleChange('value')}
                value={formikProps.values.value}
                onSubmitEditing={formikProps.handleSubmit}
                onFocus={() => formikProps.setFieldTouched('value')}
                onBlur={() => formikProps.setFieldTouched('value', false)}
                keyboardType={this.getKeyboardType(inputType)}
              />
              {renderRightAction && (typeof renderRightAction === 'function') && renderRightAction()}
            </StyledTextInputContainer>
          }
          {labelType === LABEL_TYPE.right && label && this.renderLabel(labelStyle)}
        </Container>
        {errorLabel}
      </KeyboardAvoidingView>
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
          enableReinitialize={!!onPress}
        >
          {props => this.renderInput(props)}
        </Formik>
      </View>
    )
  }
}

export default CustomInput