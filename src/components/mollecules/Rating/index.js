import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { IconStarOff, IconStarOn } from '../../../assets'

const Rating = ({total, id}) => {
  let star = []
  for(let i = 1; i <= 5; i++) {
    if (total >= i) {
      star.push({value: 1})
    } else {
      star.push({value: 0})
    }
  }
  return (
    <View style={styles.rate}>
      {
        star.map(res => {
          if(res.value == 1) {
            return <IconStarOn/>
          } else {
            return <IconStarOff/>
          }
        })
      }
    </View>
  )
}

export default Rating

const styles = StyleSheet.create({
  rate : {
    flexDirection : 'row'
  }
})