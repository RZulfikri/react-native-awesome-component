# react-native-awesome-component
This is repo for combined custom component. 

**How to Install**
```
npm install https://github.com/RZulfikri/react-native-awesome-component.git
or
yarn add https://github.com/RZulfikri/react-native-awesome-component.git
```

## PlaceholderImage
This is Image component with placholder. This component have 3 state (`loading`, `success`, `error`).

**Hot to use**
```
import {PlaceholderImage} from 'react-native-awesome-component`
return(
  <PlaceholderImage uri={''} /> // loading
  <PlaceholderImage uri={'http://rahmatzulfikri.xyz/images/avatar.jpg'} /> // success
  <PlaceholderImage uri={'http://rahmatzulfikri.xyz/images/avatar2.jpg'} /> // error
)
```

**Props**

Props | Description | Default  
--- | --- | --- 
uri: string | props to set image uri | -
width: number | props to set image with | `100`
height: number | props to set image height | `100`
radius: number | props to set image radius | -
borderWidth: number | props to set image border width | `0`
borderColor: string | props to set image border color | `#000000`
defaultSource: string | props to set default image when image not found / not valid | `./placeholder-image`
resizeMethod: ResizeMethodType | props to set resizeMethod | `"auto" | "resize" | "scale"`
resizeMode: ResizeModeType | props to set resizeMode | `"cover" | "contain" | "stretch" | "repeat" | "center"`
isCard: boolean | props to set image as card / set shadow | false

## PlaceholderText
This is Text component with placeholder. This component have 2 state (`with value`, `loading / without value`).

**How to use**
```
import {PlaceholderText} from 'react-native-awesome-component`

return(
  <PlaceholderText>{this.state.text}</PlaceholderText> // show text
  <PlaceholderText>''</PlaceholderText> // show loading
)
```

**Props**

Same as `<Text/>` props

## CustomButton
This is Button with default style and condition.

**How to use**

```
import {CustomButton} from 'react-native-awesome-component

return(
  <CustomButton
    title='INI TITLE'
    isCard
  />
)
```
**Props**

Props | Description | Default  
--- | --- | --- 
loading: boolean | props to set/show button loading | `false` 
disabled: boolean | props to disable button | `false` 
title: string | props to set button title | `'Button Title'` 
onPress: () => void | props to handle onPress button | `() => null` 
activeColor: string | props to set active button color | `#1abc9c`
disabledColor: string | props to set disable button color | `#EBEBE4`
width: number | props to set button width | -
height: number | props to set button height | `50`
radius: number | props to set button radius | -
borderWidth: number | props to set border width | -
borderColor: string | props to set border color | -
containerStyle: `StyleProp<ViewStyle>` | props to set style of button | -
activeTitleStyle: TextProps | props to set active title color | `#FFFFFF`
disableTitleStyle: TextProps | props to set disable title color | `#000000`
loadingColor: string | props to set button loading color | `#1abc9c`
isCard: boolean | props to set button as card / set shadow | false


## Styled
This is custom styled component, kind of components with default style.

**How to use**

```
import {Styled} from 'react-native-awesome-component

return(
  <Styled.Component isCard={true} />
  <Styled.H1>HELLO</Styled.H1>
)
```
**Props**

Name | Description | Props  
--- | --- | --- 
Container | Styled <View/> Component | `<View/>` props <br />`isCard: boolean` to set view as card<br />`padded: boolean` to set view using padding or not<br />`padding: number` to set value of padding<br />`disableVerticalPadding: boolean` to disable vertical padding<br />`disableHorizontalPadding: boolean` to disable horizontal padding
FlexContainer | Styled `<Container/>` with flex = 1 | same as `<Container/>` props
SafeContainer | Styled `<SafeAreaView/>` | same as `<Container/>` props
TouchableContainer | Styled `<TouchableOpacity/>` | same as `<Container/>` props
H1 | Styled `<Text/>` with H1 size | same as `<Text/>` props
H2 | Styled `<Text/>` with H2 size | same as `<Text/>` props
H3 | Styled `<Text/>` with H3 size | same as `<Text/>` props
H4 | Styled `<Text/>` with H4 size | same as `<Text/>` props
H5 | Styled `<Text/>` with H5 size | same as `<Text/>` props
H6 | Styled `<Text/>` with H6 size | same as `<Text/>` props
H7 | Styled `<Text/>` with H7 size | same as `<Text/>` props


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
