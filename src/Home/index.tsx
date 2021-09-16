import React from 'react';
import { Text,View } from 'react-native';
import { obj } from '../../utils/utils';
import { Item } from '../components/Item';
import { Container, Title } from './styles';
import uuid from 'react-native-uuid'

export function Home(){
  return (
    <>
    <Container>
      <Title>Dashboard🚀</Title>

      {obj.map((item=>(
        <Item
        key={String(uuid.v4())}
        nameDetails={item.name}
        numberCardDetails={item.numberCard}
        situationDetails={item.situation}
        stateDetails={item.state}

        />
        
      )))
        
      }
       
       
    </Container>

    </>
  );
}