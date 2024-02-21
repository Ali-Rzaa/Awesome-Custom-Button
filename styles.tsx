import { StyleSheet } from "react-native";
import Theme from "../../constants/Theme";

const styles = StyleSheet.create({
  button:{
    width: 280, 
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: Theme.fontSize.size5,
    height: Theme.fontSize.size45,
    borderRadius:Theme.fontSize.size12,
    backgroundColor: Theme.colors.bgColor9,
  },
  buttonText:{
    fontSize: Theme.fontSize.size16,
    fontWeight: "600",
    color: Theme.colors.textColor3
  }
});

export default styles;