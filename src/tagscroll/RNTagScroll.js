import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default class RNTagScroll extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render () {
    const {
      contentContainerStyle,
      showEmptyState,
      emptyStateStyle,
      emptyText,
      emptyTextStyle,
      showScroll,
      list,
      selected,
      onItemPress,
      itemWrapperStyle,
      selectedItemWrapperStyle,
      itemTextStyle,
      selectedItemTextStyle
    } = this.props

    if (showEmptyState && list && list.length === 0) {
      return (
        <View style={emptyStateStyle ? emptyStateStyle : styles.emptyContainer}>
          <Text style={emptyTextStyle ? emptyTextStyle : styles.emptyText}>{emptyText ? emptyText : 'No Data Available'}</Text>
        </View>
      )
    } else {
      return (
        <ScrollView
          horizontal={true}
          contentContainerStyle={contentContainerStyle ? contentContainerStyle : styles.contentContainerStyle}
          showsHorizontalScrollIndicator={showScroll ? showScroll : true}>
          {list && list.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => onItemPress(item)}
              style={[
                itemWrapperStyle ? itemWrapperStyle : styles.itemWrapper,
                selected.id == item.id && (selectedItemWrapperStyle ? selectedItemWrapperStyle : styles.selectedItemWrapper)
              ]}>
              <Text style={[
                itemTextStyle ? itemTextStyle : styles.itemText,
                selected.id == item.id && (selectedItemTextStyle ? selectedItemTextStyle : styles.selectedItemText)
              ]}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )
    }


  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center'
  },
  emptyText: {
    fontSize: 14,
    color: '#232323',
    textAlign: 'center'
  },
  contentContainerStyle: {
    backgroundColor: 'white',
    padding: 15
  },
  itemWrapper: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#0073b1',
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  itemText: {
    fontSize: 14,
    color: '#0073b1',
    textAlign: 'center'
  },
  selectedItemWrapper: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: '#0073b1',
    marginRight: 10,
    backgroundColor: '#0073b1'
  },
  selectedItemText: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center'
  }
})
