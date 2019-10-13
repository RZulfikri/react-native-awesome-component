## Method:
This library have few shared method such as Scale, Object, Math.

**How to use**
```
import {Method} from 'react-native-awesome-component'

Method.Scale.setDesignWidth(360)
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

### #Math
Name | Description | Params | Return 
--- | --- | --- | --- 
getRandomInt | function to get random value in range | (min: number, max: number) | number 

### #Array
Name | Description | Params | Return 
--- | --- | --- | --- 
mergeAndReplace | function to merge and replace old array to new array | (`oldArray: array = []`, `newArray: array = []`, `key: string = 'id'`, `sortId?: string`, `sortOrder?: mergeOrder`, `isDate: boolean = false`)<br/><br/>1. `oldArray` : is an old array that you want to merge<br/>2. `newArray` : ia a new array that you want to merge<br/>3. `key`: is key of object that you want to check and merge, so if key is exist old object will replaced by new object<br/>4. `sortId`: is key/id that use to sort array <br/>5. `sortOrder`: type or order for array `asc` or `desc`<br/>6. `isDate`: it used once the key/id is date | new array 
compareValues | function to compare value or array object, it used to sort/order array of object how to use `array.sort(compareValues(sortId, sortOrder, isDate))` | (`key: string`, `order: mergeOrder = 'asc'`, `isDate: boolean = false`)<br/><br/>1. `key`: is key of object you want to check for order/sort<br/>2. `order`: type of order (`asc` or `desc`)<br/>3. `isDate`: it used once the key/id is date | sorted array 