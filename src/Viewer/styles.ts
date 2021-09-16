import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
        margin-top: 30px;
        background-color:green;
        width:340px;
        height:130px;
        align-items: center;
        
        
        border-radius: 10px;

        margin-bottom: 16px;
`;

export const TextItem = styled.Text`
  color: white;
  font-size: 24px;
  
    
`
export const NumberCardItem= styled.Text`
    color: black;
    font-family: 'Rajdhani_700Bold';

`

export const SituationItem = styled.Text`
    color: black;
    
    font-family: 'Rajdhani_700Bold';
`
export const LocationItem = styled.Text`
    color: black;
    
    font-family: 'Rajdhani_700Bold';
`
export const Button = styled(TouchableOpacity)`

`