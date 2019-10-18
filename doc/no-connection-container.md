## NoConnectionContainer
Screen / View that show once flatlist has no connection. By default it used in CustomFlatlist


<img src="./images/no-connection-container.png" width="400px" > 

**How to use**

```javascript
import {NoConnectionContainer, CustomFlatList} from 'react-native-awesome-component'

render() {
    return (
      <View style={styles.applicationView}>
        <CustomFlatList 
          {...flatlistProps}
          renderNoConnection={({onRefresh}) => <NoConnectionContainer onRefresh={onRefresh} />}
        />
      </View>
    )
  }
```
**Props**

Props | Description | Default  
--- | --- | --- 
image: string | props to set image source | `undefined`
imageStyle: StyleProp<ImageStyle> | props to set image style | `{}`
title: string | props to set title | `undefined`
titleStyle: StyleProp<TextStyle> | props to set title style | `{}` 
message: string | props to set message | `undefined`
messageStyle: StyleProp<TextStyle> | props to set message style | `{}`
customButton: any | props to render button | 
hideImage: boolean | props to hide image | `false`
hideButton: boolean | props to hide button | `false`
hideTitle: boolean | props to hide title | `false`
hideMessage: boolean | props to hide message | `false`
onRefresh: () => void | props to handle refresh on button press | 
