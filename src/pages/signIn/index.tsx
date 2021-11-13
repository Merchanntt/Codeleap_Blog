import React from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import {InputComponent} from '../../components/Input'
import ButtonComponent from '../../components/button';
import api from '../../services/api';

import { Container, TextContainer, CodeLeapLogo, SubTitleText } from './styles';

const signInPage: React.FC = () => {
  const { navigate } = useNavigation()

  function SignIn() {
    const IdGenerator = Math.random() * 100;
    try { 
      api.get('users').then(response => {
        console.log(response.status)
        navigate('Dashboard')
      })
    } catch (error) {
      Alert.alert('Ops!', 'Something got wrong. Please, check you username, and try again')
    }
  }

  return (
    <>
      <KeyboardAvoidingView
         style={{ flex: 1 }}
         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
         enabled
      >
        <Container>
          <TextContainer>
            <CodeLeapLogo>CODELEAP</ CodeLeapLogo>
            <SubTitleText>Be welcome to our community!</SubTitleText>
          </TextContainer>
            <InputComponent inputTextLabel='Username'/>
            <ButtonComponent onPress={SignIn}>SignIn</ButtonComponent>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}

export default signInPage;
