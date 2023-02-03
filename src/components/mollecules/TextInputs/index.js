import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import { customColors, customFonts } from '../../../utils'

const TextInputs = ({label, placeholder, error, ...restProps}) => {
  const ref = useRef()
  if (error) {
    ref.current.focus()
  }
  return (
    <View>
      <Text style={styles.label(error)}>{label}</Text>
      <TextInput
        ref={ref}
        style={styles.textinput(error)} 
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  )
}

export default TextInputs

const styles = StyleSheet.create({
    label : (error) => ({
        fontSize : 16,
        fontFamily : customFonts.primary.regular,
        color : error ? customColors.status.error : customColors.text.primary
    }),
    textinput : (error) => ({
        borderColor : error ? customColors.status.error : customColors.text.primary,
        borderWidth : 1,
        borderRadius : 8,
        padding: 10,
        paddingHorizontal : 15,
        fontSize : 14,
        color : customColors.text.primary,
        marginTop : 6
    })
})