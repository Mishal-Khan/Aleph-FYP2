import React from 'react';
//import react in our code.
import { Dimensions,TouchableOpacity,StyleSheet,  View, Text, ImageBackground, Image, Button } from 'react-native';


import AntDesign from 'react-native-vector-icons/AntDesign' 
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo' 

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import SoundPlayer from 'react-native-sound-player';

import Sound from 'react-native-sound';
import { Col, Row, Grid } from "react-native-easy-grid";

import TrackPlayer from 'react-native-track-player';



const start = async () => {
     TrackPlayer.setupPlayer();
     await  TrackPlayer.add({
             id: 'track',
           url: require('../letters/005-jeem.mp3'),
    }) 
    await TrackPlayer.play();  
};


export default function check5({navigation}){
  
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



<View  style={styles.mainContainer}>

<View style={styles.mainheader}>
        <TouchableOpacity activeOpacity={1}
onPress={() =>navigation.navigate('homedrawer')}   
           
        >     
 <Image 
source= {require('../assets/home.png')}
 style={{ borderRadius:200,  height:50,  width:50,  marginTop:11, marginLeft:5}}       />
 </TouchableOpacity>

<TouchableOpacity activeOpacity={1}
onPress={() =>navigation.navigate('check4')}                    
 >     
 <Image 
source= {require('../assets/next.png')}
 style={{  borderWidth: 3, height:62,  width:100, marginLeft:200, marginTop:10}}       />
 </TouchableOpacity>
  
</View>



<View style={{flexDirection:'row'}}>


<View style={{flexDirection:'column', width:100}}>
<TouchableOpacity activeOpacity={1}
onPress={()=> {start()}         
}>     


 <Image 
 source= {require('../assets/play.jpg')}
 style={{marginLeft:10, marginTop:70, borderWidth: 3, borderColor:'black', borderRadius:200, height : 60, width:60,
  backgroundColor:'black',
  flexDirection:'row',
 }}       />

      </TouchableOpacity>
 

<TouchableOpacity activeOpacity={0.5}
        
>     
 <Image 
 source= {require('../assets/mic.png')}
 style={{  marginLeft:10,marginTop:50, borderWidth: 3, borderColor:'black', borderRadius:200, height : 60, width:60, backgroundColor:'blue',
  
 }}       />
 </TouchableOpacity>

</View>
    

<View style={{flexDirection:'column'}}>
      

<TouchableOpacity activeOpacity={0.5}
        
>     
  <Image 
 source= {require('../withoutback/c5.png')}
 style={{ marginTop:30, borderWidth:2, borderRadius: 20, borderColor:'black', 
 height : 245, width : 230,  marginLeft: 20, paddingRight:150,
   
 }}       />
 </TouchableOpacity>
    </View>


</View>



<View style={styles.footer}>


 <TouchableOpacity 
 


  >     
 <Image 
  source= {require('../withoutback/child2.png')}
  style={{   height : 260, width:280,  marginTop: 20, marginLeft:40, 
 }}       />
 </TouchableOpacity> 
     
</View>

</View>
 </View>

  

)};


const styles = StyleSheet.create({
window:{
 
        //alignSelf: 'stretch',
        //alignSelf: 'center',
        justifyContent: 'center',
     

      height: 780,
        width: 470,
         borderWidth: 1,
         //marginTop:10,
    //borderRadius: 75,
    //alignSelf: 'stretch',
        //width: win.width,
       // height: win.height,
     //position: 'relative',
    resizeMode:'contain',
    backgroundColor:'white',
} , 

mainContainer: {
   //flex1;
  backgroundColor:'white',
  //  flexDirection:'row',
  //paddingTop: 30,
  //  alignItems: 'center',
   // marginTop: 40,
//    marginLeft: 10,
  //  marginRight:50,
  // borderRadius:2,
    //sborderWidth:1,
//    justifyContent: 'center',
    //justifyContent: 'space-between',
  },
mainheader:{
 //flex: 1,
   flexDirection:'row',

},
row1:
{
  flexDirection:'row',
},
 row2: {
    //flex: 1,
    flexDirection:'row',
 // paddingTop: 1,
  //  alignItems: 'center',
   // marginTop: 10,
   // marginBottom:20,
    //justifyContent: 'center',
   // justifyContent: 'space-between',
  },

  footer:{
    // flexDirection:'column',
 // paddingTop: 1,
//    alignItems: 'center',
  },
});


