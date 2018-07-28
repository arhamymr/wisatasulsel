import React , {Component} from 'React'
import {
    View,
    Image,
    StyleSheet
} from 'react-native'

import {Container,Card,CardItem,H1,Content,DeckSwiper,Text,Thumbnail} from 'native-base'
import Icon from 'react-native-vector-icons/Ionicons';

const url = [
     {
       image : 'http://3.bp.blogspot.com/-GuR_ZD0mRT4/Ui-xmlgIZOI/AAAAAAAACUk/lSqsl4rfcSA/s1600/DSC_1334.JPG'
     },{ image : 'http://anekatempatwisata.com/wp-content/uploads/2015/11/Malino-Highland-1.jpg'
      },{ image : 'http://cdn2.tstatic.net/makassar/foto/bank/images/topejawa_20171220_212856.jpg'
      },{
        image : 'https://lh3.googleusercontent.com/p/AF1QipOdV9sGpDXhOyb-u6v-AeM31LDOMLCUxgZdkQOQ=s1600-w400'
      },{
        image : 'https://3.bp.blogspot.com/-4f1uQGnbfcM/VvLmpiYq8PI/AAAAAAAAAQ8/Fm8Z9gt6r8wErwDcQF9QhPZGuSxG4zlxw/s1600/seruni.jpg'
      },{
        image : 'https://media.travelingyuk.com/wp-content/uploads/2017/11/Keindahan-Pantai-Apparalang-image-source.jpg'
      },{
        image : 'https://nyero.id/wp-content/uploads/2018/03/Wisata-Hits-Bamboo-Village-Tanassang-Sinjai.png'
      },{
        image : 'http://ayokeselayar.com/wp-content/uploads/2015/01/pabadilang-selayar.jpg'
      },{
        image : 'https://media.travelingyuk.com/wp-content/uploads/2017/11/Monumen-Habibie-Ainun-image-source.jpg'
      },{
        image : 'https://wisatalengkap.com/wp-content/uploads/2017/03/16465632_755319971309471_9142286017833730048_n-1.jpg'
      },{
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp3KPl6YEAJo2d40WjJxjekmBqhEX0az8jjlvXQyJDEMOB_ojA'
      },{
        image : 'https://media.travelingyuk.com/wp-content/uploads/2017/07/Buttu.jpg'
      },{
        image : 'http://corporate.larizhotels.com/wp-content/uploads/2018/02/Lejja_soppeng_air_panas.jpg'
      },{
        image : 'https://assets-a1.kompasiana.com/items/album/2015/06/23/143503473910137599111.jpg'
      },{
        image : 'https://asset.kompas.com/data/photo/2014/03/11/1400051leang-1780x390.jpg'
      }]

export default class Tentang extends Component {
  static navigationOptions = {
    drawerLabel: 'Tentang',
    drawerIcon: <Icon style={{color:'red'}} name="ios-person" size={30}/>
  };

  render() {
    

    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={url}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={{uri : item.image}} />
                </CardItem>
               
             
          
                
              </Card>
            }
          />
          <View>

             <H1 style={{marginTop: 350,paddingLeft:20,fontWeight:'bold'}}>Sulsel Tourism</H1>
             <Text style={{padding:20}}>
                Sulawesi Selatan dengan Kota Makassar merupakan ibu kota provinsinya yang sudah tidak asing lagi di telinga masyarakat. Provinsi yang terletak dibagian selatan pulau Sulawesi ini merupakan salah satu Provinsi di indonesia dengan berbagai keindahan pariwisatanya. Banyak tempat-tempat menarik yang tersebar di Sulawesi Selatan yang memiliki daya tarik tersendiri bagi para wisatawan.
              </Text>
          </View>
        </View>
      </Container>
    )
  }
}

