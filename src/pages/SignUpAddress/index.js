import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { customColors, useForm } from '../../utils'
import { Buttons, Gap, Headers, TextInputs } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, signUpAction } from '../../redux/action'

const SignUpAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: ''
    })

    const [errorForm, setErrorForm] = useForm({
        phoneNumber: false,
        address: false,
        houseNumber: false,
        city: false
    })

    const dispatch = useDispatch()
    const regisData = useSelector(state => state.registerReducer)
    const photoData = useSelector(state => state.photoReducer)

    const onSubmit = () => {
        if(form.phoneNumber === '') {
            setErrorForm('phoneNumber', true)
        } else if(form.address === '') {
            setErrorForm('address', true)
        } else if(form.houseNumber === '') {
            setErrorForm('houseNumber', true)
        } else if(form.city === '') {
            setErrorForm('city', true)
        } else {
            const data = {
                ...form,
                ...regisData
            }
            signUp(data, photoData)
        }
    }

    const signUp = (data, photoData) => {
        dispatch(setLoading(true))
        dispatch(signUpAction(data, photoData, navigation))
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Headers title={"Address"} subtitle={"Make sure it’s valid"} withback onPress={() => navigation.goBack()}/>
                <View style={styles.content}>
                    <TextInputs 
                        label={"Phone No."} 
                        placeholder={"Type your phone number"}
                        value={form.phoneNumber}
                        onChangeText={(value) => {
                            setForm('phoneNumber', value)
                            setErrorForm('phoneNumber', false)
                        }}
                        error={errorForm.phoneNumber}
                    />
                    <Gap heigth={16}/>
                    <TextInputs 
                        label={"Address"} 
                        placeholder={"Type your address"}
                        value={form.address}
                        onChangeText={(value) => {
                            setForm('address', value)
                            setErrorForm('address', false)
                        }}
                        error={errorForm.address}
                    />
                    <Gap heigth={16}/>
                    <TextInputs 
                        label={"House No."} 
                        placeholder={"Type your house number"}
                        value={form.houseNumber}
                        onChangeText={(value) => {
                            setForm('houseNumber', value)
                            setErrorForm('houseNumber', false)
                        }}
                        error={errorForm.houseNumber}
                    />
                    <Gap heigth={16}/>
                    <TextInputs 
                        label={"City"} 
                        placeholder={"Type your city"}
                        value={form.city}
                        onChangeText={(value) => {
                            setForm('city', value)
                            setErrorForm('city', false)
                        }}
                        error={errorForm.city}
                    />
                    <Gap heigth={24}/>
                    <Buttons title={"Sign Up Now"} type={"primary"} onPress={() => onSubmit()}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    container : {
        backgroundColor : customColors.defaultBg,
        flex: 1,
    },
    content : {
        marginTop : 24,
        backgroundColor : customColors.white,
        paddingTop : 24,
        paddingHorizontal : 24,
        flex: 1,
    }
})