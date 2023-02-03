import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconBack } from '../../../assets'
import { customColors, customFonts } from '../../../utils'

const Headers = ({title, subtitle, withback, onPress}) => {
  return (
    <View style={styles.headers}>
      {withback &&
        <TouchableOpacity onPress={onPress}>
          <IconBack/>
        </TouchableOpacity>
      }
      <View style={styles.headertitle(withback)}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({
  headers : {
    flexDirection : 'row',
    paddingHorizontal : 30,
    paddingVertical : 27,
    backgroundColor : customColors.white,
    alignItems : 'center',
    elevation : 2
  },
  headertitle : (withback) => ({
    flex: 1,
    justifyContent :'center',
    alignItems : 'center',
    paddingRight : withback ? 20 : 0
  }),
  title : {
    fontSize : 22,
    fontFamily : customFonts.primary.medium,
    color : customColors.text.primary
  },
  subtitle : {
    fontFamily : customFonts.primary.light,
    color : customColors.grey
  }
})