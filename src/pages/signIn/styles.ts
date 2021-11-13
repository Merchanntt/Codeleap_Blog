import { Platform } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 100}px;
`;

export const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CodeLeapLogo = styled.Text`
  color: #232129;
  font-weight: bold;
  font-size: 36px;
`;

export const SubTitleText = styled.Text`
  color: #232129;
  font-size: 14px;
  padding: 30px;
`;

