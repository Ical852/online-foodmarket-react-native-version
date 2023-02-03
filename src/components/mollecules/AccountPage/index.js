import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Gap, ProfileItem } from '../../atoms'
import { customColors, showSuccess } from '../../../utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const AccountPage = () => {
  const navigation = useNavigation()
  const signOut = () => {
    showSuccess('Sign Out Success')
    setTimeout(() => {
      AsyncStorage.multiRemove(['user', 'token']).then(() => {
        navigation.reset({index : 0, routes: [{name : 'SignIn'}]})
      })
    }, 800);
  }

  return (
    <View style={styles.container}>
        <Gap heigth={11}/>
        <ProfileItem title={"Edit Profile"}/>
        <ProfileItem title={"Home Address"}/>
        <ProfileItem title={"Security"}/>
        <ProfileItem title={"Payments"}/>
        <ProfileItem title={"Sign Out"} onPress={() => signOut()}/>
    </View>
  )
}

export default AccountPage

const styles = StyleSheet.create({
    container : {
        backgroundColor : customColors.white
    }
})