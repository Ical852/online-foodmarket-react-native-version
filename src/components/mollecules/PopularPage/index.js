import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import FoodTile from '../FoodTile'
import { customColors } from '../../../utils'
import { Gap } from '../../atoms'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const PopularPage = () => {
  const navigation = useNavigation()
  const popular = useSelector(state => state.homeReducer.popular)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Gap heigth={8}/>
        {
          popular.map(data => {
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

export default PopularPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: customColors.white,
    flex: 1,
    paddingBottom : 8
  }
})