
# Awesome Custom Button

Use our custom reusable light weight button for your ease.🙌


## API Reference

#### Props


| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title of button |
| `isDisable` | `boolean` | Disable button |
| `buttonStyle` | `style` | Add your styling to button |
| `textStyle` | `style` | Add your styling to title |
| `onPress` | `callback` | Callback Function called on Press |




## Installation

Install `Awesome Custom Button` with npm

```bash
  npm install react-native-awesome-custombutton
```
    
## Usage/Examples

```javascript
import Button from 'react-native-awesome-customebutton'

function App() {
  return 
    <View>
        <Button
            title={"Click Me"}
            isDisable=false
            buttonStyle={{
                backgroundColor:'Green',
                borderRadius:15
                }}
            textStyle={{
                color:'black',
                fontSize: 15
                }}
            onPress={()=>console.log("button is clicked")}
            />
    </View>
}
```


## Authors

- [@AliRaza](https://github.com/Ali-Rzaa)

