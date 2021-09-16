import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AppRoutes } from './routes/App.routes';
import { Home } from './src/Home';
import { Rajdhani_700Bold,Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { DetailsProvider, useDetails } from './hooks/useDetails';
export default function App() {
  let [fontsLoaded] = useFonts({
    Rajdhani_500Medium,    
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    
   <NavigationContainer>
     <DetailsProvider>
         <AppRoutes/>
      </DetailsProvider>
      
    </NavigationContainer>
  );
}


