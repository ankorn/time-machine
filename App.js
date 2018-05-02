import React from 'react'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import store from './app/store/store'

// eslint-disable-next-line
import Main from './app/components/Main'
// eslint-disable-next-line
import Stats from './app/components/Stats'

const RouteStack = StackNavigator(
  {
    MAIN: {
      screen: Main,
    },
    STATS: {
      screen: Stats,
    },
  },
  {
    initialRouteName: 'MAIN',
  },
)

const App = () => (
  <Provider store={store}>
    <RouteStack />
  </Provider>
)

export default App
