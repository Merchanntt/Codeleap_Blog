import React from 'react';
import { useNavigation } from '@react-navigation/native';

import PostsList from '../../components/postsList';
import TodayPost from '../../components/todayPost';

import { Container, Header, UserNameText, Salute } from './styles';

const dashboardPage: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <Container>
      <Header>
        <UserNameText>Hi, Merchanntt</UserNameText>
        <Salute>Good Evening</Salute>
      </Header>
      
      <TodayPost onPress={() => navigate('PostPage')}/>
      <PostsList />
    </Container>
  );
}

export default dashboardPage;
