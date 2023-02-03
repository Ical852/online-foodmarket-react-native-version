import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Buttons, Gap, Headers, TextInputs } from '../../components'
import { customColors, showError, useForm } from '../../utils'
import { ILPhotoProfile } from '../../assets'
import { useDispatch } from 'react-redux'
import { launchImageLibrary } from 'react-native-image-picker'

const SignUp = ({navigation}) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    })
    
    const [errorForm, setErrorForm] = useForm({
        name: false,
        email: false,
        password: false,
    })
    
    const [photo, setPhoto] = useState('')
    const dispatch = useDispatch()

    const addPhoto = () => {
        launchImageLibrary(
            {includeBase64: true, quality: 0.5, maxWidth : 110, maxHeight: 110}, 
            response => {
                if (response.didCancel) {
                    showError('Oops, not choosing any photo?')
                } else {
                    const source = {uri : response.assets[0].uri}
                    console.log(response.assets[0])
                    setPhoto(source)
                    const dataImage = {
                        uri: response.assets[0].uri,
                        type: response.assets[0].type,
                        name: response.assets[0].fileName,
                    }
                    dispatch({type: 'SET_PHOTO', value : dataImage})
                    dispatch({type: 'SET_UPLOAD_STATUS', value: true})
                }
            }
        )
    }

    const onContinue = () => {
        if (form.name === '') {
            setErrorForm('name', true)
        } else if (form.email === '') {
            setErrorForm('email', true)
        } else if (form.password === '') {
            setErrorForm('password', true)
        } else {
            dispatch({type: 'SET_REGISTER', value: form})
            navigation.navigate('SignUpAddress')
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Headers title={"Sign Up"} subtitle={"Register and eat"} withback onPress={() => navigation.goBack()}/>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.img} activeOpacity={0.5} onPress={() => addPhoto()}>
                        {
                            photo 
                            ? <Image style={styles.imgpicker} source={photo}/>
                            : <ILPhotoProfile/>
                        }
                    </TouchableOpacity>
                    <TextInputs 
                        label={"Full Name"} 
                        placeholder={"Type your full name"} 
                        value={form.name}
                        onChangeText={(value) => {
                            setForm('name', value)
                            setErrorForm('name', false)
                        }}
                        error={errorForm.name}
                    />
                    <Gap heigth={16}/>
                    <TextInputs 
                        label={"Email Address"} 
                        placeholder={"Type your email addres"}
                        value={form.email}
                        onChangeText={(value) => {
                            setForm('email', value)
                            setErrorForm('email', false)
                        }}
                        error={errorForm.email}
                    />
                    <Gap heigth={16}/>
                    <TextInputs 
                        label={"Password"} 
                        placeholder={"Type your password"} 
                        secureTextEntry
                        value={form.password}
                        onChangeText={(value) => {
                            setForm('password', value)
                            setErrorForm('password', false)
                        }}
                        error={errorForm.password}
                        />
                    <Gap heigth={24}/>            
                    <Buttons title={"Continue"} type={"primary"} onPress={() => onContinue()}/>
                </View>
            </View>

        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : customColors.defaultBg
    },
    content : {
        flex: 1,
        paddingTop : 16,
        paddingHorizontal : 24,
        backgroundColor : customColors.white,
        marginTop : 24,
        marginBottom : 24
    },
    img : {
        alignItems : 'center',
        marginBottom : 16
    },
    imgpicker : {
        width : 110,
        height : 110,
        borderRadius : 130/2,
    }
})