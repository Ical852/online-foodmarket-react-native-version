import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import FoodTile from '../FoodTile'
import { customColors } from '../../../utils'
import { Gap } from '../../atoms'
import { FoodDummy5, FoodDummy1, FoodDummy8, FoodDummy3 } from '../../../assets'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'

const RecPage = () => {
  const navigation = useNavigation()
  const recommended = useSelector(state => state.homeReducer.recommended)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Gap heigth={8}/>
        {
          recommended.map(data => {
            return (
              <FoodTile
                key={data.id}
                totalrate={data.rate}
                title={data.name}
                price={data.price}
                image={{ uri : data.picturePath }}
                onPress={() => navigation.navigate('Detail', data)}
              />
            )
          })
        }
      </View>
    </ScrollView>
  )
}

export default RecPage

const styles = StyleSheet.create({
  container: {
    backgroundColor: customColors.white,
    flex: 1,
  }
})