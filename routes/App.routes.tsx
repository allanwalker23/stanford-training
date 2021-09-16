import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../src/Home';
import { Viewer } from '../src/Viewer';


const {Navigator, Screen}= createNativeStackNavigator();

export function AppRoutes(){
    
    return(
        <Navigator
             screenOptions={{
            headerShown: false,
             }}
        >
            <Screen
                name='Home'
                component={Home}
            />


            <Screen
                name='Viewer'
                component={Viewer}
            />

          
        </Navigator>
    )
}