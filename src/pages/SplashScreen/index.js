import { StyleSheet, Text, View} from 'react-native'
import React, { useEffect } from 'react'
import { ILLogo } from '../../assets'
import { customColors, customFonts, getData } from '../../utils'

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    getData('token').then(res => {
      setTimeout(() => {
        if (res) {
          navigation.replace('MainApp')
        } else {
          navigation.replace('SignIn')
        }
      }, 2000);
    })
  }, [])

  return (
      <View style={styles.container}>
        <ILLogo/>
        <Text style={styles.title}>Fudy Market</Text>
      </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container : {
    backgroundColor : customColors.primary,
    justifyContent : 'center',
    alignItems : 'center',
    flex: 1,
  },
  title : {
    fontSize : 32,
    fontFamily : customFonts.primary.medium,
    color : customColors.white
  }
})