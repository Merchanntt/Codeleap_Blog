import { Platform } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 30px 30px ${Platform.OS === 'android' ? 150 : 100}px;
`;

export const Header = styled.View`
  align-items: flex-start;
`;

export const UserNameText = styled.Text`
  color: #232129;
  font-size: 16px;
`;

export const Salute = styled.Text`
  color: #232129;
  font-weight: bold;
  font-size: 24px;
`;

