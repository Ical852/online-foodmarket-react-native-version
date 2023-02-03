import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../utils'
import { Buttons, Gap, Headers } from '../../components'
import { FoodDummy1 } from '../../assets'

const OrderDetail = ({navigation}) => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Headers title={"Payment"} subtitle={"You deserve better meal"} withback onPress={() => navigation.goBack()}/>
            <View style={styles.firstcontent}>
                <Text style={styles.title}>Item Ordered</Text>
                <View style={styles.rowcol}>
                    <Image style={styles.img} source={FoodDummy1}/>
                    <View style={styles.detailproduct}>
                        <Text style={styles.productName}>Cherry Healthy</Text>
                        <Text style={styles.productPrice}>IDR 289.000</Text>
                    </View>
                    <Text>14 items</Text>
                </View>
                <Text style={styles.dttext}>Details Transaction</Text>
                <Gap heigth={2}/>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>Cherry Healthy</Text>
                    <Text style={styles.secondrow}>IDR 18.390.000</Text>
                </View>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>Driver</Text>
                    <Text style={styles.secondrow}>IDR 50.000</Text>
                </View>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>Tax 10%</Text>
                    <Text style={styles.secondrow}>IDR 1.800.390</Text>
                </View>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>Total Price</Text>
                    <Text style={styles.totalprice}>IDR 390.803.000</Text>
                </View>
            </View>
            <View style={styles.secondcontent}>
                <Text style={styles.dto}>Deliver to :</Text>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>Name</Text>
                    <Text style={styles.secondrow}>Shalahuddin Ahmad Aziz</Text>
                </View>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>Phone No.</Text>
                    <Text style={styles.secondrow}>0822 0819 9688</Text>
                </View>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>Address</Text>
                    <Text style={styles.secondrow}>Poris Indah</Text>
                </View>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>House No.</Text>
                    <Text style={styles.secondrow}>A5 Hook</Text>
                </View>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>City</Text>
                    <Text style={styles.secondrow}>Jakarta</Text>
                </View>
            </View>
            <View style={styles.secondcontent}>
                <Text style={styles.dto}>Order Status:</Text>
                <View style={styles.rowitems}>
                    <Text style={styles.firstrow}>#FM209391</Text>
                    <Text style={styles.orderstat}>Paid</Text>
                </View>
            </View>
            <View style={styles.checkoutbtn}>
                <Buttons title={"Cancel My Order"} type={"danger"} />
            </View>
        </View>
    </ScrollView>
  )
}

export default OrderDetail

const styles = StyleSheet.create({
    container : {
        backgroundColor : customColors.defaultBg,
        flex: 1,
    },
    firstcontent : {
        backgroundColor : customColors.white,
        marginTop : 24,
        paddingVertical : 16,
        paddingHorizontal : 24,
        elevation : 1
    },
    title : {
        color : customColors.text.primary,
        fontSize : 14,
        fontFamily : customFonts.primary.regular
    },
    rowcol : {
        marginTop : 12,
        flexDirection : 'row',
        alignItems : 'center'
    },
    img : {
        width : 60,
        height : 60,
        borderRadius : 8
    },
    detailproduct : {
        marginLeft : 12,
        flex: 1,
    },
    productName : {
        fontSize : 16,
        fontFamily : customFonts.primary.regular,
        color : customColors.text.primary
    },
    productPrice : {
        fontSize : 13,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey
    },
    dttext : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        color : customColors.text.primary,
        marginTop : 16
    },
    rowitems : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 6
    },
    firstrow : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey
    },
    secondrow : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        color : customColors.text.primary,
    },
    totalprice : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        color : customColors.status.success
    },
    secondcontent : {
        backgroundColor : customColors.white,
        marginTop : 24,
        paddingVertical : 16,
        paddingHorizontal : 24,
        elevation : 0.5,
    },
    dto: {
        fontSize: 14,
        fontFamily: customFonts.primary.regular,
        color: customColors.text.primary,
    },
    checkoutbtn : {
        margin : 24
    },
    orderstat : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        color : customColors.status.success,
    }
})