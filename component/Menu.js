import React , {Component} from 'React'
import {
    Image,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import {StackNavigator} from 'react-navigation'
import {Text,Button,Content,Container} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen'
import data from './data'


class LogoTitle extends Component {
  render() {
    return (
        <Image
            source={require('../assets/images/logo.png')}
            style={style.logo}
            />
    );
  }
}

export default class Menu extends Component {
    componentDidMount(){
        SplashScreen.hide()
    }
    
    static navigationOptions = ({navigation}) => {
    // headerTitle instead of title
        return {
          headerTitle: <LogoTitle />,
          headerRight: <Icon name="ios-menu" size={40} style={{marginRight:20}} onPress={()=> navigation.navigate('DrawerToggle')}/>,
          title:'Menu'

        }
      };
    render(){
    return (
      <Container>
         <Content>
          {
            data.map((val,i) => {
              return (
                <TouchableOpacity key={i} style={style.menu}  onPress={() => this.props.navigation.navigate('Home',{
                    wisata : val.wisata
                    })}>
                  <Text style={style.text} >{val.name}</Text>
                </TouchableOpacity>
              )
            } 
          )
          }
      </Content>
    </Container>
    )
  }
}

const style = StyleSheet.create({
  container : {
    flex : 1,
    padding: 20,
    justifyContent : 'center'
  },
  logo : {
    marginLeft:20,
    width: 100,
    height : 40,
    resizeMode: 'contain'
  },
  menu : {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 15,
    borderRadius:10,
    margin:5,
  },
  text :{
    fontWeight:'bold',
    color:'#fff'
  }
})