import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Modal, Animated, ScrollView, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { debounce } from 'throttle-debounce'

export default class RNDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bottomVisible: false,
      modalVisible: false,
      itemSelected: null,
      bottom: new Animated.Value(0),
      query: ''
    }
  }

  componentDidMount() {
    this.setState({ itemSelected: this.props.value })
  }

  onSelect = (item) => {
    const { name, setFieldValue, fetchData } = this.props

    setFieldValue(name, item)

    if (fetchData) {
      fetchData(item.id, "")
    }

    this._toggleModal()
  }

  _toggleModeBottom = () => {
    const { bottomVisible } = this.state
    const { data } = this.props

    const countHeight = data ? data.length * 55 : 55
    const maxHeight = countHeight > 330  ? 330 : countHeight
    let fromValue = bottomVisible ? 0 : -maxHeight,
      toValue = bottomVisible ? -maxHeight : 0

    this.setState({ bottomVisible: !bottomVisible })
    this.state.bottom.setValue(fromValue)
    Animated.timing(this.state.bottom, {
      toValue,
      duration: 350
    }).start()
  }

  _toggleModeModal = () => {
    const { modalVisible } = this.state
    const { data } = this.props

    this.setState({ modalVisible: !modalVisible })
  }

  _toggleModal = () => {
    const { mode } = this.props

    switch(mode) {
      case "modal":
        this._toggleModeModal()
        break;

      case "bottom":
        this._toggleModeBottom()
        break;

      default:
        this._toggleModeModal()
        break;
    }
  }

  _renderList = () => {
    const { data, value, localSearch } = this.props
    const { query } = this.state

    if (localSearch) {
      const result = data && data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

      return result && result.map((item, index) => (
        <TouchableOpacity key={index} style={styles.itemWrapper} activeOpacity={0.8} onPress={() => this.onSelect(item)}>
          <Text style={styles.itemLabel}>{item.name}</Text>

          {value && value.id === item.id ? <Icon name="ios-checkmark" size={25} color="#232323" /> : null}
        </TouchableOpacity>
      ))
    } else {
      return data && data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.itemWrapper} activeOpacity={0.8} onPress={() => this.onSelect(item)}>
          <Text style={styles.itemLabel}>{item.name}</Text>

          {value && value.id === item.id ? <Icon name="ios-checkmark" size={25} color="#232323" /> : null}
        </TouchableOpacity>
      ))
    }
  }

  onSearch = (query) => {
    const { localSearch } = this.props
    this.setState({ query })

    if (!localSearch && this.props.onSearch) {
      debounce(500, this.props.onSearch(query))
    }
  }

  render () {
    const {
      error,
      data,
      placeholder,
      disabled,
      inputContainer,
      value
    } = this.props
    const { bottom } = this.state

    const showError = error && error.length > 0;
    const countHeight = data ? data.length * 55 : 55
    const maxHeight = countHeight > 330 ? 330 : countHeight

    return (
      <View style={styles.container}>
        {this.props.mode === "bottom" && <Modal
        transparent={true}
        visible={this.state.bottomVisible}
        onRequestClose={() => this._toggleModal()}>
          <TouchableOpacity activeOpacity={1} style={styles.modalBackDrop} onPress={() => this._toggleModal()}>
            <Animated.View style={[styles.bottomContainer, {height: maxHeight + 40, bottom}]}>
              <View style={styles.searchBoxWrapper}>
                <Icon color='#5E5E5E' containerStyle={{ marginRight: 5 }} name='ios-search' size={20} />

                <TextInput
                  style={{padding:0, flex:1, width:'100%', marginLeft:5}}
                  value={this.state.query}
                  onChangeText={(value) => this.onSearch(value)}
                />
              </View>

              <ScrollView contentContainerStyle={{padding:15}}>
                {this._renderList()}
              </ScrollView>
            </Animated.View>
          </TouchableOpacity>
        </Modal>}

        {this.props.mode === "modal" && <Modal
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => this._toggleModal()}>
          <TouchableOpacity
          activeOpacity={1}
          style={[styles.modalBackDrop, {alignItems:'center', justifyContent:'center'}]}
          onPress={() => this._toggleModal()}>
            <View style={[styles.modalContainer, {height: data && data.length <= 1 ? 120 : maxHeight + 15}]}>
              <View style={styles.searchBoxWrapper}>
                <Icon color='#5E5E5E' containerStyle={{ marginRight: 5 }} name='ios-search' size={20} />

                <TextInput
                  style={{padding:0, flex:1, width:'100%', marginLeft:5}}
                  value={this.state.query}
                  onChangeText={(value) => this.onSearch(value)}
                />
              </View>

              {data && data.length > 0 ? <ScrollView contentContainerStyle={{padding:15}}>
                {this._renderList()}
              </ScrollView> : <View style={{padding:15, alignItems:'center'}}>
                <Text style={styles.itemLabel}>No Data Available</Text>
              </View>}
            </View>
          </TouchableOpacity>
        </Modal>}

        <TouchableOpacity
        disabled={disabled}
        activeOpacity={1}
        style={inputContainer ? [inputContainer, disabled && styles.inputDisabled] :
        [styles.inputWrapper, disabled && styles.inputDisabled]}
        onPress={() => this._toggleModal()}>
          {value ?
          <Text style={styles.inputValue}>{value.name}</Text> :
          <Text style={[styles.inputValue, {color: '#9A9A9A'}]}>{placeholder}</Text>}

          <Icon name="ios-arrow-down" size={25} color="#9A9A9A" />
        </TouchableOpacity>

        { showError ? <Text style={styles.error}>{error}</Text> : null }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  modalBackDrop: {
    flex: 2,
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0, 0.5)'
  },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff'
  },
  modalContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 6
  },
  searchBoxWrapper: {
    width: '95%',
    alignSelf: 'center',
    height: 35,
    backgroundColor: '#EFEFEF',
    borderRadius: 5,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  titleInput: {
    fontSize: 14,
    color: '#232323',
    marginBottom: 10
  },
  itemWrapper: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  itemLabel: {
    fontSize: 14,
    color: '#000',
    marginLeft: 10
  },
  inputWrapper: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  inputDisabled: {
    backgroundColor: '#EFEFEF'
  },
  inputValue: {
    fontSize: 14,
    color: '#232323'
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginTop: 3,
  }
})
