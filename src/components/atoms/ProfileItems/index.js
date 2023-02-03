import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IconRight } from '../../../assets'

const ProfileItem = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={0.5}>
      <Text style={styles.text}>{title}</Text>
      <IconRight/>
    </TouchableOpacity>
  )
}

export default ProfileItem

const styles = StyleSheet.create({
    container : {
        backgroundColor : customColors.white,
        marginHorizontal : 24,
        marginVertical : 5,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    text : {
        color : customColors.text.primary,
        fontFamily : customFonts.primary.regular
    }
})