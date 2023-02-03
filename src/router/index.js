import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { BottomTabsNavigator } from '../components';
import { Detail, Home, Order, OrderDetail, Profile, SignIn, SignUp, SignUpAddress, SignUpSuccess, SplashScreen, SuccessOrder } from '../pages';
import Payment from '../pages/Payment';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabRouter = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      tabBar={props => <BottomTabsNavigator {...props} />}
      screenOptions={{ headerShown : false }}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Order' component={Order}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown : false }}>
        <Stack.Screen name='Splash' component={SplashScreen}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='SignUpAddress' component={SignUpAddress}/>
        <Stack.Screen name='SignUpSuccess' component={SignUpSuccess}/>
        <Stack.Screen name='MainApp' component={TabRouter}/>
        <Stack.Screen name='Detail' component={Detail}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='SuccessOrder' component={SuccessOrder}/>
        <Stack.Screen name='OrderDetail' component={OrderDetail}/>
    </Stack.Navigator>
  )
}

export default Router