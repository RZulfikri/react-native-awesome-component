## GlobalConst
This is method to custom global constant/value that used in this component.

```
  DEFAULT_GLOBAL_CONST: {
    PADDING: metrics.padding, // 10
    SAFE_AREA_BACKGROUND_COLOR: Colors.white, // #FFFFFF
    BACKGROUND_COLOR: Colors.white, // #FFFFFF

    // BUTTON STYLE
    ACTIVE_BUTTON_COLOR: Colors.turqoise, // #1abc9c
    ACTIVE_BUTTON_TITLE_COLOR: Colors.white, // #FFFFFF
    DISABLE_BUTTON_COLOR: Colors.carara, // #EBEBE4
    DISABLE_BUTTON_TITLE_COLOR: Colors.black, // #000000
    BUTTON_TITLE_SIZE: scale(15), // 15
    BUTTON_HEIGHT_SIZE: scale(50), // 50
    BUTTON_LOADING_COLOR: Colors.turqoise, // #1abc9c

    // FONT STYLE
    FONT_SIZE: scale(14) // 14
  }
```

**How to use**
```
import {GlobalConst} from 'react-native-awesome-component'
GlobalConst.setGlobalActiveButtonColor('blue')
```

Name | Description | Params | Return 
--- | --- | --- | --- 
getValue | function to get latest value of global const | - | global const object
getDefaultValue | function get get default value of global const | - | global const default object
setGlobalActiveButtonColor | function to change global active button color | (color: string) | - 
setGlobalActiveButtonTitleColor | function to change global active button title color | (color: string) | -
setGlobalDisableButtonColor | function to change global disable button color | (color: string) | - 
setGlobalDisableButtonTitleColor | function to change global disable button title color | (color: string) | - 
setGlobalButtonTitleSize | function to change global button title size | (size: number) | - 
setGlobalButtonHeightSize | function to change global button height | (size: number) | -
setGlobalButtonLoadingColor | function to change global button loading color | (color: string) | -
setGlobalPaddingSize | function to change global padding size that used in styled.Component | (size: number) | -
setGlobalSafeAreaBackgroundColor | function to change global backgroundColor that used in styled.SafeComponent | (color: string) | - 
setGlobalBackgroundColor | function to change global backgroundColor that used in styled.Component | (color: string) | -
setGlobalFontSize | function to change global fontsize that used in PlaceholderText | (size: number) | - 
