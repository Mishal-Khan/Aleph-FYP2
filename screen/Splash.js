import React, {Component} from 'react';
import {Text, View, StyleSheet,  Image,  TouchableOpacity} from 'react-native';
//import images from './images/welcome';
//import { LinearGradient } from 'expo';
import LinearGradient from 'react-native-linear-gradient';  
export default class Splash extends Component {
async componentDidMount() {
// You can load api data or any other thing here if you want
const data = await this.navigateToHome();
if (data !== null) {
 this.props.navigation.navigate('home');  
}}
navigateToHome = async () => {
// Splash screen will remain visible for 2 seconds
const wait = time => new Promise((resolve) => setTimeout(resolve, time));
return wait(5).then(() => this.props.navigation.navigate('home'))
};
render() {
return (
<View style={styles.container}>

    <LinearGradient
       colors={['black','gold', 'pink', 'brown' ,'black','gold',  'grey','coral','aqua', 'green','turquoise','navy', 'teal', 'aqua', 'violet','black']}
      flex={1}
        
      >

<LinearGradient colors={['purple', 'pink', 'navy']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    ALEPH
  </Text>
  
</LinearGradient>
 <TouchableOpacity>
 <Image source= {require('../assets/a1.png')} //source={{uri:'https://i.pinimg.com/236x/49/bb/3f/49bb3f6e44da08a31f2d134d136c47c9--islamic-calligraphy-arabic-calligraphy.jpg'}}
    style={{ height : 400, width:390, marginBottom: 20, padding:20, marginTop :80, backgroundColor:'red', 
justifyContent: 'center',
alignItems: 'center',   }}
     />    


        </TouchableOpacity>
 {//<Image source={{uri:'https://i.pinimg.com/originals/f4/bd/53/f4bd53f7976e134b8f4dc5ce413b1569.jpg'}}
  //  style={{  height : 230, width:370, marginBottom: 20, padding:20, marginTop :0, backgroundColor:'red'}}
}
     
     



       
      </LinearGradient>
</View> 


);
}}
const styles = StyleSheet.create({
container: {
flex: 1,
//backgroundColor:'red',
//marginTop:200,
//justifyContent: 'center',
//alignItems: 'center',
},
  
    buttonText: {
    fontSize: 18,
    padding:5,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 10,

    color: 'black',
    fontWeight:'bold',
    backgroundColor: 'transparent',
  },
   linearGradient: {
   // flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    marginLeft:100,
    marginRight:100,
  marginTop:80
  },
});