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

//import zabr1 from '../zabrscreen/zabr1';
//import zabr2 from '../zabrscreen/zabr2';

import check1 from '../simplescreen/check1';
import check2 from '../simplescreen/check2';

import TrackPlayer from 'react-native-track-player';

export default function screen3({navigation}){
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
				<View style={{fontSize:60, padding:5, width: 33,backgroundColor:'white',}}>
				
				<TouchableOpacity 
			//onPress={()=>navigation.goBack()}
			onPress={() => navigation.toggleDrawer()}
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
 //onPress={()=>navigate.push('about')}

onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/exp.png')}
 style={{  marginLeft:156,  borderWidth: 2, borderColor:'steelblue',borderRadius: 13, height : 43, 
 width:203, backgroundColor:'pink',  marginTop: 0, padding:0,
 }}     />
 </TouchableOpacity> 
</View>


<View  style={styles.mainContainer}>
<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t5.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'black',  borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/t4.jpg')}
 style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
  source= {require('../assets/t3.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check2')}   
  >     
 <Image 
 source= {require('../assets/t2.jpg')}
  style={{    borderWidth: 1,borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t1.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
</View>
      

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t10.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/t9.jpg')}
 style={{  borderWidth: 1,borderColor:'black', borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
  source= {require('../assets/t8.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/t7.jpg')}
  style={{    borderWidth: 1,borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t6.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

      
 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t15.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/t14.jpg')}
 style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
  source= {require('../assets/t13.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/t12.jpg')}
  style={{    borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t11.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t20.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/t19.jpg')}
 style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
  source= {require('../assets/t18.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/t17.jpg')}
  style={{    borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/t16.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
</View>

 <View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t25.jpg')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60, backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
 source= {require('../assets/t24.jpg')}
 style={{  borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
  source= {require('../assets/t23.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/t22.jpg')}
  style={{    borderWidth: 1, borderColor:'black', borderRadius: 100, height : 40, width:50,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
source= {require('../assets/t21.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>
 </View>

<View style={styles.row2}>

<TouchableOpacity activeOpacity={0.5}
      
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
//source= {require('../assets/c25.png')}
//  source={{uri:'https://uploads.wikimedia.org/wikipedia/commons/thumb/d/d2/Arabic_Alif.gif/1200px-Arabic_Alif.gif'}}
  style={{  borderWidth: 1, borderRadius: 100, height : 50, width:60, 
 }}       />
 </TouchableOpacity>

 
<TouchableOpacity activeOpacity={0.5}
        
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }} >     
 <Image 
// source= {require('../assets/c9.png')}
 style={{  borderWidth: 1, borderRadius: 100, height : 50, width:60,    
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
  source= {require('../assets/t29.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,   backgroundColor:'blue', 
 }}       />
 </TouchableOpacity> 

<TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
  >     
 <Image 
 source= {require('../assets/t27.jpg')}
  style={{    borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
 }}       />
 </TouchableOpacity>

 <TouchableOpacity activeOpacity={0.5}
onPress={() =>navigation.navigate('check1')}   
 >     
 <Image 
source= {require('../assets/t26.jpg')}
  style={{   borderWidth: 1, borderColor:'black', borderRadius: 100, height : 50, width:60,  backgroundColor:'blue', 
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
marginTop:100,
//marginLeft: 215, 


},
mainContainer: {
 //  flex: 1,
  //  flexDirection:'row',
  paddingTop: 10,
  //  alignItems: 'center',
    marginTop: 5,
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
