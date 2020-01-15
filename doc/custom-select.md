## CustomSelect

This is Picker component that can select multiple/single item.

<img src="./images/select-picker.png" width="400px" >
<img src="./images/select-picker-modal.png" width="400px" >

**How to use**

```javascript
import { CustomSelect } from "react-native-awesome-component";

const dataListObject = [
  {
    id: 1,
    description: "Activity"
  },
  {
    id: 2,
    description: "Chanting"
  },
  {
    id: 3,
    description: "Charity"
  },
  {
    id: 4,
    description: "Dharma"
  },
  {
    id: 5,
    description: "Recycling"
  }
];

return (
  <CustomSelect
    placeholder="testing"
    label="testing label"
    isRequired
    data={dataList}
    multiSelect
    value={selectedValue}
    keyValue="id"
    keyDescription="description"
    onChangeValue={value => {
      // do something with value
    }}
  />
);
```

**Props**

Props | Description | Default  
--- | --- | --- 
placeholder: string; | props to set placeholder | -
value: any; | props to set value | -
data: any[]; | props to set list to pick | -
onChangeValue: (value: any) => void | props to handle once value is change | -
label: string; | props to set label | -
isRequired: boolean; | props to set if input is required | `false`
error: string; | props to set error message | -
rightIcon: string; | props to set input right icon name | -
keyValue: string; | props to set key value | -
keyDescription: string; | props to set description key to show item | -
multiSelect: boolean; | props to set select type, multiple or single | `false`
labelType: string; | props to set label type | `top-label`
selectedPickerColor: string; | props to set selected color | -
unSelectedPickerColor: string; | props to set unselected color | -
selectTitle: string; | props to set modal select title | `Select Item`
disabled: string; | props to disable input | `false`
onChangeValidation: (hasError: boolean) => void; | props handle/get value is input is error | -