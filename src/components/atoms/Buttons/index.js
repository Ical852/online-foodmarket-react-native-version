import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'

const Buttons = ({title, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({
    container : (type) => ({
        backgroundColor : type === 'primary' ? customColors.primary : type === 'danger' ? customColors.status.error : customColors.secondary,
        padding: 12,
        borderRadius : 8,
        elevation : 3
    }),
    title : {
        fontSize : 14,
        fontFamily : customFonts.primary.semiBold,
        color : customColors.white,
        textAlign : 'center'
    }
})