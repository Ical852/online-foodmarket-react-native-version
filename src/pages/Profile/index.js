import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { customColors, customFonts, getData } from '../../utils'
import { AccountPage, FMarketPage, ProfileHeader } from '../../components'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

const FirstRoute = () => (
  <AccountPage/>
);

const SecondRoute = () => (
  <FMarketPage/>
);

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
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

const Profile = () => {
  const [user, setUser] = useState('')
  useEffect(() => {
    getData('user').then(res => {
      setUser(res)
    })
  }, [])

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1',title: 'Account'},
    {key: '2',title: 'Fudy Market'},
  ]);
  
  return (
    <View style={styles.container}>
      <ProfileHeader name={user.name} email={user.email} />
      <View style={styles.content}>
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

export default Profile

const styles = StyleSheet.create({
  container : {
    backgroundColor : customColors.defaultBg,
    flex: 1,
  },
  content : {
    backgroundColor : customColors.white,
    flex: 1,
    marginTop : 24
  }
})