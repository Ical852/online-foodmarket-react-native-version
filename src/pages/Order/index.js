import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EmptyOrder, OrdersPage } from '../../components'
import { getData } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { getCancelled, getInProgress, getPostOrders } from '../../redux/action'

const Order = () => {
  const dispatch = useDispatch()
  const [token, setToken] = useState('')

  const orderData = useSelector(state => state.orderReducer)
  
  useEffect(() => {
    getData('token').then(res => {
      setToken(res.value)
    })
    dispatch(getInProgress(token))
    dispatch(getPostOrders(token))
    dispatch(getCancelled(token))
  }, [])

  const renderView = () => {
    if (orderData.inProgress == 0 &&
        orderData.postOrders == 0 &&
        orderData.cancelled == 0) {
      return <EmptyOrder/>
    } else {
      return <OrdersPage/>
    }
  }

  return (
    renderView()
  )
}

export default Order

const styles = StyleSheet.create({})