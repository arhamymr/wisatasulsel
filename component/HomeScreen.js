import React , {Component} from 'React'
import {
    View,
    StyleSheet,
    Image,
} from 'react-native'
import {DrawerNavigator,TabNavigator,StackNavigator,TabBarBottom} from 'react-navigation'
import {Icon, Container,Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right } from 'native-base';

export default class HomeScreen extends Component {
    static navigationOptions = {
      title: 'Daftar Wisata'
    }

    render(){
    const {params} = this.props.navigation.state
    return(
        <Container>
        <Content>
        {
          params.wisata.map((val,i) => {
            return (
              <Card key={i}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{uri:val.url }} />
                <Body>
                  <Text>{val.name}</Text>
                  <Text note>{val.alamat}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody bordered>
              <Image 
              source={{uri: val.url}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem bordered>
              <Left>
              </Left>
              <Body>
              </Body>
              <Right>
                <Button bordered small iconLeft rounded success
                  onPress={() => this.props.navigation.navigate('Details',{
                  title : val.name,
                  desc: val.description,
                  url : val.url,
                  alamat : val.alamat,
                  lat : val.lat,
                  long : val.long
                })}
                >
                  <Icon name='arrow-forward'/>
                  <Text>detail</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
              )
          })
        }

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
