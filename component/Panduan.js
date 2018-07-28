import React , {Component} from 'React'

import {
    View,
    StyleSheet,
    Image,
} from 'react-native'

import {DrawerNavigator,TabNavigator,StackNavigator,TabBarBottom} from 'react-navigation'
import {Icon, H1,Container,Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title : 'Panduan',
        drawerLabel : 'panduan',
        drawerIcon: <Icon style={{color:'red'}} name="ios-book" size={30}/>
    }
    render(){
    const {params} = this.props.navigation.state
    return(
        <Container>
        <Content>
        <H1> Panduan Penggunaan </H1> 
            <Card>
            <CardItem bordered>
              <Text>1. Klik lokasi wisata yang diiginkan.</Text>
            </CardItem>
            <CardItem cardBody bordered>
              <Image 
              source={require('../assets/images/panduan/images1.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Text>2. Klik Tombol Detail untuk menampilkan deskripsi objek wisata.</Text>
            </CardItem>
            <CardItem cardBody bordered>
              <Image 
              source={require('../assets/images/panduan/images2.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Text>3. Klik tombol rute untuk membuka google maps untuk melihat arah menuju ke tempat wisata.</Text>
            </CardItem>
            <CardItem cardBody bordered>
              <Image 
              source={require('../assets/images/panduan/images3.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Text>4. klik drawer navigasi untuk menampilkan menu peta,tentang dan panduan aplikasi.</Text>
            </CardItem>
            <CardItem cardBody bordered>
              <Image 
              source={require('../assets/images/panduan/images4.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
          </Card>

          <Card>
            <CardItem bordered>
              <Text>5. klik Menu Peta untuk menampilkan titik-titik objek wisata dan pilih menu tentang untuk menampilkan aplikasi.</Text>
            </CardItem>
            <CardItem cardBody bordered>
              <Image 
              source={require('../assets/images/panduan/images5.jpg')} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
          </Card>
      </Content>
      </Container>
      )
    }
  }
const style = StyleSheet.create({
  container : {
    flex : 1
  }
})
