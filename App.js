/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


export var appSounds = {};


/*         <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
function about() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>aaaaa</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerRoutes(){
  return(

<Drawer.Navigator initialRouteName= "Home">
<Drawer.Screen name="Home" component= {HomeScreen} />
<Drawer.Screen name="about" component= {about} />
</Drawer.Navigator>

    );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
            <Stack.Screen name="about" component={about} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
  
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
*/
import {
  
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  
  drawerIcon,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo' ;
import home from './screen/home'
import dua from './screen/dua'
import Splash from './screen/Splash' 
import screen2 from './screen/screen2'
import check1 from './simplescreen/check1'
import screen3 from './screen/screen3'
import screen4 from './screen/screen4'
import check2 from './simplescreen/check2'
import check3 from './simplescreen/check3'
import check4 from './simplescreen/check4'
import check5 from './simplescreen/check5'

import DrawerStyle from './screen/customerdrawer'
import gaming from './gamemode/gaming'
import gamescreen from './gamemode/gamescreen'
import game2 from './gamemode/game2'
import game3 from './gamemode/game3'
import puzzle1 from './gamemode/game3images/puzzle1'
import puzzle2 from './gamemode/game3images/puzzle2'
import level1 from './gamemode/game2levels/level1'
import level2 from './gamemode/game2levels/level2'

import puzzle5 from './gamemode/game3images/puzzle5';
import puzzle4 from './gamemode/game3images/puzzle4';
import puzzle3 from './gamemode/game3images/puzzle3';

const splashStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const  homedrawer =()=>(
      <Stack.Navigator
           headerMode='none'
        //
    //initialRouteName='home'
      >
         <Stack.Screen   
              name='homedrawer' 
              component={home}
         />
          <Stack.Screen   
              name='secondScreen'   
              component={screen2}
         />
         <Stack.Screen   
              name='check1'   
              component={check1}
         />
          <Stack.Screen   
              name='check2'   
              component={check2}
         />
          <Stack.Screen   
              name='screen3'   
              component={screen3}
         />
      </Stack.Navigator>
  )                                       
// const  homeStack2 =()=>(
//       <Stack.Navigator
//            headerMode='none'
//           initialRouteName='homeMain'
//       >
//          <Stack.Screen   
//               name='homeMain' 
//               component={homesrc}
//          />
        
//           <Stack.Screen   
//               name='screen3'   
//               component={screen3}
//          />
//       </Stack.Navigator>
//   )



const drawerNav = () => (
//function Mydrawer(){
 // return(
  <Drawer.Navigator

      drawerContent={props => <DrawerStyle {...props} 

      />}

    drawerStyle={{
     backgroundColor: 'lightblue', 
     width: 200, 
   }} 
   drawerContentOptions={{
     activeTintColor: 'blue',
     itemStyle: { marginVertical: 30 },
      labelStyle: {
     fontSize: 18,
     color: 'black',
   },
   }}
  >
   
    <Drawer.Screen   
          name='homedrawer'     
          component={home}
 // options={{    
 //            drawerIcon: config => <Icon
 //                size={25}
 //                name={Platform.OS === 'android' ? 'md-book' : 'ios-create'}></Icon>
 //    }}    
     />
     <Drawer.Screen 
           name='secondScreen'   
              component={screen2}
    
     />
    <Drawer.Screen 
           name='dua'   
              component={dua}
    
     />
    <Drawer.Screen 
              name='screen3'   
              component={screen3}
    
     />
      <Drawer.Screen 
              name='screen4'   
              component={screen4}
    
     />
    <Drawer.Screen 
              name='check1'   
              component={check1}
     />
     <Drawer.Screen 
              name='check2'   
              component={check2}
       />
 <Drawer.Screen 
              name='check3'   
              component={check3}
       />
        <Drawer.Screen 
              name='check4'   
              component={check4}
       />
        <Drawer.Screen 
              name='check5'   
              component={check5}
       />

 <Drawer.Screen 
              name='gaming'   
              component={gaming}
       />
       <Drawer.Screen 
              name='gamescreen'   
              component={gamescreen}
       />
  <Drawer.Screen 
              name='game2'   
              component={game2}
       />
       <Drawer.Screen 
              name='game3'   
              component={game3}
       /> 
  <Drawer.Screen 
              name='puzzle1'   
              component={puzzle1}
       /> 
       <Drawer.Screen 
              name='puzzle2'   
              component={puzzle2}
       /> 
         <Drawer.Screen 
              name='puzzle3'   
              component={puzzle3}
       /> 
         <Drawer.Screen 
              name='puzzle4'   
              component={puzzle4}
       /> 
         <Drawer.Screen 
              name='puzzle5'   
              component={puzzle5}
       /> 
       <Drawer.Screen 
              name='level1'   
              component={level1}
       /> 
       <Drawer.Screen 
              name='level2'   
              component={level2}
       /> 
    </Drawer.Navigator>
  
  )


export default function App(){
// const componentDidMount = () =>{
// appSounds.likeSound = new Sound("001-alif.mp3", Sound.MAIN_BUNDLE, error => {
//       if (error) {
//         console.log("failed to load the sound", error);
//       }
//     });
// }

  return(

    <NavigationContainer>
    <splashStack.Navigator
        headerMode='none'
    >
        <splashStack.Screen     
            name = 'splash'
            component={Splash}
         />
         <splashStack.Screen                        

            name='home'       
            component={drawerNav}

          />
    </splashStack.Navigator>
    
    </NavigationContainer>
    )
}


// function Home() {
//   return (
//      <View style={{ flexDirection: 'row' }}>
        
//         <TouchableOpacity >
// <Image source={require('./assets/d1.png')} />;

//         </TouchableOpacity>
     

//  </View>
//   );
// }

// function Root() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator>
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Root" component={Root} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

