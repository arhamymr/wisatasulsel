import React , {Component} from 'React'
import {
    Text,
    View,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'
import MapView from 'react-native-maps'
import Data from './data'
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from 'react-native-splash-screen'
import {DrawerNavigator} from 'react-navigation'

export default class MapsPage extends Component {     
     constructor(props){
      super(props)
      this.dataMarker = this.dataMarker.bind(this)
   
      this.state = {
        region : {
          latitude : -5.133965, 
          longitude: 119.405552,          
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121
        }
      }
    }
    
    static navigationOptions = ({navigation,navigationOptions}) => {
        const {params} = navigation.state
        return {   
            headerStyle : navigationOptions.headerStyle,
            headerTintColor : navigationOptions.headerTintColor,
            title:'Peta',
            drawerIcon: <Icon style={{color:'red'}} name="ios-pin" size={30}/>
        }
    }

    componentDidMount(){
      navigator.geolocation.getCurrentPosition(
          (position) => {
              var initialPostion = JSON.stringify(position)
              this.setState({
                  region : {
                    latitude :position.coords.latitude,
                    longitude : position.coords.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                  }
              })
          },
          (error) => this.setState({error : error.message}),
          
          { 
            enableHighAccuracy : true, 
            timeout : 20000, 
            maximumAge : 0
          }
      )
    }


    dataMarker(counter = 0,) {
                    let returnData;
                    
                     returnData =  Data[counter].wisata.map( (_data,i) => {
                        return (
                    <MapView.Marker
                              key={i}
                              onCalloutPress={ () => {                
                                  this.props.navigation.navigate('Details', {
                                    initialLat : this.state.region.latitude,
                                    initialLong  : this.state.region.longitude,
                                    latitude : _data.lat,
                                    longitude : _data.long,
                                    title : _data.name,
                                    alamat :_data.alamat,
                                    desc: _data.description,
                                    url : _data.url
                                  })
                                }}
                              title = {_data.name}
                              image = {require('../assets/images/point_out.png')}
                              coordinate = {
                                              { 
                                                latitude : _data.lat , 
                                                longitude :_data.long,
                                                latitudeDelta: 0.015,
                                                longitudeDelta: 0.0121
                                              }
                                            }
                                            
                              description={_data.description}
                            />       
                      )
                    })
                    
          return returnData;
        }
    render(){
    return (
      <View style={style.container} >
        <MapView 
            style={style.map}
            region={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>  
          <MapView.Marker
              title = 'my location'
              image = {require('../assets/images/poin_me.png')}
              coordinate = {this.state.region}
              /> 

          {this.dataMarker(0)} 
          {this.dataMarker(1)} 
          {this.dataMarker(2)} 
          {this.dataMarker(3)} 
          {this.dataMarker(4)} 
          {this.dataMarker(5)} 
          {this.dataMarker(6)} 
          {this.dataMarker(7)} 
          {this.dataMarker(8)} 
          {this.dataMarker(9)} 
          {this.dataMarker(10)} 
          {this.dataMarker(11)} 
          {this.dataMarker(12)} 
          {this.dataMarker(13)} 
          {this.dataMarker(14)} 
          {this.dataMarker(15)} 
          {this.dataMarker(16)} 
          {this.dataMarker(17)} 
          {this.dataMarker(18)} 
          {this.dataMarker(19)} 
          {this.dataMarker(20)} 
  
                   
        </MapView> 
      </View> 
      )
    }
  }
  
 

  const style = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    logoHeader : {
      width: 200,
      resizeMode : 'contain',
      marginLeft:10
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });

 
