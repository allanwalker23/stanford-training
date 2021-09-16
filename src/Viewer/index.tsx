import React from 'react';
import { Text,View } from 'react-native';
import { obj } from '../../utils/utils';
import { Item } from '../components/Item';
import { Container } from './styles';
import uuid from 'react-native-uuid'
import { Title } from '../Home/styles';
import { useDetails } from '../../hooks/useDetails';

export function Viewer(){
  const {name,numberCard,state,situation}= useDetails()
  return (
    <>
    <Container>
      <Title>Viewer🚀</Title>

      
        <Item
        key={String(uuid.v4())}
        nameDetails={name}
        numberCardDetails={numberCard}
        situationDetails={situation}
        stateDetails={state}

        />
        
      
        
      
       
       
    </Container>

    </>
  );
}