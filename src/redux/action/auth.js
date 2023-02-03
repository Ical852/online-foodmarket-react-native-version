import axios from "axios"
import { linkApi, showError, showSuccess, storeData } from "../../utils"
import { setLoading } from "./global"

export const signUpAction = (data, photoData, navigation) => (dispatch) => {
    axios.post(`${linkApi}/register`, data)
        .then(res => {
            if (photoData.isUploadPhoto) {
                const photoForUpload = new FormData()
                photoForUpload.append('file', photoData)
                axios.post(`${linkApi}/user/photo`, photoForUpload, {
                    headers: {
                        'Authorization' : `Bearer ${res.data.data.access_token}`,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .catch(err => {
                    showError('Failed Upload Photo')
                })
            }
            dispatch(setLoading(false))
            storeData('user', res.data.data.user)
            storeData('token', {
                value: `Bearer ${res.data.data.access_token}`
            })
            showSuccess('Register Success')
            setTimeout(() => {
                navigation.replace('SignUpSuccess')
            }, 1500);
        })
        .catch(err => {
            dispatch(setLoading(false))
            if (err.response.data.meta.message) {
                let errorMsg = Object.values(err.response.data.meta.message)
                showError(errorMsg[0])
            } else {
                showError('Register Failed')
            }
        })
}

export const signInAction = (form, navigation) => (dispatch) => {
    axios.post(`${linkApi}/login`, form)
        .then(res => {
          dispatch(setLoading(false))
          storeData('user', res.data.data.user)
          storeData('token', {
              value: `Bearer ${res.data.data.access_token}`
          })
          showSuccess('Sign In Success')
          setTimeout(() => {
            navigation.replace('MainApp')
          }, 1500);
        })
        .catch(err => {
          dispatch(setLoading(false))
          if (err.response.data.meta.code === 500) {
            showError(err.response.data.meta.message)
          } else if (err.response.data.meta.code === 400) {
            let errorMsg = Object.values(err.response.data.meta.message)
            showError(errorMsg[0])
          } else {
            showError('Sign In Failed')
          }
        })
}