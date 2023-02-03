import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { customColors, customFonts, getData, linkApi } from '../../utils'
import { Buttons, Gap, Headers, Loading, Number } from '../../components'
import axios from 'axios'
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/action'


const Payment = ({navigation, route}) => {
    const data = route.params.data
    const total = route.params.total
    const user = route.params.user
    const token = route.params.token

    const [isPaymentOpen, setIsPaymentOpen] = useState(false)
    const [linkPayment, setLinkPayment] = useState('')
    const dispatch = useDispatch()

    const onCheckout = () => {
        const checkoutData = {
            food_id: data.id,
            user_id: user.id,
            quantity: total,
            total: (data.price * total) + 50000 + (data.price * total * 0.10),
            status: 'PENDING'
        }
        dispatch(setLoading(true))
        axios.post(`${linkApi}/checkout`, checkoutData, {
            headers : {
                'Authorization' : token
            }
        })
        .then(res => {
            dispatch(setLoading(false))
            setIsPaymentOpen(true)
            setLinkPayment(res.data.data.payment_url)
        })
        .catch(err => {
            dispatch(setLoading(false))
            console.log(err)
        })
    }
    {
        return isPaymentOpen 
        ? (
            <>
                <Headers 
                    title={"Payment"} 
                    subtitle={"Choose Your Payment Method"}
                    withback
                    onPress={() => {
                        setIsPaymentOpen(false)
                        setTimeout(() => {
                            navigation.reset({index : 0, routes : [{name : 'SuccessOrder'}]})
                        }, 500)
                    }}
                />
                <Gap heigth={12}/>
                <WebView 
                    source={{ uri: linkPayment }} 
                    onNavigationStateChange={(state) => console.log(state)}
                    renderLoading={() => <Loading/>}                    
                />
            </>
          )
        : (
            <View style={styles.container}>
                <Headers title={"Payment"} subtitle={"You deserve better meal"} withback onPress={() => navigation.goBack()}/>
                <View style={styles.firstcontent}>
                    <Text style={styles.title}>Item Ordered</Text>
                    <View style={styles.rowcol}>
                        <Image style={styles.img} source={{ uri : data.picturePath }}/>
                        <View style={styles.detailproduct}>
                            <Text style={styles.productName}>{data.name}</Text>
                            <Text style={styles.productPrice}>
                                <Number number={data.price} />
                            </Text>
                        </View>
                        <Text>{total} items</Text>
                    </View>
                    <Text style={styles.dttext}>Details Transaction</Text>
                    <Gap heigth={2}/>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>{data.name}</Text>
                        <Text style={styles.secondrow}>
                            <Number number={data.price * total}/>
                        </Text>
                    </View>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>Driver</Text>
                        <Text style={styles.secondrow}>IDR 50.000</Text>
                    </View>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>Tax 10%</Text>
                        <Text style={styles.secondrow}>
                            <Number number={data.price * total * 0.10}/>
                        </Text>
                    </View>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>Total Price</Text>
                        <Text style={styles.totalprice}>
                            <Number number={(data.price * total) + 50000 + (data.price * total * 0.10)}/>
                        </Text>
                    </View>
                </View>
                <View style={styles.secondcontent}>
                    <Text style={styles.dto}>Deliver to :</Text>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>Name</Text>
                        <Text style={styles.secondrow}>{user.name}</Text>
                    </View>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>Phone No.</Text>
                        <Text style={styles.secondrow}>{user.phoneNumber}</Text>
                    </View>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>Address</Text>
                        <Text style={styles.secondrow}>{user.address}</Text>
                    </View>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>House No.</Text>
                        <Text style={styles.secondrow}>{user.houseNumber}</Text>
                    </View>
                    <View style={styles.rowitems}>
                        <Text style={styles.firstrow}>City</Text>
                        <Text style={styles.secondrow}>{user.city}</Text>
                    </View>
                </View>
                <View style={styles.checkoutbtn}>
                    <Buttons title={"Checkout Now"} type={"primary"} onPress={() => onCheckout()}/>
                </View>
            </View>
        )
    }
}

export default Payment

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
        marginTop : 24,
        marginHorizontal : 24
    }
})