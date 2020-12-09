import React, { useState } from "react";
import { View, StyleSheet,  } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList,  drawerIcon, } from '@react-navigation/drawer';

export default function customDrawer(props){
	return(
		 <View style={{flex:1}}>
            <DrawerContentScrollView 
               
            {...props}

            >
            <DrawerItem 
                        onPress={() => props.navigation.navigate('homedrawer')}
                        labelStyle={{ fontSize: 16, color: "black" }}
                        label="📘 Learning Mode"
                        options={{    
            drawerIcon: config => <Icon
                 size={50}
                 name={Platform.OS === 'android' ? 'md-book' : 'ios-create'}></Icon>
     }}    

                    />

                    
                    <DrawerItem  
                        onPress={() => props.navigation.navigate('gamescreen')}
                        labelStyle={{ fontSize: 16, color: "black" }}
                        label="🎮 Gaming Mode"

                    />

<DrawerItem  
                        onPress={() => props.navigation.navigate('dua')}
                        labelStyle={{ fontSize: 16, color: "black" }}
                        label="🤲🏻 Dua"

                    />
         </DrawerContentScrollView>
         </View>



		)
}