import React, { useCallback, useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';

import { InputComponent } from '../../components/Input'
import ButtonComponent from '../../components/button';

import api from '../../services/api';
import { addUserToStore } from '../../store/modules/users/actions';
import { createId } from '../../utils/createFunctions';

import { Container, TextContainer, CodeLeapLogo, SubTitleText } from './styles';

const signInPage: React.FC = () => {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  const [username, setUserName] = useState('')
  const [isInputEmpty, setIsImputEmpty] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    username.length > 0 ? setIsImputEmpty(true) : setIsImputEmpty(false)
  }, [username])

  const SignIn = useCallback(() => {
    try { 
      setLoading(true)
      api.get(`users?username=${username}`).then(response => {
        let user = response.data[0]

        if(!user) {
          user = {
            id: createId,
            username
          }
          api.post('users', user)
        }
        dispatch(addUserToStore(user))
        setLoading(false)
        
        navigate('Dashboard')
      })
    } catch (error) {
      Alert.alert('Ops!', 'Something got wrong. Please, check you username, and try again')
    }
  }, [username, loading])

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
            <InputComponent 
              inputTextLabel='Username'
              value={username}
              onChangeText={(e) => setUserName(e)}
            />
            <ButtonComponent onPress={SignIn} isFilled={isInputEmpty}>
              {loading ? <ActivityIndicator /> : 'SignIn'}
            </ButtonComponent>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}

export default signInPage;
