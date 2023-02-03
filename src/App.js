import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { YellowBox } from 'react-native'
import { Provider, useSelector } from 'react-redux'
import store from './redux/store'
import FlashMessage from "react-native-flash-message";
import { Loading } from './components'

const MainApp = () => {
  const {isLoading} = useSelector(state => state.globalReducer)
  return (
    <NavigationContainer>
      <Router/>
      <FlashMessage position="top" />
      {isLoading && <Loading/>}
    </NavigationContainer>
  )
}

const App = () => {
  YellowBox.ignoreWarnings(['Require', 'YellowBox', 'Failed prop', 'Each'])
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App