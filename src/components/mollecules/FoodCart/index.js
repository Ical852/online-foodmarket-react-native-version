import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import Rating from '../Rating'

const FoodCard = ({title, totalrate, image, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}>
        <Image style={styles.foodimg} source={image}/>
        <View style={styles.foodcontent}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rate}>
                <Rating total={totalrate}/>
                <Text style={styles.totalrate}>{totalrate == '5' ? '5.0' : totalrate}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default FoodCard

const styles = StyleSheet.create({
    container : {
        marginTop : 32,
        marginRight : 24,
        marginBottom : 24,
        backgroundColor : customColors.white,
        height : 210,
        width : 200,
        elevation : 5,
        borderRadius : 8
    },
    foodimg : {
        width : 200,
        height : 140,
        resizeMode : 'cover',
        borderTopLeftRadius : 8,
        borderTopRightRadius : 8
    },
    rate : {
        flexDirection : 'row',
    },
    totalrate : {
        fontSize : 12,
        fontFamily : customFonts.primary.regular,
        marginLeft : 4
    },
    title : {
        fontSize : 16,
        fontFamily : customFonts.primary.regular,
        color : customColors.text.primary
    },
    foodcontent : {
        margin: 12,
    }
})