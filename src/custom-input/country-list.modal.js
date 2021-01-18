import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet, SectionList, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';
import * as Scale from '../method/scale'
import { GlobalConst, CustomHeader, Method } from '../..';
import { getIconByType, getSimpleCountryList } from '../method/helper';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import IonIcons from 'react-native-vector-icons/Ionicons'

const styles = StyleSheet.create({
  modalContainer: {
    margin: 0
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  titleContainer: {
    paddingTop: Scale.scale(8),
    paddingBottom: Scale.scale(6),
    paddingHorizontal: Scale.scale(12),
    backgroundColor: '#F7F7F7',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: Scale.scale(12),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    height: Scale.scale(44),
  },
  textItemFlag: {
    fontSize: 25,
    marginRight: 5,
    textAlignVertical: 'center',
  },
  textItem: {
    fontSize: 13,
    color: '#000000',
    textAlignVertical: 'center',
  },
  textItemCode: {
    fontSize: 13,
    color: 'rgb(140, 140, 140)',
    textAlignVertical: 'center',
  },
  textTitle: {
    color: '#888888',
    fontSize: Scale.scale(14)
  },
  border: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },
  containerSearch: {
    paddingHorizontal: Scale.scale(10),
    paddingTop: Scale.scale(8),
  },
  searchInputContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 1,
    height: Scale.scale(35),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Scale.scale(10),
  },
  searchInput: {
    flex: 1,
    fontSize: Scale.scale(13),
    color: '#777777',
    marginLeft: Scale.scale(8),
  }
})

class CountryListModal extends PureComponent {
  countryList = []
  currentCountrylist = []
  currentIndex = 0

  constructor(props) {
    super(props)
    this.state = {
      isVisible: false,
      selectedValue: props.value,
      search: '',
      currentCountrylist: []
    }
    this.onPressDone = this.onPressDone.bind(this)
    this.onPressClose = this.onPressClose.bind(this)
    this.onSelectItem = this.onSelectItem.bind(this)
    this._renderSectionTitle = this._renderSectionTitle.bind(this)
    this._renderSectionItem = this._renderSectionItem.bind(this)
    this._renderSearchBar = this._renderSearchBar.bind(this)
    this._getFilterData = this._getFilterData.bind(this)
    this.onLoadMore = this.onLoadMore.bind(this)
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  componentDidMount() {
    this.countryList = getSimpleCountryList(true, true)
    const initialCountryList = this.countryList.slice(0, 2)
    this.currentIndex = 2
    this.setState({
      currentCountrylist: initialCountryList
    })
  }

  show() {
    this.setState({
      isVisible: true
    })
  }

  hide() {
    this.setState({
      isVisible: false
    })
  }

  onPressDone() {
    const { selectedValue } = this.state
    const { onSubmit } = this.props
    onSubmit(selectedValue)
  }

  onPressClose() {
    const { closeModal } = this.props
    closeModal()
    this.setState({ selectedValue: this.props.value })
  }

  onSelectItem(item) {
    const {selectBehavior, onSubmit} = this.props
    let behavior = GlobalConst.getValue().CUSTOM_INPUT_PHONE_SELECT_BEHAVIOR
    if (selectBehavior) {
      behavior = selectBehavior
    }
    this.setState({ selectedValue: item }, () => {
      if (behavior === 'on-select') {
        onSubmit(item)
      }
    })
  }

  _renderSectionTitle(item) {
    const { section: { title } } = item
    return (
      <View style={[styles.titleContainer]}>
        <Text style={[styles.textTitle]}>{title}</Text>
      </View>
    )
  }

  _renderSectionItem(item) {
    const { selectedValue } = this.state
    const { name, flag, callingCode, id } = item.item
    return (
      <TouchableOpacity key={id} style={styles.itemContainer} activeOpacity={0.8} onPress={() => this.onSelectItem(item.item)}>
        <Text style={styles.textItemFlag}>{flag}</Text>
        <Text style={{ flex: 1 }}>
          <Text style={styles.textItem}>{name}</Text>
          <Text style={styles.textItemCode}>{` (+${callingCode})`}</Text>
        </Text>
        {(selectedValue.id === id) && (<IonIcons name={'ios-checkmark'} size={33} color={'rgb(62, 115, 197)'} />)}
      </TouchableOpacity>
    )
  }

  _renderSearchBar() {
    return (
      <View style={styles.containerSearch}>
        <View style={styles.searchInputContainer}>
          <IonIcons name={'ios-search'} size={20} color={'#777777'} />
          <TextInput
            placeholder={'Search'}
            style={styles.searchInput}
            onChangeText={search => this.setState({ search })}
            autoCapitalize={'none'}
            autoCompleteType={'off'}
            autoCorrect={false}
            returnKeyType={'search'}
          />
        </View>
      </View>
    )
  }

  _getFilterData() {
    const topCountry = GlobalConst.getValue().CUSTOM_INPUT_PHONE_TOP_COUNTRY
    const { search, currentCountrylist } = this.state
    let newData = []
    if (topCountry.length > 0 && search.length === 0) {
      newData.push({
        title: '#',
        data: topCountry
      })
    }
    if (search.length > 0) {
      for (let i = 0; i < this.countryList.length; i++) {
        const arrFilterData = this.countryList[i].data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        if (arrFilterData.length > 0) {
          newData.push({
            ...this.countryList[i],
            data: arrFilterData
          })
        }
      }
    } else {
      newData.push(...currentCountrylist)
    }
    return newData
  }

  onLoadMore() {
    const {currentCountrylist} = this.state
    let newIndex = this.currentIndex + 2
    if (newIndex <= this.countryList.length) {
      const newDatas = this.countryList.slice(this.currentIndex, newIndex)
      this.setState({
        currentCountrylist: [...currentCountrylist, ...newDatas]
      })
      this.currentIndex = newIndex
    }
  }

  render() {
    const { selectBehavior } = this.props
    const {isVisible} = this.state

    const iconType = GlobalConst.getValue().CUSTOM_SELECT_ICON_TYPE
    const backgroundColor = GlobalConst.getValue().CUSTOM_SELECT_HEADER_BACKGROUND_COLOR
    const leftIconColor = GlobalConst.getValue().CUSTOM_SELECT_HEADER_LEFT_ICON_COLOR
    const leftIconStyle = GlobalConst.getValue().CUSTOM_SELECT_HEADER_LEFT_ICON_STYLE
    const titleStyle = GlobalConst.getValue().CUSTOM_SELECT_HEADER_TITLE_STYLE

    const Icons = getIconByType(iconType)

    const rightActionStyle = {
      color: '#2D72CB',
      fontSize: 15,
      fontWeight: '600',
    }

    let behavior = GlobalConst.getValue().CUSTOM_INPUT_PHONE_SELECT_BEHAVIOR
    if (selectBehavior) {
      behavior = selectBehavior
    }

    return (
      <Modal
        isVisible={isVisible}
        style={styles.modalContainer}
        onBackButtonPress={this.onPressClose}
        animationInTiming={300}
        animationOutTiming={300}
        >
        <View style={styles.contentContainer}>
          <CustomHeader
            isCard={false}
            showBorder={true}
            backgroundColor={backgroundColor}
            title={'Select Country'}
            titleStyle={[titleStyle]}
            renderLeft={() => {
              return (
                <TouchableOpacity activeOpacity={0.8} onPress={this.onPressClose}>
                  <Icons name={'close'} size={23} color={leftIconColor} style={leftIconStyle} />
                </TouchableOpacity>
              )
            }}
            renderRight={() => {
              if (behavior === 'on-done') {
                return (
                  <TouchableOpacity activeOpacity={0.8} onPress={this.onPressDone}>
                    <Text style={rightActionStyle}>Done</Text>
                  </TouchableOpacity>
                )
              }
              
              return null
            }}
          />
          {this._renderSearchBar()}
          <SectionList
            keyboardShouldPersistTaps={'handled'}
            sections={this._getFilterData()}
            keyExtractor={(item) => item.id}
            renderItem={this._renderSectionItem}
            renderSectionHeader={this._renderSectionTitle}
            ItemSeparatorComponent={() => <View style={styles.border} />}
            contentContainerStyle={{ paddingBottom: getBottomSpace() }}
            initialNumToRender={20}
            onEndReached={this.onLoadMore}
            onEndReachedThreshold={0.5}
          />
        </View>
      </Modal>
    )
  }
}

CountryListModal.propTypes = {
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
  value: PropTypes.object,
  selectBehavior: PropTypes.oneOf(['on-done', 'on-select'])
}

CountryListModal.defaultProps = {
  closeModal: () => { },
  onSubmit: () => { },
  value: {
    id: 101,
    name: 'Indonesia',
    nameWithFlag: '🇮🇩 Indonesia',
    flag: '🇮🇩',
    code: 'ID',
    callingCode: '62',
  }
}

export default CountryListModal