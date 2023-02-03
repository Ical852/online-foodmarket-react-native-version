import { ScrollView, StyleSheet,  View, Text } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { Gap } from '../../atoms'
import { useNavigation } from '@react-navigation/native'
import OrderItem from '../OrderItem'
import { useSelector } from 'react-redux'

const InProgressPage = () => {
  const pendingData = useSelector(state => state.orderReducer.inProgress)
  const navigation = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Gap heigth={8}/>
        {
          pendingData ? pendingData.map(data => {
            return (              
              <OrderItem
                key={data.id}
                image={{ uri : data.food.picturePath }}
                title={data.food.name}
                totalItem={data.quantity}
                totalPrice={data.total}
              />
            )
          })
          :
          <View style={styles.content}>
            <Text>No In Progress Order Yet</Text>
          </View>
        }
      </View>
    </ScrollView>
  )
}

export default InProgressPage

const styles = StyleSheet.create({
  container : {
    backgroundColor : customColors.white,
  },
  content : {
    margin : 10,
    marginLeft :18
  }
})