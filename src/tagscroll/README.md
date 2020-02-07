<p align="center">
    <img src="https://i.imgur.com/P9hO3RL.gif" width="141" height="250">
</p>

## Usage
### Example
```jsx harmony
import React, { Component } from 'react'
import RNTagScroll from 'src/RNTagScroll'

export default Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [{
        id: 0,
        name: 'All'
      }, {
        id: 1,
        name: 'Lorem'
      }, {
        id: 2,
        name: 'Ipsum'
      }, {
        id: 3,
        name: 'Dolor'
      }, {
        id: 4,
        name: 'Sit'
      }, {
        id: 5,
        name: 'Amet'
      }],
    
      selected: {
        id: 0,
        name: 'All'
      }
    }
  }

  onSelect = (selected) => {
    this.setState({ selected })
  }

  render() {
    const { list, selected } = this.state

    return (
      <RNTagScroll
        showScroll={true}
        list={list}
        selected={selected}
        showEmptyState={false}
        onItemPress={this.onSelect.bind(this)}
      />
    )
  }
}
```

| Prop                                 | Description                                                                  | Default                |
| ------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |
| **`contentContainerStyle`**          | Style for container tag scroll                                               | `default styles`       |
| **`showEmptyState`**                 | Render empty state if no list                                                | `false`                |
| **`emptyStateStyle`**                | Style for empty state                                                        | `default styles`       |
| **`emptyText`**                      | Label text for empty state                                                   | `No Data Available`    |
| **`emptyTextStyle`**                 | Style for empty label text                                                   | `default styles`       |
| **`showScroll`**                     | Show scroll indicator                                                        | `true`                 |
| **`list`**                           | Data list (`Array of Object` width key `id` and `name`)                      | `null`                 |
| **`selected`**                       | Selected item list (`Object`)                                                | `null`                 |
| **`onItemPress`**                    | When item list pressed                                                       | `undefined`            |
| **`itemWrapperStyle`**               | Style for item list wrapper                                                  | `default styles`       |
| **`selectedItemWrapperStyle`**       | Style for selected item list wrapper                                         | `default styles`       |
| **`itemTextStyle`**                  | Style for item text/label                                                    | `default styles`       |
| **`selectedItemTextStyle`**          | Style for selected item text/label                                           | `default styles`       |