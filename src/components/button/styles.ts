import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  height: 80px;
  padding: 0 16px;
  border-radius: 10px;
  margin-top: 16px;
  border-width: 2px;
  border-color: #232129;
  background-color: #232129;

  align-items: center;
  justify-content: center;
`

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`
