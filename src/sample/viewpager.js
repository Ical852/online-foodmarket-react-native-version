import { StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

//Custom Tab Bar
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'white' }}
    // tabStyle={{ width : 'auto' }}
    style={{ backgroundColor: 'pink' }}
    // renderLabel={({ route, focused, color }) => {
    // }}
  />
);
//Custom Tab Bar

const SplashScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first',title: 'First'},
    {key: 'second',title: 'Second'},
  ]);

  return (
    <View>
      <Text>SplashScreen</Text>
      <View style={styles.tabview}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  tabview : {
    height : 100
  }
})