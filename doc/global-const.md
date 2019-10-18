## GlobalConst
This is method to custom global constant/value that used in this component.

```javascript
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

    // CONNECTION HANDLER
    CONNECTION_SUCCESS_TITLE: 'Connected',
    CONNECTION_SUCCESS_MESSAGE: 'Connected to the internet',
    CONNECTION_ERROR_TITLE: 'Disconected',
    CONNECTION_ERROR_MESSAGE: 'No internet connection',

    // CUSTOM STEP BAR
    CUSTOM_STEP_BAR_HEIGHT: 2;
    CUSTOM_STEP_BAR_ACTIVE_COLOR: '#67c100';
    CUSTOM_STEP_BAR_INACTIVE_COLOR: '#eaeaea';
    CUSTOM_STEP_BAR_SEPARATOR: true;
    CUSTOM_STEP_BAR_ROUND_CORNER: true;

    // EMPTY CONTAINER
    EMPTY_CONTAINER_TITLE: string;
    EMPTY_CONTAINER_MESSAGE: string;
    EMPTY_CONTAINER_IMAGE: any;
    EMPTY_CONTAINER_TITLE_STYLE: object;
    EMPTY_CONTAINER_MESSAGE_STYLE: object;
    EMPTY_CONTAINER_IMAGE_STYLE: object;
    EMPTY_CONTAINER_BUTTON: any; // value must be view instance such as <CustomButton />

    // ERROR CONTAINER
    ERROR_CONTAINER_TITLE: string;
    ERROR_CONTAINER_MESSAGE: string;
    ERROR_CONTAINER_IMAGE: any;
    ERROR_CONTAINER_TITLE_STYLE: object;
    ERROR_CONTAINER_MESSAGE_STYLE: object;
    ERROR_CONTAINER_IMAGE_STYLE: object;
    ERROR_CONTAINER_BUTTON: any; // value must be view instance such as <CustomButton />

    // NO CONNECTION CONTAINER
    NO_CONNECTION_CONTAINER_TITLE: string;
    NO_CONNECTION_CONTAINER_MESSAGE: string;
    NO_CONNECTION_CONTAINER_IMAGE: any;
    NO_CONNECTION_CONTAINER_TITLE_STYLE: object;
    NO_CONNECTION_CONTAINER_MESSAGE_STYLE: object;
    NO_CONNECTION_CONTAINER_IMAGE_STYLE: object;
    NO_CONNECTION_CONTAINER_BUTTON: any; // value must be view instance such as <CustomButton />

    // CUSTOM FLAT LIST
    FLATLIST_EMPTY_CONTAINER: any; // make sure you have onRefresh props to pass refresh function
    FLATLIST_ERROR_CONTAINER: any; // make sure you have onRefresh props to pass refresh function
    FLATLIST_NO_CONNECTION_CONTAINER: any; // make sure you have onRefresh props to pass refresh function
  }
```

**How to use**
```javascript
import {GlobalConst} from 'react-native-awesome-component'
GlobalConst.setGlobalActiveButtonColor('blue')
```
### GlobalStyle value
Name | Description | Params | Return 
--- | --- | --- | --- 
getValue | function to get latest value of global const | - | global const object
getDefaultValue | function get get default value of global const | - | global const default object

### CustomButton
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalActiveButtonColor | function to change global active button color | (color: string) | - 
setGlobalActiveButtonTitleColor | function to change global active button title color | (color: string) | -
setGlobalDisableButtonColor | function to change global disable button color | (color: string) | - 
setGlobalDisableButtonTitleColor | function to change global disable button title color | (color: string) | - 
setGlobalButtonTitleSize | function to change global button title size | (size: number) | - 
setGlobalButtonHeightSize | function to change global button height | (size: number) | -
setGlobalButtonLoadingColor | function to change global button loading color | (color: string) | -

### Styled
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalPaddingSize | function to change global padding size that used in styled.Component | (size: number) | -
setGlobalSafeAreaBackgroundColor | function to change global backgroundColor that used in styled.SafeComponent | (color: string) | - 
setGlobalBackgroundColor | function to change global backgroundColor that used in styled.Component | (color: string) | -
setGlobalFontSize | function to change global fontsize that used in PlaceholderText | (size: number) | - 
setGlobalTypography | function to change global typography size| (H1?: number, H2?: number, H3?: number, H4?: number, H5?: number, H6?: number, H7?: number) | - 

### CustomHeader
Name | Description | Params | Return 
--- | --- | --- | --- 
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

### ConnectionHandler
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalConnectionHandlerSuccessTitle | function to change global connected title | (value: string) | - 
setGlobalConnectionHandlerSuccessMessage | function to change global connected message | (value: string) | -
setGlobalConnectionHandlerErrorTitle | function to change global disconected title | (value: string) | - 
setGlobalConnectionHandlerErrorMessage | function to change global disconected message | (value: string) | -

### CustomStepBar
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalCustomStepBarHeight  | function to change global custom step bar height | (value: number) | -
setGlobalCustomStepBarActiveColor  | function to change global custom step bar active color | (value: string) | -
setGlobalCustomStepBarInactiveColor | function to change global custom step bar inactive color | (value: string) | -
setGlobalCustomStepBarSeparator | function to change global step bar separator flag | (value: boolean) | -
setGlobalCustomStepBarRoundCorner | function to change global step bar round corder flag | (value: booleab) | -

### EmptyContainer
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalEmptyContainerTitle | function to change global empty container title | (value: string) | -
setGlobalEmptyContainerMessage | function to change global empty container message | (value: string) | -
setGlobalEmptyContainerImage | function to change global empty container image | (value: any) | -
setGlobalEmptyContainerButton | function to change global empty container button | (value: any) | -
setGlobalEmptyContainerTitleStyle | function to change global empty container title style | (value: object) | -
setGlobalEmptyContainerMessageStyle | function to change global empty container message style | (value: object) | -
setGlobalEmptyContainerImageStyle | function to change global empty container image style | (value: object) | -

### ErrorContainer
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalErrorContainerTitle | function to change global error container title | (value: string) | -
setGlobalErrorContainerMessage | function to change global error container message | (value: string) | -
setGlobalErrorContainerImage | function to change global error container image | (value: any) | -
setGlobalErrorContainerButton | function to change global error container button | (value: any) | -
setGlobalErrorContainerTitleStyle | function to change global error container title style | (value: object) | -
setGlobalErrorContainerMessageStyle | function to change global error container message style | (value: object) | -
setGlobalErrorContainerImageStyle | function to change global error container image style | (value: object) | -

### NoConnectionContainer
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalNoConnectionContainerTitle | function to change global no connection container title | (value: string) | -
setGlobalNoConnectionContainerMessage | function to change global no connection container message | (value: string) | -
setGlobalNoConnectionContainerImage | function to change global no connection container image | (value: any) | -
setGlobalNoConnectionContainerButton | function to change global no connection container button | (value: any) | -
setGlobalNoConnectionContainerTitleStyle | function to change global no connection container title style | (value: object) | -
setGlobalNoConnectionContainerMessageStyle | function to change global no connection container message style | (value: object) | -
setGlobalNoConnectionContainerImageStyle | function to change global no connection container image style | (value: object) | -

### CustomFlatlist
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalFlatlistEmptyContainer | function to set default empty container component | (value: any) | `<EmptyContainer />`
setGlobalFlatlistErrorContainer | function to set default error container component | (value: any) | `<ErrorContainer />`
setGlobalFlatlistNoConnectionContainer | function to set default no connection container component | (value: any) | `<NoConnectionContainer />`