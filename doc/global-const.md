## GlobalConst
This is method to custom global constant/value that used in this component.

```javascript
  DEFAULT_GLOBAL_CONST: {
    PADDING: metrics.padding,
    SAFE_AREA_BACKGROUND_COLOR: Colors.white,
    BACKGROUND_COLOR: Colors.white,

    // BUTTON STYLE
    ACTIVE_BUTTON_COLOR: Colors.turqoise,
    ACTIVE_BUTTON_TITLE_COLOR: Colors.white,
    ACTIVE_BUTTON_TITLE_STYLE: {},
    DISABLE_BUTTON_COLOR: Colors.carara,
    DISABLE_BUTTON_TITLE_COLOR: Colors.black,
    DISABLE_BUTTON_TITLE_STYLE: {},
    BUTTON_TITLE_SIZE: scale(15),
    BUTTON_HEIGHT_SIZE: scale(50),
    BUTTON_LOADING_COLOR: Colors.turqoise,

    // FONT STYLE
    FONT_SIZE: scale(14),
    FONT_SMALL_SIZE: scale(12),
    H1: metrics.font.h1,
    H2: metrics.font.h2,
    H3: metrics.font.h3,
    H4: metrics.font.h4,
    H5: metrics.font.h5,
    H6: metrics.font.h6,
    H7: metrics.font.h7,

    // HEADER STYLE
    HEADER_HEIGHT: metrics.headerHeight,
    HEADER_BACKGROUND: Colors.white,
    HEADER_TITLE_SIZE: 20,
    HEADER_TITLE_COLOR: Colors.black,
    HEADER_TITLE_STYLE: {fontSize: 20, color: Colors.black},
    HEADER_LEFT_ICON_NAME: 'arrow-left',
    HEADER_LEFT_ICON_SIZE: 20,
    HEADER_LEFT_ICON_COLOR: Colors.black,
    HEADER_LEFT_BACK_ICON_IMAGE: undefined,
    HEADER_LEFT_BACK_ICON_IMAGE_STYLE: {width: 24, height: 24},
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
    CONNECTION_200_ALERT_TITLE: 'Request submitted',
    CONNECTION_200_ALERT_MESSAGE: 'Your request successfully submitted',
    CONNECTION_400_ALERT_TITLE: 'Sorry request failure',
    CONNECTION_400_ALERT_MESSAGE: 'Please check your input and try again',
    CONNECTION_500_ALERT_TITLE: 'Sorry for the inconvenience',
    CONNECTION_500_ALERT_MESSAGE: `Something error on our server, we're working on this error. Please try again later.`,

    // CUSTOM STEP BAR
    CUSTOM_STEP_BAR_HEIGHT: 8,
    CUSTOM_STEP_BAR_ACTIVE_COLOR: Colors.kermit_green,
    CUSTOM_STEP_BAR_INACTIVE_COLOR: Colors.very_light_pink_two,
    CUSTOM_STEP_BAR_SEPARATOR: true,
    CUSTOM_STEP_BAR_ROUND_CORNER: true,

    // EMPTY CONTAINER
    EMPTY_CONTAINER_TITLE: 'No Item Found',
    EMPTY_CONTAINER_MESSAGE: `We apologize, we don't have any item that you request for.`,
    EMPTY_CONTAINER_IMAGE: undefined,
    EMPTY_CONTAINER_TITLE_STYLE: {},
    EMPTY_CONTAINER_MESSAGE_STYLE: {},
    EMPTY_CONTAINER_IMAGE_STYLE: {},
    EMPTY_CONTAINER_BUTTON: undefined, // value must be view instance such as <CustomButton />

    // ERROR CONTAINER
    ERROR_CONTAINER_TITLE: 'Sorry something went wrong',
    ERROR_CONTAINER_MESSAGE: 'We apologize for the inconvenience, please try again later.',
    ERROR_CONTAINER_IMAGE: undefined,
    ERROR_CONTAINER_TITLE_STYLE: {},
    ERROR_CONTAINER_MESSAGE_STYLE: {},
    ERROR_CONTAINER_IMAGE_STYLE: {},
    ERROR_CONTAINER_BUTTON: undefined, // value must be view instance such as <CustomButton />

    // NO CONNECTION CONTAINER
    NO_CONNECTION_CONTAINER_TITLE: 'No Internet Connection',
    NO_CONNECTION_CONTAINER_MESSAGE: 'You are not connected to the internet. Make sure your mobile data or Wi-Fi is on.',
    NO_CONNECTION_CONTAINER_IMAGE: undefined,
    NO_CONNECTION_CONTAINER_TITLE_STYLE: {},
    NO_CONNECTION_CONTAINER_MESSAGE_STYLE: {},
    NO_CONNECTION_CONTAINER_IMAGE_STYLE: {},
    NO_CONNECTION_CONTAINER_BUTTON: undefined, // value must be view instance such as <CustomButton />

    // CUSTOM FLAT LIST
    FLATLIST_EMPTY_CONTAINER: <EmptyContainer />, // make sure you have onRefresh props to pass refresh function
    FLATLIST_ERROR_CONTAINER: <ErrorContainer />, // make sure you have onRefresh props to pass refresh function
    FLATLIST_NO_CONNECTION_CONTAINER: <NoConnectionContainer />, // make sure you have onRefresh props to pass refresh function

    // CUSTOM SELECT
    CUSTOM_SELECT_BACKGROUND_COLOR: Colors.very_light_pink_two,
    CUSTOM_SELECT_ICON_TYPE: 'material-community',
    CUSTOM_SELECT_RIGHT_ICON_NAME: 'chevron-right',
    CUSTOM_SELECT_RIGHT_ICON_COLOR: Colors.black,
    CUSTOM_SELECT_RIGHT_ICON_SIZE: 20,
    CUSTOM_SELECT_RIGHT_ICON_STYLE: {},
    CUSTOM_SELECT_RIGHT_RENDER: undefined,
    CUSTOM_SELECT_HEADER_TITLE_STYLE: {},
    CUSTOM_SELECT_HEADER_BACKGROUND_COLOR: Colors.white,
    CUSTOM_SELECT_HEADER_LEFT_ICON_NAME: 'arrow-left',
    CUSTOM_SELECT_HEADER_LEFT_ICON_SIZE: 20,
    CUSTOM_SELECT_HEADER_LEFT_ICON_COLOR: Colors.black,
    CUSTOM_SELECT_HEADER_LEFT_ICON_STYLE: {},
    CUSTOM_SELECT_HEADER_RIGHT_ICON_NAME: 'check',
    CUSTOM_SELECT_HEADER_RIGHT_ICON_SIZE: 20,
    CUSTOM_SELECT_HEADER_RIGHT_ICON_COLOR: Colors.black,
    CUSTOM_SELECT_HEADER_RIGHT_ICON_STYLE: {},
    CUSTOM_SELECT_HEADER_RENDER_LEFT: undefined,
    CUSTOM_SELECT_HEADER_RENDER_RIGHT: undefined,
    CUSTOM_SELECT_HEADER_RENDER: undefined,
    CUSTOM_SELECT_ITEM_RENDER: undefined,
    CUSTOM_SELECT_ITEM_TITLE_STYLE: {},
    CUSTOM_SELECT_ITEM_STYLE: {},
    CUSTOM_SELECT_ITEM_SELECT_ICON_NAME: 'radiobox-marked',
    CUSTOM_SELECT_ITEM_SELECT_ICON_COLOR: Colors.dark_slate_blue,
    CUSTOM_SELECT_ITEM_SELECT_ICON_SIZE: 20,
    CUSTOM_SELECT_ITEM_SELECT_ICON_STYLE: {},
    CUSTOM_SELECT_ITEM_UNSELECT_ICON_NAME: 'radiobox-blank',
    CUSTOM_SELECT_ITEM_UNSELECT_ICON_COLOR: Colors.warm_grey,
    CUSTOM_SELECT_ITEM_UNSELECT_ICON_SIZE: 20,
    CUSTOM_SELECT_ITEM_UNSELECT_ICON_STYLE: {},
    CUSTOM_SELECT_ITEM_MULTI_RENDER: undefined,
    CUSTOM_SELECT_ITEM_MULTI_TITLE_STYLE: {},
    CUSTOM_SELECT_ITEM_MULTI_STYLE: {},
    CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_NAME: 'checkbox-marked',
    CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_COLOR: Colors.dark_slate_blue,
    CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_SIZE: 20,
    CUSTOM_SELECT_ITEM_MULTI_SELECT_ICON_STYLE: {},
    CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_NAME: 'checkbox-blank-outline',
    CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_COLOR: Colors.warm_grey,
    CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_SIZE: 20,
    CUSTOM_SELECT_ITEM_MULTI_UNSELECT_ICON_STYLE: {},

    // CUSTOM INPUT
    CUSTOM_INPUT_LABEL_TYPE: 'default',
    CUSTOM_INPUT_LABEL_STYLE: {},
    CUSTOM_INPUT_PLACEHOLDER_COLOR: undefined,
    CUSTOM_INPUT_TEXT_INPUT_STYLE: {},
    CUSTOM_INPUT_ERROR_LABEL_STYLE: {},
    CUSTOM_INPUT_UNDERLINE_WIDTH: 1,
    CUSTOM_INPUT_UNDERLINE_COLOR: Colors.very_light_pink_five,
    CUSTOM_INPUT_FOCUS_COLOR: Colors.alertSuccess,
    CUSTOM_INPUT_ERROR_COLOR: Colors.alertError,
    CUSTOM_INPUT_VALIDATE_ON_CHANGE: true,
    CUSTOM_INPUT_PASSWORD_REGEX: new RegExp('^(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
    CUSTOM_INPUT_ERROR_MESSAGE_EMAIL: 'Invalid email address',
    CUSTOM_INPUT_ERROR_MESSAGE_PASSWORD: 'Password must contain letters and number.',
    CUSTOM_INPUT_ERROR_MESSAGE_REQUIRED: (label) => label ? `${label} is required` : 'This field is required',
    CUSTOM_INPUT_ERROR_MESSAGE_MINIMUM: (label, min) => label ? `${label} must have at least ${min} characters` : `This field must have at least ${min} characters`,
    CUSTOM_INPUT_ERROR_MESSAGE_MAXIMUM: (label, max) => label ? `${label} must have at least ${max} characters` : `This field maximum have ${max} characters`,
    CUSTOM_INPUT_PHONE_COUNTRY_PLACEHODLER: 'Code',
    CUSTOM_INPUT_PHONE_COUNTRY_SELECT_LABEL: 'Select Country',

    // CUSTOM DATEPICKER
    CUSTOM_DATE_PICKER_ICON_TYPE: 'material-community',
    CUSTOM_DATE_PICKER_RIGHT_ICON_NAME: 'calendar',
    CUSTOM_DATE_PICKER_RIGHT_ICON_COLOR: Colors.brownGrey,
    CUSTOM_DATE_PICKER_RIGHT_ICON_SIZE: 28,
    CUSTOM_DATE_PICKER_RIGHT_ICON_STYLE: {},
    CUSTOM_DATE_PICKER_RIGHT_RENDER: undefined,
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
setGlobalActiveButtonTitleStyle | function to change global active button title style | (value: TextStyle) | -
setGlobalDisableButtonColor | function to change global disable button color | (color: string) | - 
setGlobalDisableButtonTitleColor | function to change global disable button title color | (color: string) | - 
setGlobalDisableButtonTitleStyle | function to change global active button title style | (value: TextStyle) | -
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
setGlobalHeaderTitleStyle | function to set global header style | (value: TextStyle) | -
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
setGlobalHeaderBackIconImage | function to set global back icon image | (value: imageInstance) | `undefined` 
setGlobalHeaderBackIconImageStyle | function to set global custom back icon image style | (value: ImagStyle) | {height: 24, width: 24} |

### ConnectionHandler
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalConnectionHandlerSuccessTitle | function to change global connected title | (value: string) | - 
setGlobalConnectionHandlerSuccessMessage | function to change global connected message | (value: string) | -
setGlobalConnectionHandlerErrorTitle | function to change global disconected title | (value: string) | - 
setGlobalConnectionHandlerErrorMessage | function to change global disconected message | (value: string) | -
setGlobalConnectionHandler200AlertTitle | function to set global connection handler success 200 code title | (value: string) | -
setGlobalConnectionHandler200AlertMessage | function to set global connection handler success 200 code message | (value: string) | -
setGlobalConnectionHandler400AlertTitle | function to set global connection handler error 400 code title | (value: string) | -
setGlobalConnectionHandler400AlertMessage | function to set global connection handler error 400 code message | (value: string) | -
setGlobalConnectionHandler500AlertTitle | function to set global connection handler error 500 code title | (value: string) | -
setGlobalConnectionHandler500AlertMessage | function to set global connection handler error 500 code message | (value: string) | -

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
setGlobalFlatlistEmptyContainer | function to set default empty container component | (value: any) | -
setGlobalFlatlistErrorContainer | function to set default error container component | (value: any) | -
setGlobalFlatlistNoConnectionContainer | function to set default no connection container component | (value: any) | -

### CustomSelect
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalCustomSelectBackgroundColor | function to set default modal background | (value: string) | -
setGlobalCustomSelectIconType | function to set icon type that used in this componrnt (value: IconType) | -
setGlobalCustomSelectRightIconName | function to set input right icon name | (value: string) | -
setGlobalCustomSelectRightIconColor | function to set input right icon color |  (value: string) | -
setGlobalCustomSelectRightIconSize | function to set input right icon size | (value: number) | -
setGlobalCustomSelectRightIconStyle | function to set input right icon style | (value: StyleProp<ImageStyle>) | -
setGlobalCustomSelectRightRender | function to render right icon | (value: any) | -
setGlobalCustomSelectHeaderTitleStyle | function to set header title style | (value: StyleProp<TextStyle>) | -
setGlobalCustomSelectHeaderBackgroundColor | function to set header background color | (value: string) | -
setGlobalCustomSelectHeaderLeftIconName | function to set header left icon name | (value: string) | -
setGlobalCustomSelectHeaderLeftIconSize | function to set header left icon size | (value: number) | -
setGlobalCustomSelectHeaderLeftIconColor | function to set header left icon color | (value: string) | -
setGlobalCustomSelectHeaderLeftIconStyle | function to set header left icon style | (value: StyleProp<ImageStyle>) | -
setGlobalCustomSelectHeaderRightIconName | function to set header right icon name | (value: string) | -
setGlobalCustomSelectHeaderRightIconSize | function to set header right icon size | (value: number) | -
setGlobalCustomSelectHeaderRightIconColor | function to set header right icon color | (value: string) | -
setGlobalCustomSelectHeaderRightIconStyle | function to set header right icon style | (value: StyleProp<ImageStyle>) | -
setGlobalCustomSelectHeaderRenderLeft | function to render header left action | (value: any) | -
setGlobalCustomSelectHeaderRenderRight | function to render header right action | (value: any) | -
setGlobalCustomSelectHeaderRender | function to render header | (value: any) | -
setGlobalCustomSelectItemRender | function to render item | (value: any) | -
setGlobalCustomSelectItemTitleStyle | function to set item title style | (value: StyleProp<TextStyle>) | -
setGlobalCustomSelectItemStyle | function to set item style | (value: StyleProp<ViewStyle>) | -
setGlobalCustomSelectItemSelectIconName | function to set select icon name | (value: string) | -
setGlobalCustomSelectItemSelectIconColor | function to set select icon color | (value: string) | -
setGlobalCustomSelectItemSelectIconSize | function to set select icon size | (value: number) | -
setGlobalCustomSelectItemSelectIconStyle | function to set select icon style | (value: StyleProp<ImageStyle>) | -
setGlobalCustomSelectItemUnselectIconName | function to set unselect icon name | (value: string) | -
setGlobalCustomSelectItemUnselectIconSize | function to set unselect icon size | (value: string) | -
setGlobalCustomSelectItemUnselectIconColor | function to set unselect icon color | (value: number) | -
setGlobalCustomSelectItemUnselectIconStyle | function to set unselect icon style | (value: StyleProp<ImageStyle>) | -
setGlobalCustomSelectItemMultiRender | function to render multi item | (value: any) | -
setGlobalCustomSelectItemMultiTitleStyle | function to set multi title style | (value: StyleProp<TextStyle>) | -
setGlobalCustomSelectItemMultiStyle | function to set multi item style | (value: StyleProp<ViewStyle>) | -
setGlobalCustomSelectItemMultiSelectIconName | function to set multi select icon name | (value: string) | -
setGlobalCustomSelectItemMultiSelectIconColor | function to set multi select icon color | (value: string) | -
setGlobalCustomSelectItemMultiSelectIconSize | function to set multi select icon size | (value: number) | -
setGlobalCustomSelectItemMultiSelectIconStyle | function to set multi select icon style | (value: StyleProp<ImageStyle>) | -
setGlobalCustomSelectItemMultiUnselectIconName | function to set milti unselect icon name | (value: string) | -
setGlobalCustomSelectItemMultiUnselectIconSize | function to set milti unselect icon size | (value: string) | -
setGlobalCustomSelectItemMultiUnselectIconColor | function to set milti unselect icon color | (value: number) | -
setGlobalCustomSelectItemMultiUnselectIconStyle | function to set milti unselect icon style | (value: StyleProp<ImageStyle>) | -

### CustomInput
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalCustomInputLabelType | function to set global custom input label type | (value: CustomInputLabelType) | -
setGlobalCustomInputLabelStyle | function to set global custom input label style | (value: TextStyle) | -
setGlobalCustomInputPlaceholderColor | function to set global custom placeholder color | (value: string) | -
setGlobalCustomInputTextInputStyle | function to set global custom textInput style | (value: TextStyle) | - 
setGlobalCustomInputErrorLabelStyle | function to set global custom error label style | (value: TextStyle) | -
setGlobalCustomInputUnderlineWidth | function to set global custom input underline width | (value: number) | -
setGlobalCustomInputUnderlineColor | function to set global custom input unserline color |  (value: string) | -
setGlobalCustomInputFocusColor | function to set global custom input focus color | (value: string) | -
setGlobalCustomInpuErrorColor | function to set global custom input error color | (value: string) | -
setGlobalCustomInputValidateOnChange | function to set global custom input validation process | (value: boolean) | -
setGlobalCustomInputPasswordRegex | function to set global custom input password validation | (value: any) | -
setGlobalCustomInputErrorMessageEmail | function to set global custom input error email message | (value: string) | -
setGlobalCustomInputErrorMessagePassword | function to set global custom input error password message | (value: string) | -
setGlobalCustomInputErrorMessageRequired | function to set global custom input error required message | (value: any) | -
setGlobalCustomInputErrorMessageMinimum | function to set global custom input error minimum length message | (value: any) | -
setGlobalCustomInputErrorMessageMaximum | function to set global custom input error maximum length message | (value: any) | -
setGlobalCustomInputPhoneCountryPlaceholder | function to set global custom input phone-county placeholder | (value: string) | -
setGlobalCustomInputPhoneCountrySelectLabel | function to set global custom input phone-county select label | (value: string) | -

### CustomDatePicker
Name | Description | Params | Return 
--- | --- | --- | --- 
setGlobalCustomDatePickerIconType | function to set flobal custom date picker icon type | (value: string) | -
setGlobalCustomDatePickerRightIconName | function to set flobal custom date picker right icon name | (value: string) | -
setGlobalCustomDatePickerRightIconColor | function to set flobal custom date picker right icon color | (value: string) | -
setGlobalCustomDatePickerRightIconSize | function to set flobal custom date picker right icon size | (value: number) | -
setGlobalCustomDatePickerRightIconStyle | function to set flobal custom date picker right icon style | (value: StyleProp<TextStyle>) | -
setGlobalCustomDatePickerRightRender | function to set flobal custom date picker render right icon | (value: any) | -