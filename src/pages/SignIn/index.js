import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import {Buttons, Gap, Headers, TextInputs} from '../../components'
import { customColors, getData, useForm } from '../../utils'
import { useDispatch } from 'react-redux'
import { setLoading, signInAction } from '../../redux/action'

const SignIn = ({navigation}) => {

  const [form, setForm] = useForm({
    email : '',
    password : ''
  })

  const [errorForm, setErrorForm] = useForm({
    email: false,
    password: false
  })

  const dispatch = useDispatch()

  const onSubmit = () => {
    if (form.email === '') {
      setErrorForm('email', true)
    } else if (form.password === '') {
      setErrorForm('password', true)
    } else {
      dispatch(setLoading(true))
      dispatch(signInAction(form, navigation))
    }
  }

  return (
    <View style={styles.firstContainer}>
      <Headers title={"Sign In"} subtitle={"Find your best ever meal"}/>
      <View style={styles.content}>
        <TextInputs 
          label={"Email Address"} 
          placeholder={"Type your email address"}
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
        <Buttons title={"Sign In"} type={"primary"} onPress={() => onSubmit()}/>
        <Gap heigth={12}/>
        <Buttons title={"Create New Account"} onPress={() => navigation.navigate('SignUp')}/>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    firstContainer : {
        backgroundColor : customColors.defaultBg,
        flex: 1,
    },
    content : {
        marginTop : 24,
        backgroundColor : customColors.white,
        paddingTop : 26,
        paddingHorizontal : 24,
        flex: 1,
    }
})