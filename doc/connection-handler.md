## ConnectionHandler
This is Connection Handler component, to inform user that internet connected or disconnected.

Connected | Disconnected   
--- | --- 
<img src="./images/disconnect.png" width="400px" > | <img src="./images/connected.png" width="400px" > 

**How to use**

```javascript
import {ConnectionHandler} from 'react-native-awesome-component'

render() {
    return (
      <View style={styles.applicationView}>
        <ConnectionHandler/>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
```

**API response handler**
To handle response of api such as code 2xx, 4xx, 5xx check this code documentation [here](./method.md#api-helper)

**Global Setup**

Global const used to set global value. it used to set the style for all of this component. for more detail check [here](./global-const.md#connectionhandler)

**Props**

Props | Description | Default  
--- | --- | --- 
onChangeState: function | props to get state change (connected / disconnected) from component as boolean | - 
