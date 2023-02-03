import { ScrollView, StyleSheet,  View } from 'react-native'
import React from 'react'
import FoodTile from '../FoodTile'
import { customColors } from '../../../utils'
import { Gap } from '../../atoms'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const NewTastePage = () => {
  const navigation = useNavigation()
  const newTaste = useSelector(state => state.homeReducer.newTaste)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Gap heigth={8}/>
        {
          newTaste.map(data => {
            return (
              <FoodTile
                key={data.id} 
                totalrate={data.rate} 
                image={{ uri : data.picturePath }}
                title={data.name}
                price={data.price}
                onPress={() => navigation.navigate('Detail', data)}
              />
            )
          })
        }
      </View>
    </ScrollView>
  )
}

export default NewTastePage

const styles = StyleSheet.create({
  container : {
    backgroundColor : customColors.white,
    paddingBottom : 8
  }
})