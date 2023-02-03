import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import Rating from '../Rating'
import Number from '../Number'

const FoodTile = ({title, price, totalrate, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
      <Image style={styles.img} source={image}/>
      <View style={styles.foodContent}>
        <Text style={styles.title}>{title}</Text>
        
        <Text style={styles.price}><Number number={price}/></Text>
      </View>
      <View style={styles.rate}>
        <Rating total={totalrate}/>
        <Text style={styles.totalrate}>{totalrate == '5' ? '5.0' : totalrate}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FoodTile

const styles = StyleSheet.create({
    container : {
        backgroundColor : customColors.white,
        marginHorizontal : 24,
        marginVertical : 8,
        flexDirection : 'row',
        alignItems : 'center'
    },
    img : {
        width : 60,
        height : 60,
        borderRadius : 8
    },
    foodContent : {
        marginLeft : 12,
        flex: 1,
    },
    title : {
        fontSize : 16,
        fontFamily : customFonts.primary.regular,
        color : customColors.text.primary
    },
    price : {
        fontSize : 13,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey
    },
    rate : {
        flexDirection : 'row'
    },
    totalrate : {
        marginLeft : 4,
        fontSize : 12,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey
    }
})