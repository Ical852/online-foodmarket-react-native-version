import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { IconFNDP, IconSearch } from '../../../assets'

const MainHeaders = () => {
  return (
    <View style={styles.container}>
        <View style={styles.firstCol}>
            <View>
                <Text style={styles.title}>Fudy Market</Text>
                <Text style={styles.subtitle}>Let’s get some foods</Text>
            </View>
            <View style={styles.fndcontent}>
                <IconFNDP/>
                <Text style={styles.fndtext}>F&D Product</Text>
            </View>
        </View>
        <View style={styles.secondCol}>
            <TextInput style={styles.textinput} placeholder='Search your favourite'/>
            <IconSearch/>
        </View>
    </View>
  )
}

export default MainHeaders

const styles = StyleSheet.create({
    container : {
        height : 100,
        backgroundColor : customColors.primary,
        borderBottomLeftRadius : 15,
        borderBottomRightRadius : 15
    },
    firstCol : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingTop : 18,
        paddingHorizontal : 40,
        alignItems : 'center'
    },
    title : {
        fontSize : 22,
        fontFamily : customFonts.primary.medium,
        color : customColors.white
    },
    subtitle : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        color : customColors.white,
        marginTop : -8
    },
    fndcontent : {
        alignItems : 'center'
    },
    fndtext : {
        fontSize : 8,
        color : customColors.white,
        fontFamily : customFonts.primary.light
    },
    secondCol :{
        height : 40,
        flexDirection : 'row',
        backgroundColor : customColors.white,
        marginHorizontal : 35,
        marginTop : 8,
        borderRadius : 8,
        elevation : 3,
        paddingHorizontal : 14,
        alignItems : 'center'
    },
    textinput : {
        flex: 1,
    }
})