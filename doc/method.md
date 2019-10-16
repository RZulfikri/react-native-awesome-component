## Method:
This library have few shared method such as Scale, Object, Math.

**How to use**
```javascript
import {Method} from 'react-native-awesome-component'

Method.Scale.setDesignWidth(360)
Method.AlertHandler.showAlert(CUSTOM_ALERT_OPTIONS, CUSTOM_ALERT_STYLE)
const width = Method.Scale.scale(100)
const random = Method.Math.getRandomInt(1, 100)
const newObject = Method.Object.appendObject({a: 1}, 'b', 2}) // output {a: 1, b: 2}

```
### #Scale
Name | Description | Params | Return 
--- | --- | --- | --- 
setDesignHeight | function to change default value of DESIGN_HEIGHT | (value: number) | -
setDesignWidth | function to change default value of DESIGN_WIDTH | (value: number) | -
scale | function to get scale value from DESIGN_WITH to SCREEN_WIDTH | (value: number) | number
scaleHeight | function to get scale value from DESIGN_HEIGHT to SCREEN_HEIGHT | (value: number) | number

### #Object
Name | Description | Params | Return 
--- | --- | --- | --- 
appendObject | function to append value to an object | (currentObject: object, key: string, value: any) | object 
appendChildToView | function to append child to view | (currentView: any, childView: any) | view

### #Math
Name | Description | Params | Return 
--- | --- | --- | --- 
getRandomInt | function to get random value in range | (min: number, max: number) | number 

### #Array
Name | Description | Params | Return 
--- | --- | --- | --- 
mergeAndReplace | function to merge and replace old array to new array | (`oldArray: array = []`, `newArray: array = []`, `key: string = 'id'`, `sortId?: string`, `sortOrder?: mergeOrder`, `isDate: boolean = false`)<br/><br/>1. `oldArray` : is an old array that you want to merge<br/>2. `newArray` : ia a new array that you want to merge<br/>3. `key`: is key of object that you want to check and merge, so if key is exist old object will replaced by new object<br/>4. `sortId`: is key/id that use to sort array <br/>5. `sortOrder`: type or order for array `asc` or `desc`<br/>6. `isDate`: it used once the key/id is date | new array 
compareValues | function to compare value or array object, it used to sort/order array of object how to use `array.sort(compareValues(sortId, sortOrder, isDate))` | (`key: string`, `order: mergeOrder = 'asc'`, `isDate: boolean = false`)<br/><br/>1. `key`: is key of object you want to check for order/sort<br/>2. `order`: type of order (`asc` or `desc`)<br/>3. `isDate`: it used once the key/id is date | sorted array 

### #Helper
Name | Description | Params | Return 
--- | --- | --- | --- 
getFileNameFromPath | function to get file name from file path | (`path: string` = file path) | `string` file name
getFileNameFromURL | function to get file name from url path | (`url: string` = url path) | `string` file name 

### #Alert Handler
This is function to hide / show custom alert. For more information about CustomAlert check this [link](../doc/custom-alert.md).

```javascript
// AlertType = 'success' | 'error' | 'info'

//ICustomAlertConfiguration (Alert options object)
options = {
  enableDismiss: boolean, // props to enable or disable dismiss on press backdrop
  type: AlertType, // success | info | error. if value undefined it will show alert without top image / icon
  imgError: undefined, // image path (require(./)). if value undefined it will show default success icon
  imgSuccess: undefined. // image path (require(./)). if value undefined it will show default info icon
  imgInfo: undefined, // image path (require(./)). if value undefined it will show default error icon
  successColor: string, // color hex / name
  errorColor: string, // color hex / name
  infoColor: string, // color hex / name
  title: string, // alert title
  message: string, // alert message, if value undefined it wont render
  // if it dont have cancel or cancel is undefined it will only return one button, else it will show two button.
  confirm: {
    title: string, // button title
    callback: () => void // buntton callback on pressed
  },
  cancel: {
    title: string, // button title
    callback: () => void // buntton callback on pressed 
  },
}

//ICustomAlertStyleConfiguration: (Alert options custom style) [OPTIONAL]
style = {
  containerStyle: {}, // view style
  titleStyle: {}, // text style
  messageStyle: {}, // text style
  imageStyle: {}, // image style
  singleButtonContainerStyle: {}, // view style
  singleButtonTitleStyle: {}, // text style
  multiButtonContainerStyle: {
    confirm: {}, // view style
    cancel: {}, // view style
  },
  multiButtonTitleStyle: {
    confirm: {}, // text style
    cancel: {}, // text style
  },
  customConfiguration: ICustomAlertConfiguration // (same as option);
}

```

Name | Description | Params | Return 
--- | --- | --- | --- 
showAlert | function to show custom alert | (`options: ICustomAlertConfiguration`, `style?: ICustomAlertStyleConfiguration [OPTIONAL]`) | -
hideAlert | function to hide custom alert | - | - 