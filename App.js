import React from 'React'

import {DrawerNavigator} from 'react-navigation'

import Panduan from './component/Panduan.js'
import Stack from './component/stack'
import Maps from './component/MapsPage'
import Tentang from './component/tentang'

const RootStack = DrawerNavigator({
    Stack : {screen : Stack},
    Maps : {screen : Maps},
    Tentang : {screen : Tentang},
    Panduan : {screen : Panduan}
  },{
    initialRouteName : 'Stack',
    // contentComponent : props => <Sidebar {...this.props} /> 
  }
) 
export default RootStack
/**
 * Sample React Native Apps
 * https://github.com/facebook/react-native
 * @flow
 */