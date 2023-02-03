import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { ILSuccessOrder } from '../../assets'
import { Buttons, Gap } from '../../components'

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ILSuccessOrder/>
        <Text style={styles.title}>You’ve Made Order</Text>
        <Text style={styles.subtitle}>Just stay at home while we are preparing your best foods</Text>
        <View style={styles.successbtn}>
            <Buttons title={"Order Other Foods"} type={"primary"} onPress={() => navigation.navigate('MainApp')}/>
            <Gap heigth={12}/>
            <Buttons title={"View My Order"} onPress={() => navigation.navigate('MainApp', { screen : 'Order' })}/>
        </View>
    </View>
  )
}

export default SuccessOrder

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
        marginTop : 20
    },
    subtitle : {
        fontSize : 14,
        fontFamily : customFonts.primary.light,
        color : customColors.grey,
        maxWidth : 230,
        textAlign : 'center',
        marginTop : 6
    },
    successbtn : {
        width : 200,
        marginTop : 30
    }
})