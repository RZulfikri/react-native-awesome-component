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
setDesignWidth | function to change default value of DESIGN_WIDTH | (value: number) | -
scale | function to get scale value from DESIGN_WITH to SCREEN_WIDTH | (value: number) | number

### #Object
Name | Description | Params | Return 
--- | --- | --- | --- 
appendObject | function to append value to an object | (currentObject: object, key: string, value: any) | object 

### #Math
Name | Description | Params | Return 
--- | --- | --- | --- 
getRandomInt | function to get random value in range | (min: number, max: number) | number 