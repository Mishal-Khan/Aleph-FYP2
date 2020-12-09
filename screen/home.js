import React from 'react'
import {Dimensions, TouchableOpacity , StyleSheet,  View, Text, ImageBackground, Image, Button } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign' 
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo' 

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SoundPlayer from 'react-native-sound-player';

import { appSounds } from '../App';
import Sound from 'react-native-sound';



import TrackPlayer from 'react-native-track-player';


const start = async () => {
    // Set up the player
     await TrackPlayer.setupPlayer();

    // // Add a track to the queue
    // await TrackPlayer.add({
    //     id: '0',
    //     url: require('../letters/001-alif.mp3'),
   // TrackPlayer.setupPlayer({}).then(async () => {
  //  TrackPlayer.setupPlayer().then(async () => {
   
   await TrackPlayer.add({
             id: '01',
           url: require('../letters/1277.mp3'),
          
          // title: 'Track Title',
           //artist: 'Track Artist',
    }) 
  //}) 
    // });
   // .then(() => {
      TrackPlayer.play();  //})
    // Start playing it
   // await TrackPlayer.play();
};

const check=({navigation}) => {
start();
navigation.navigate('secondScreen');
};

// const audioList = [
//   {
//     title: 'Play mp3 sound from Local',
//     isRequire: true,
//     url: require('./letters/001-alif.mp3'),
//   },];
// var sound1;
// function playSound(item, index) {
//   if (index == 0) {
//     sound1 = new Sound(item.url, (error, sound) => {
//       if (error) {
//         alert('error' + error.message);
//         return;
//       }
//       sound1.play(() => {
//         sound1.release();
//       });
//     });
//   }}
//   function stopSound(item, index) {
//   if (index == 0 && sound1) {
//     sound1.stop(() => {
//       console.log('Stop');
//     });
//   }}
//   function componentWillUnmount() {
//   sound1.release();}


//const requireAudio = require('../letters/001-alif.mp3');
export default function home({navigation}){
	// constructor(props) {
 //    super(props);
 //    Sound.setCategory('Playback', true); // true = mixWithOthers
 //    this.state = {
 //      tests: {},
 //    };
 //  }
	return(
		<View>

		<View style={{ 
        backgroundColor: 'steelblue',
      
      TintColor: '#fff', flexDirection:'row' , justifyContent:"space-between" , padding:15 , borderWidth:1 }}>
				<View style={{fontSize:60, padding:5, width: 35,backgroundColor:'white',}}>
				
				<TouchableOpacity 
			//onPress={()=>navigation.goBack()}
			onPress={() =>navigation.toggleDrawer()}
		>
				<Entypo name='menu' size={24} />
		</TouchableOpacity>

				</View>
				<View>
				<Text style={{  color: 'white', fontSize:22, }} >Arabic Learning</Text>
				</View>
				<View>
				</View>

		</View>

<ImageBackground 
        
style={{ justifyContent: 'center',height: 690,  width: 400, borderWidth: 1, resizeMode:'contain',
    backgroundColor:'white',
 }}  
 source= {require('../assets/a4.jpg')}
>
<View></View>
<View  style={styles.mainContainer}>
<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('secondScreen')}        //simple
  >     
 <Image 
source= {require('../assets/simple.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
//  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
  style={{  marginRight:175, borderWidth: 3, borderColor:'red', borderRadius: 13,
   height : 53, width:150, backgroundColor:'pink',  marginTop: 0,
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('screen3')}       //zer   
 
  >     
 <Image 
 source= {require('../assets/intt.png')}
 style={{  marginRight:125, borderWidth: 3, borderColor:'red',borderRadius: 13, height : 45, 
 width:200, backgroundColor:'pink',  marginTop: 30, padding:20,
 }}
    />
    </TouchableOpacity>
  

<View style={{  flexDirection: "row"}} >
 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('screen4')} //zabr
 >     
  <Image 
 source= {require('../assets/exp.png')}
 style={{  marginLeft:20, marginRight:40, borderWidth: 3, borderColor:'red',borderRadius: 13, height : 50, 
 width:150, backgroundColor:'pink',  marginTop: 30, padding:0,
 }}       />
 </TouchableOpacity> 
  <TouchableOpacity activeOpacity={0.5}
onPress={()=> {start(); navigation.navigate('secondScreen')}}        //zer   
 
  > 
 <Image 
  source= {require('../withoutback/hijab.png')}
  style={{  marginRight:10,marginLeft:0,  height : 160, width:150,    
 }}       />
 </TouchableOpacity>
</View>
	



</View>
</View>

  </ImageBackground>
</View>

  

)};


const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: "column"
  },
wind:{
 flex: 1,
        //alignSelf: 'stretch',
        //alignSelf: 'center',
        justifyContent: 'center',
     

      height: 630,
        width: 400,
         borderWidth: 1,
         //marginTop:10,
    //borderRadius: 75,
    //alignSelf: 'stretch',
        //width: win.width,
       // height: win.height,
     //position: 'relative',
    resizeMode:'contain',
    backgroundColor:'white',
}, 
mainContainer: {
   flex: 1,
  //  flexDirection:'row',
  paddingTop: 30,
  //  alignItems: 'center',
    marginTop: 40,
    marginLeft: 10,
    marginRight:50,
  // borderRadius:2,
    //sborderWidth:1,
//    justifyContent: 'center',
    //justifyContent: 'space-between',
  },

  row1: {
  //  flex: 1,
    flexDirection:'column',
  //paddingTop: 20,
    alignItems: 'center',
    marginTop: 20,
    //justifyContent: 'center',
    justifyContent: 'space-between',
  },
 row2: {
    //flex: 1,
    flexDirection:'column',
  paddingTop: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom:20,
    //justifyContent: 'center',
    justifyContent: 'space-between',
  },
});

