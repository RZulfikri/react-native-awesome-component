## CustomHeader
This is Custom header component.

**How to use**

```
import {CustomHeader} from 'react-native-awesome-component

const PrimaryNav = createStackNavigator({
  'Example Screen': { 
    screen: ExampleScreen,
    navigationOptions: ({ navigation }) => {
      return {
        header: <CustomHeader navigation={navigation} />,
        // ONCE YOU USE CUSTOM HEADER, MAKE SURE YOU SET HEADER LEFT AS NULL, TO PREVENT DEFAULT HEADER LEFT
        headerLeft: null,
      };
    },
   },
  LaunchScreen: { 
    screen: LaunchScreen, 
    navigationOptions: ({ navigation }) => {
      return {
        header: <CustomHeader navigation={navigation} />,
      }
    }
  }
}, {
  initialRouteName: 'LaunchScreen',
})
```
**Props**

Props | Description | Default  
--- | --- | --- 
  navigation: any | props from screen / navigation stack to handle default navigation action and title | - 
  height: number | props to set header height | `55 `
  backgroundColor: string | props to set header background color | `#FFFFFF` 
  iphoneXPadding: boolean | props to set padding top in iphone-x series | `true` 
  isCard: boolean | props to set header shadow | `true `
  title: string | props to set header title | `''` or navigation screen routeName (if exist)
  iconLeft: string | props to set icon left name | `arrow-left` 
  titleLeftt: string | props to set action title left | - 
  renderLeft: () => void | props to set custom left action | - 
  onPressLeft: () => void | props to set onpress left action | -
  iconRight: string | props to set icon right name | - 
  titleRight: string | props to set action title right | -
  renderRight: () => void | props to set custom right action | - 
  onPressRight: () => void | props to set onpress right action | - 
  iconType: HeaderIconType | props to set icon type that used in header `(ant-design, entypo, evil-icons, feather, font-awesome, font-awesome5, fontisto, foundation, ionicons, material-community, material-icons, octicons)` | `font-awesome5`
