import React from 'react'
import {Dimensions,TouchableOpacity,StyleSheet,  View, Text, ImageBackground, Image, Button} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'  
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo' 

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SoundPlayer from 'react-native-sound-player';

import { appSounds } from '../App';
import Sound from 'react-native-sound';

import check1 from '../simplescreen/check1';
//import check2 from '../simplescreen/check2';

import TrackPlayer from 'react-native-track-player';

export default function screen2({navigation}){
	return(
		//<View>
		//<Text> This is second screen</Text>
		//<TouchableOpacity
		//	onPress={()=>navigation.goBack()}
		//>
		//		<AntDesign name='arrowleft' size={24} />
		//</TouchableOpacity>
		//</View>
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
        style={styles.window}//
       //width: 340, height:200, justifyContent:'center', textAlign: 'center'}}
        //We are using online image to set background
 //       source={{
   //       uri:
     //       'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
        //}}
        source= {require('../assets/b6.jpg')}
        //You can also set image from your project folder
        //require('./images/background_image.jpg')        //
   //   onPress={()=>this.props.navigation.navigate('aboutscreen')}


        >

        
<View  style={styles.mainheader}>

<TouchableOpacity activeOpacity={0.5}
//onPress={() =>navigation.navigate('check1')}   
 >   
 <Image 
source= {require('../assets/simple.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  backgroundColor:'pink',   marginLeft:200, borderWidth: 3, 
  borderColor:'steelblue', borderRadius: 13, height : 55, width:150,
 }}       />
 </TouchableOpacity>
</View>


 <View  style={styles.mainContainer}>
<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check5')}   
 >     
 <Image 
source= {require('../assets/c5.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 2, borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check4')}   
 >     
 <Image 
 source= {require('../assets/c4.png')}
 style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check3')}   
 >     
 <Image 
  source= {require('../assets/c3.png')}
  style={{   borderWidth: 2, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check2')}   
 >     
 <Image 
 source= {require('../assets/c2.png')}
  style={{    borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}           
  >     
 <Image 
source= {require('../assets/c1.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
</View>
      

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c10.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/c9.png')}
 style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
>     
 <Image 
  source= {require('../assets/c8.png')}
  style={{   borderWidth: 2, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
>     
 <Image 
 source= {require('../assets/c7.png')}
  style={{    borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c6.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

      
 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c15.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
>     
 <Image 
 source= {require('../assets/c14.png')}
 style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
  source= {require('../assets/c13.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/c12.png')}
  style={{    borderWidth:2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c11.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c20.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/c19.png')}
 style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
>     
 <Image 
  source= {require('../assets/c18.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/c17.png')}
  style={{    borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c16.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
</View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c25.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
>     
 <Image 
 source= {require('../assets/c24.png')}
 style={{  borderWidth: 2, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
>     
 <Image 
  source= {require('../assets/c23.png')}
  style={{   borderWidth: 2, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/c22.png')}
  style={{    borderWidth: 2, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
>     
 <Image 
source= {require('../assets/c21.png')}
  style={{   borderWidth: 2, borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
 onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
//source= {require('../assets/c25.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 2, borderRadius: 100, height : 50, width:60, 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
// source= {require('../assets/c9.png')}
 style={{  borderWidth: 2,  borderRadius: 100, height : 50, width:60,    
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
  source= {require('../assets/c28.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/c26.png')}
  style={{    borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/c27.png')}
  style={{   borderWidth: 2,borderColor:'steelblue', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>



</View>

      </ImageBackground>
</View>



)};


const styles = StyleSheet.create({
window:{
 
        //alignSelf: 'stretch',
        //alignSelf: 'center',
        //justifyContent: 'center',
       width: 400,

        height: 630,
        // borderWidth: 1,
         //marginTop:200,
    //borderRadius: 75,
    //alignSelf: 'stretch',
        //width: win.width,
       // height: win.height,
     //position: 'relative',
    //resizeMode:'contain',
} , 

mainheader:{
marginTop:80,
marginRight: 300, 

},
mainContainer: {
   flex: 1,
  //  flexDirection:'row',
  paddingTop: 10,
  //  alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight:50,
  // borderRadius:2,
    //sborderWidth:1,
//    justifyContent: 'center',
    //justifyContent: 'space-between',
  },

  row1: {
  //  flex: 1,
    flexDirection:'row',
  //paddingTop: 20,
    alignItems: 'center',
    //marginTop: 10,
    //justifyContent: 'center',
    justifyContent: 'space-between',
  },
 row2: {
    //flex: 1,
    flexDirection:'row',
  paddingTop: 0,
    alignItems: 'center',
    marginTop: 10,
    marginBottom:0,
    //justifyContent: 'center',
    justifyContent: 'space-between',
  },
});







