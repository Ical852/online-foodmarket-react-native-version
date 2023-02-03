import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IconBack, IconMinBtn, IconPlusBtn } from '../../assets'
import { customColors, customFonts, getData, showError } from '../../utils'
import { Buttons, Number, Rating } from '../../components'

const Detail = ({navigation, route}) => {
    const [user, setUser] = useState()
    const [token, setToken] = useState()
    useEffect(() => {
        getData('user').then(res => {
            setUser(res)
        })
        getData('token').then(res => {
            setToken(res.value)
        })
    }, [])
    
    const [total, setTotal] = useState(1)
    
    const onPlusButton = () => {
        setTotal(total + 1)
    }
    
    const onMinButton = () => {
        if (total == 1) {
            showError('Minimum Order is 1 Quantity')
        } else {
            setTotal(total - 1)
        }
    }

    const data = route.params

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.img} source={{ uri : data.picturePath }}>
                <TouchableOpacity style={styles.backbtn} onPress={() => navigation.goBack()}>
                    <IconBack/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.firstcol}>
                    <View>
                        <Text style={styles.name}>{data.name}</Text>
                        <View style={styles.rate}>
                            <Rating total={data.rate}/>
                            <Text style={styles.totalrate}>{data.rate == '5' ? '5.0' : data.rate}</Text>
                        </View>
                    </View>
                    <View style={styles.qtycontent}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => onMinButton()}>
                            <IconMinBtn/>
                        </TouchableOpacity>                        
                        <Text style={styles.qtytext}>{total}</Text>
                        <TouchableOpacity activeOpacity = {0.5} onPress={() => onPlusButton()}>
                            <IconPlusBtn/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.secondcol}>
                    <Text style={styles.desc}>
                        {data.description}
                    </Text>
                    <Text style={styles.ing}>
                        Ingredients
                    </Text>
                    <Text style={styles.ingdetail}>
                        {data.ingredients}
                    </Text>
                </View>
                <View style={styles.lastcol}>
                    <View style={styles.payment}>
                        <Text style={styles.total}>Total Price:</Text>
                        <Text style={styles.price}><Number number={data.price * total}/></Text>
                    </View>
                    <View style={styles.btnorder}>
                        <Buttons title={"Order Now"} type={"primary"} onPress={() => navigation.navigate('Payment', {
                            total : total,
                            data,
                            user,
                            token : token
                        })}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    container : {
        flex: 1,
    },
    img : {
        height : 400,
        resizeMode : 'cover'
    },
    backbtn : {
        paddingTop : 24,
        paddingLeft : 16
    },
    content :{
        backgroundColor : customColors.white,
        flex: 1,
        paddingVertical : 26,
        paddingHorizontal : 16,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,
        marginTop : -20
    },
    firstcol : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    rate : {
        flexDirection : 'row',
        marginTop : 6
    },
    qtycontent : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    name : {
        fontSize : 16,
        color : customColors.text.primary,
        fontFamily : customFonts.primary.regular
    },
    totalrate : {
        fontSize : 12,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey,
        marginLeft : 4
    },
    qtytext : {
        fontSize : 16,
        color : customColors.text.primary,
        fontFamily : customFonts.primary.regular,
        marginHorizontal : 10
    },
    desc : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        marginTop : 12,
        textAlign : 'justify'
    },
    ing : {
        marginTop : 16,
        color : customColors.text.primary,
        fontSize : 14,
        fontFamily : customFonts.primary.regular
    },
    ingdetail : {
        fontSize : 14,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey,
        marginTop : 4
    },
    secondcol : {
        flex: 1,
    },
    lastcol : {
        flexDirection : 'row',
    },
    btnorder : {
        flex: 1,
    },
    total : {
        fontSize : 13,
        fontFamily : customFonts.primary.regular,
        color : customColors.grey
    },
    price : {
        fontSize : 18,
        fontFamily : customFonts.primary.regular,
        color : customColors.text.primary
    },
    payment : {
        marginRight : 45
    }
})