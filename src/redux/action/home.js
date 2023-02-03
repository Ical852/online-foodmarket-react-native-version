import axios from "axios"
import { linkApi } from "../../utils"
import { setLoading } from "./global"

export const getFoodData = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/food`)
        .then(res => {
            dispatch(setLoading(false))
            dispatch({type: 'SET_FOOD', value: res.data.data.data})
        })
        .catch(err => {
            dispatch(setLoading(false))
            console.log(err)
        })
}

export const getFoodNewTaste = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/food?types=new_food`)
        .then(res => {
            dispatch(setLoading(false))
            dispatch({type: 'SET_NEW_TASTE', value: res.data.data.data})
        })
        .catch(err => {
            dispatch(setLoading(false))
            console.log(err)
        })
}

export const getFoodPopular = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/food?types=popular`)
        .then(res => {
            dispatch(setLoading(false))
            dispatch({type: 'SET_POPULAR', value: res.data.data.data})
        })
        .catch(err => {
            dispatch(setLoading(false))
            console.log(err)
        })
}

export const getFoodRecommended = () => (dispatch) => {
    dispatch(setLoading(true))
    axios.get(`${linkApi}/food?types=recommended`)
        .then(res => {
            dispatch(setLoading(false))
            dispatch({
                type: 'SET_RECOMMENDED',
                value: res.data.data.data
            })
        })
        .catch(err => {
            dispatch(setLoading(false))
            console.log(err)
        })
}