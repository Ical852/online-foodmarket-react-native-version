import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Gap, ProfileItem } from '../../atoms'
import { customColors } from '../../../utils'

const FMarketPage = () => {
  return (
    <View style={styles.container}>
        <Gap heigth={11}/>
        <ProfileItem title={"Rate App"}/>
        <ProfileItem title={"Help Center"}/>
        <ProfileItem title={"Privacy & Policy"}/>
        <ProfileItem title={"Terms & Conditions"}/>
    </View>
  )
}

export default FMarketPage

const styles = StyleSheet.create({
    container: {
        backgroundColor: customColors.white
    }
})