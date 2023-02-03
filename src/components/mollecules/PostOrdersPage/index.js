import { ScrollView, StyleSheet,  View } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { useNavigation } from '@react-navigation/native'
import OrderItem from '../OrderItem'
import { Gap } from '../../atoms'
import { useSelector } from 'react-redux'

const PostOrdersPage = () => {
  const navigation = useNavigation()
  const postOrdersData = useSelector(state => state.orderReducer.postOrders)
  const cancelledOrderData = useSelector(state => state.orderReducer.cancelled)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Gap heigth={8}/>
        {
          postOrdersData ? postOrdersData.map(data => {
            return (
              <OrderItem
                key={data.id}
                image={{ uri : data.food.picturePath }}
                title={data.food.name}
                totalItem={data.quantity}
                totalPrice={data.total}
                date={data.updated_at}
              />
            )
          })
          : <View></View>
        }
        {
          cancelledOrderData ? cancelledOrderData.map(data => {
            return (
              <OrderItem
                key={data.id}
                image={{ uri : data.food.picturePath }}
                title={data.food.name}
                totalItem={data.quantity}
                totalPrice={data.total}
                date={data.updated_at}
                cancelled
              />
            )
          })
          : <View></View>
        }
      </View>
    </ScrollView>
  )
}

export default PostOrdersPage

const styles = StyleSheet.create({
  container : {
    backgroundColor : customColors.white,
  }
})