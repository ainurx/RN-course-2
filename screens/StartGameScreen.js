import PrimaryButton from '../components/PrimaryButton'

import { StyleSheet } from 'react-native'
import { View, TextInput } from 'react-native'


const StartGameScreen = () =>{
  return(
    <View style={styles.inputContainer}>
      <TextInput/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
      
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063E',
    borderRadius: 8,
    // To add shadow on android
    elevation: 8,
    // To add shadow on IOS
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25 
  }
})

export default StartGameScreen