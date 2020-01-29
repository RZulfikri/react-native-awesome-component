<p align="center">
    <img src="https://i.imgur.com/6Csaarm.gif">
</p>

## Usage
### Example
```jsx harmony
import React, { Component } from 'react'
import RNDropdown from 'src/RNDropdown'

export default Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selected: null,
      data: [{
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
      }]
    }
  }

  setFieldValue = (name, value) => {
      this.setState({
        [name]: value
      })
  }

  render() {
    const { data, selected } = this.state

    return (
      <RNDropdown
          name='selected'
          placeholder='Select'
          mode='modal'
          data={data}
          value={selected}
          setFieldValue={this.setFieldValue}
          localSearch={true}
      />
    )
  }
}
```

| Prop                                 | Description                                                                  | Default                |
| ------------------------------------ | ---------------------------------------------------------------------------- | ---------------------- |
| **`name`**                           | The field value name, can be used for state or formik field                  | `undefined`            |
| **`placeholder`**                    | Placeholder value                                                            | `undefined`            |
| **`mode`**                           | Dropdown mode, `modal` or `bottom`                                           | `modal`                |
| **`data`**                           | List Array of Object                                                         | `null`                 |
| **`value`**                          | Value of selected item (`Object`)                                            | `null`                 |
| **`setFieldValue`**                  | Function to set selected value, can use formik props or custom function      | `undefined`            |
| **`localSearch`**                    | Search from local data, didn't hit to the API                                | `false`                |
| **`showError`**                      | For formik props                                                             | `null`                 |
| **`disabled`**                       | Disabled input dropdown                                                      | `false`                |
| **`inputContainer`**                 | Custom style for input container                                             | `null`                 |
| **`fetchData`**                      | Hit to API after select item, with `id` of selected item                     | `null`                 |