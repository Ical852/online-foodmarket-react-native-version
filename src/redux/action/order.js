import axios from "axios"
import { linkApi } from "../../utils"
import { setLoading } from "./global"

export const getInProgress = (token) => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/transaction?status=PENDING`, {
        headers: {
            'Authorization' : token
        }
    })
    .then(res => {
        dispatch(setLoading(false))
        dispatch({type : 'SET_IN_PROGRESS', value : res.data.data.data})
    })
    .catch(err => {
        dispatch(setLoading(false))
    })
}

export const getPostOrders = (token) => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/transaction?status=DELIVERED`, {
        headers: {
            'Authorization' : token
        }
    })
    .then(res => {
        dispatch(setLoading(false))
        dispatch({type : 'SET_POST_ORDERS', value : res.data.data.data})
    })
    .catch(err => {
        dispatch(setLoading(false))
    })
}

export const getCancelled = (token) => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/transaction?status=CANCELLED`, {
        headers: {
            'Authorization' : token
        }
    })
    .then(res => {
        dispatch(setLoading(false))
        dispatch({type : 'SET_CANCELLED', value : res.data.data.data})
    })
    .catch(err => {
        dispatch(setLoading(false))
    })
}