import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ILPhotoProfile } from '../../../assets'
import { customColors, customFonts } from '../../../utils'

const ProfileHeader = ({name, email, img}) => {
  return (
    <View style={styles.container}>
        {img ? <Image style={styles.img} source={{ uri : img }}/> : <ILPhotoProfile/>}
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
    </View>
  )
}

export default ProfileHeader

const styles = StyleSheet.create({
    container : {
        backgroundColor : customColors.white,
        alignItems : 'center',
        paddingVertical : 26,
        elevation : 2
    },
    name : {
        fontSize : 18,
        fontFamily : customFonts.primary.medium,
        color : customColors.text.primary,
        marginTop : 16
    },
    email : {
        fontFamily : customFonts.primary.light,
        color : customColors.grey
    },
    img : {
        width : 120,
        height : 120,
    }
})