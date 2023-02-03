import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { customColors, customFonts } from '../../../utils'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'
import PostOrdersPage from '../PostOrdersPage'
import InProgressPage from '../InProgressPage'
import Headers from '../Headers'

const FirstRoute = () => (
  <InProgressPage/>
);

const SecondRoute = () => (
  <PostOrdersPage/>
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

const OrdersPage = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: '1',title: 'In Progress'},
        {key: '2',title: 'Past Orders'},
    ]);

    return (
        <View style={styles.container}>
            <Headers title={"Your Orders"} subtitle={"Wait for the best meal"}/>
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

export default OrdersPage

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : customColors.defaultBg
    },
    tabview : {
        backgroundColor : customColors.white,
        marginTop : 24,
        flex: 1,
    }
})