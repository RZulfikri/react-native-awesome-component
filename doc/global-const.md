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
    H1: 12,
    H2: 14,
    H3: 16,
    H4: 18,
    H5: 28,
    H6: 36,
    H7: 48,

    // HEADER STYLE
    HEADER_HEIGHT: metrics.headerHeight,
    HEADER_BACKGROUND: Colors.white,
    HEADER_TITLE_SIZE: 20,
    HEADER_TITLE_COLOR: Colors.black,
    HEADER_LEFT_ICON_NAME: 'arrow-left',
    HEADER_LEFT_ICON_SIZE: 20,
    HEADER_LEFT_ICON_COLOR: Colors.black,
    HEADER_LEFT_ACTION_TITLE_SIZE: 15,
    HEADER_LEFT_ACTION_TITLE_COLOR: Colors.black,
    HEADER_RIGHT_ICON_SIZE: 20,
    HEADER_RIGHT_ICON_COLOR: Colors.black,
    HEADER_RIGHT_ACTION_TITLE_SIZE: 17,
    HEADER_RIGHT_ACTION_TITLE_COLOR: Colors.black,
    HEADER_ICON_TYPE: 'font-awesome5',
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
setGlobalTypography | function to change global typography size| (H1?: number, H2?: number, H3?: number, H4?: number, H5?: number, H6?: number, H7?: number) | - 
setGlobalHeaderHeightSize | function to change global header height size | (value: number) | - 
setGlobalHeaderBackgroundColor | function to change global header background color | (value: string) | - 
setGlobalHeaderTitleSize | function to change global header title size | (value: number) | - 
setGlobalHeaderTitleColor | function to change global header title color | (value: string) | - 
setGlobalHeaderLeftIconName | function to change global header left icon name | (value: string) | - 
setGlobalHeaderLeftIconSize | function to change global header left icon size | (value: number) | - 
setGlobalHeaderLeftIconColor | function to change global header left icon color | (value: string) | - 
setGlobalHeaderLeftActionTitleSize | function to change global left action title size | (value: number) | - 
setGlobalHeaderLeftActionTitleColor | function to change global left action title color | (value: string) | - 
setGlobalHeaderRightIconSize | function to change global header right icon size | (value: number) | - 
setGlobalHeaderRightIconColor | function to change global header right icon color | (value: string) | - 
setGlobalHeaderRightActionTitleSize | function to change global header right action title size | (value: number) | - 
setGlobalHeaderRightActionTitleColor | function to change global header right action title color | (value: string) | - 
setGlobalHeaderIconType | function to change global header icon type `(ant-design, entypo, evil-icons, feather, font-awesome, font-awesome5, fontisto, foundation, ionicons, material-community, material-icons, octicons)` | (value: string) | - 

