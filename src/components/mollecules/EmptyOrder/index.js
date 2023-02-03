import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { ILEmptyOrder } from '../../../assets'
import {Buttons} from '../../atoms'

const EmptyOrder = () => {
  return (
    <View style={styles.container}>
      <ILEmptyOrder/>
      <Text style={styles.title}>Ouch! Hungry</Text>
      <Text style={styles.subtitle}>Seems like you have not ordered any food yet</Text>
      <View style={styles.orderbtn}>
        <Buttons title={"Find Foods"} type={"primary"}/>
      </View>
    </View>
  )
}

export default EmptyOrder

const styles = StyleSheet.create({
  container : {
    backgroundColor : customColors.white,
    flex: 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  title : {
    fontSize : 20,
    fontFamily : customFonts.primary.regular,
    color : customColors.text.primary,
    marginTop : 41
  },
  subtitle : {
    fontSize : 14,
    fontFamily : customFonts.primary.light,
    color : customColors.grey,
    maxWidth : 180,
    textAlign : 'center',
    marginTop : 6
  },
  orderbtn : {
    width : 200,
    marginTop : 30
  }
})