import React from 'React'
import {StackNavigator} from 'react-navigation'


import HomeScreen from './HomeScreen'
import Maps from './MapsPage'
import Details from './Details'
import Menu from './Menu'

const Stack = StackNavigator({
    Details : {screen : Details},
    Home : {screen : HomeScreen},
    Menu : {screen : Menu},
  },{
    initialRouteName : 'Menu', 
  }
) 

export default Stack;