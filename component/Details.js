import React , {Component} from 'React'
import {
    StyleSheet,
    Image
} from 'react-native'

import {StackNavigator,DrawerNavigator} from 'react-navigation'
import {Icon, Container,Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

import HomeScreen from "./HomeScreen"
import Maps from "./MapsPage"

import getDirections from 'react-native-google-maps-directions'

export default class Profil extends Component {

  constructor(props){
    super(props)
    const {params} = this.props.navigation.state

    this.state = {

      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,            
      initialLat : null,
      initialLong : null, 
      latitude : params.lat,
      longitude : params.long,

    }
  }
  componentDidMount(){
      navigator.geolocation.getCurrentPosition(
          (position)=> {

              var initialPostion = JSON.stringify(position)
              this.setState({
                  region :{
                  initialLat :position.coords.latitude,
                  initialLong : position.coords.longitude,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121
                  }
              })
          },
          (error) => this.setState({error : error.message}),
          { 
          enableHighAccuracy : true, 
          timeout : 20000, 
          maximumAge : 0}
      )
    }


  handleGetDirections = () => {
    console.log(this.state)

    const data = {
       source: {
        latitude: this.state.initialLat,
        longitude: this.state.initialLong
      },
      destination: {
        latitude: this.state.latitude,
        longitude: this.state.longitude
      },
      params: [
        {
          key: "travelmode",
          value: "driving"      // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode 
        }
      ]
    }

    getDirections(data)
  }


  static navigationOptions = ({navigation,navigationOptions}) => {
    const {params} = navigation.state
    return {   
        headerStyle : navigationOptions.headerStyle,
        headerTintColor : navigationOptions.headerTintColor,
        title : params.title
    }
}
     
    render(){
    const {params} = this.props.navigation.state
    
    return(
      
      <Container> 
      <Content>
      <Card >
            <CardItem bordered>
              <Left>
                <Thumbnail source={{uri:params.url }} />
                <Body>
                  <Text>{params.title}</Text>
                  <Text note>{params.alamat}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody bordered

            >
              <Image 
              source={{uri: params.url}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem bordered>
              <Left>
              </Left>
              <Body>
              </Body>
              <Right>
                <Button bordered small iconLeft rounded danger
                  onPress={this.handleGetDirections}
                >
                  <Icon name='compass' />
                  <Text> Rute </Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem bordered>
              <Text> {params.desc}</Text>
            </CardItem>
          </Card>
          </Content>
          </Container>
      )
    }
  }
  

  