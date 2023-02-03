import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'
import { customColors, customFonts } from '../../utils'
import {MainHeaders, FoodCard, Gap, NewTastePage, PopularPage, RecPage} from '../../components'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import { getFoodData, getFoodNewTaste, getFoodPopular, getFoodRecommended } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const FirstRoute = () => (
  <NewTastePage/>
);

const SecondRoute = () => (
  <PopularPage/>
);

const ThirdRoute = () => (
  <RecPage/>
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
  3: ThirdRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black', height : 3, width : 1/2 }}
    tabStyle={{ width : 'auto' }}
    style={{ backgroundColor: 'white' }}
    renderLabel={({ route, focused, color }) => {
      return <Text style={{ color : focused ? customColors.text.primary : customColors.grey, fontFamily : customFonts.primary.medium }}>{route.title}</Text>
    }} 
  />
);

const Home = ({navigation}) => {
  const dispatch = useDispatch()
  const foods = useSelector(state => state.homeReducer.food)

  useEffect(() => {
    dispatch(getFoodData())
    dispatch(getFoodNewTaste())
    dispatch(getFoodPopular())
    dispatch(getFoodRecommended())
  }, [])

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1',title: 'New Taste'},
    {key: '2',title: 'Popular'},
    {key: '3',title: 'Recommended'},
  ]);

  return (
      <View style={styles.container}>
        <MainHeaders/>
        <View style={styles.content}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Gap width={24}/>
            {
              foods.map(data => {
                return (
                  <FoodCard 
                    key={data.id}
                    image={{ uri : data.picturePath }}
                    title={data.name}
                    totalrate={data.rate}
                    onPress={() => navigation.navigate('Detail', data)}
                  />
                )
              })
            }
          </ScrollView>
        </View>
        <View style={styles.tabview}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
          />
        </View>
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container : {
    backgroundColor : customColors.defaultBg,
    flex: 1,
  },
  content : {
  },
  tabview : {
    flex: 1,
  }
})