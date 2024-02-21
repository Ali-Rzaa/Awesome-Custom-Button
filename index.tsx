import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper'
import styles from './styles'
import Theme from './Theme'
interface props {
  isDisable?:boolean,
  buttonStyle?:{},
  textStyle?:{},
  title:string,
  onPress?: ()=>void
}
function CustomButton(props:props) {
  return (
    <>
      {props.isDisable?
        <View style={[styles.button, props.buttonStyle, {backgroundColor: Theme.colors.bgColor6}]}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      :
        <TouchableOpacity style={[styles.button, props.buttonStyle]} onPress={props.onPress}>
              <Text style={[styles.buttonText, props.textStyle]}>{props.title}</Text>
        </TouchableOpacity>
      }
    </>
  )
}

export default CustomButton