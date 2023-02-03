import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { IlSuccessRegister } from '../../assets'
import { Buttons } from '../../components'

const SignUpSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
        <IlSuccessRegister/>
        <Text style={styles.title}>Yeay! Completed</Text>
        <Text style={styles.subtitle}>Now you are able to order some foods as a self-reward</Text>
        <View style={styles.btnHome}>
            <Buttons title={"Find Foods"} type={"primary"} onPress={() => navigation.replace('MainApp')}/>
        </View>
    </View>
  )
}

export default SignUpSuccess

const styles = StyleSheet.create({
    container : {
        backgroundColor : customColors.defaultBg,
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title : {
        fontSize : 20,
        color : customColors.text.primary,
        fontFamily : customFonts.primary.regular,
        marginTop : 50
    },
    subtitle : {
        maxWidth : 250,
        textAlign : 'center',
        fontFamily : customFonts.primary.light,
        fontSize : 14,
        marginTop : 6
    },
    btnHome : {
        width : 200,
        marginTop : 30
    }
})