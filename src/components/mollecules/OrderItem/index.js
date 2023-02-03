import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import Number from '../Number'

const OrderItem = ({title, totalItem, totalPrice, image, onPress, date, cancelled}) => {
  const formatedDate = new Date(date).toDateString()
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={onPress}>
      <Image style={styles.img} source={image}/>
      <View style={styles.foodContent}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.total}>
          <Text style={styles.item}>{totalItem} items • </Text>
          <Text style={styles.item}>
            <Number number={totalPrice}/>
          </Text>
        </View>
      </View>
      <View style={styles.status}>
        {date && 
          <Text style={styles.date}>{formatedDate}</Text>
        }
        {cancelled && 
          <Text style={styles.cancelled}>Cancelled</Text>
        }
      </View>
    </TouchableOpacity>
  )
}

export default OrderItem

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
    item : {
        fontSize : 13,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey
    },
    status : {
    },
    cancelled : {
        marginLeft : 4,
        fontSize : 10,
        fontFamily : customFonts.primary.regular,
        color : customColors.text.error,
        textAlign : 'right'
    },
    date : {
      fontSize : 10,
      fontFamily : customFonts.primary.regular,
      color : customColors.grey,
      textAlign : 'right'
    },
    total : {
      flexDirection : 'row'
    }
})