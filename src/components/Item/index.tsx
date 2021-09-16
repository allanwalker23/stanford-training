import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDetails } from '../../../hooks/useDetails';

import  {Button, Container, LocationItem, NumberCardItem, SituationItem, TextItem} from './styles';

export interface ItemProps{
        nameDetails:string,
        situationDetails:string,
        numberCardDetails:number,
        stateDetails:string
}


export function Item({nameDetails,situationDetails,numberCardDetails,stateDetails}:ItemProps){
  const {setName,setNumberCard,setSituation,setState,name,numberCard,state,situation}= useDetails()
  const navigation = useNavigation();

  function handleDetails(){
      setName(nameDetails)
      setNumberCard(numberCardDetails)
      setSituation(situationDetails)
      setState(stateDetails)
      navigation.navigate('Viewer')
  }
  return (
    <Container>
        <TextItem>{nameDetails}</TextItem>
        <SituationItem>{situationDetails}</SituationItem>
        <NumberCardItem>{numberCardDetails}</NumberCardItem>
        <LocationItem>{stateDetails} 🇧🇷</LocationItem>
        <TouchableOpacity
          onPress={handleDetails}
        >
          <Text style={{color:'yellow'}}>Ver detalhes</Text>
          </TouchableOpacity >
        
    </Container>
  );
}