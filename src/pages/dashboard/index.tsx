import React, { useContext, useEffect, useState } from 'react';
import {Feather} from '@expo/vector-icons'
import { useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';
import { ModalizeContext } from '../../components/bottomSheet';

import PostsList from '../../components/postsList';
import TodayPost from '../../components/todayPost';

import { IUserData, IUserState } from '../../store/modules/users/userTypes';

import { Container, Header, SaluteContainer, UserNameText, Salute } from './styles';

export interface IArticleData {
  id: number,
  creatorId: number,
  creatorUsername: string,
  postTitle: string,
  postContent: string,
  createdAt: string,
  readTime: number
}


const dashboardPage: React.FC = () => {
  const UserArray = useSelector<IUserState, IUserData>(state => state.users)
  const [ hours, setHours ] = useState('')
  const [ articles, setArticles ] = useState<IArticleData[]>([])
  const [ articlesOfTheDay, setArticleOfTheDay ] = useState<IArticleData>({} as IArticleData)
  const { isOpen } = useContext(ModalizeContext)

  useEffect(() => {
    const hour = new Date().getHours()
    if(hour >= 6) {setHours('Morning')}
    if(hour >= 12) {setHours('Afternoom')}
    if(hour >= 18) {setHours('Evening')}

    api.get<IArticleData[]>('articles').then(response => {
      const articlesArray = response.data;
      const randomArticle = articlesArray[Math.floor(Math.random() * articlesArray.length)]

      setArticles([...articles, ...articlesArray])
      setArticleOfTheDay(randomArticle)
    })
  }, [])

  return (
    <Container>
      <Header>
        <SaluteContainer>
          <UserNameText>Hi, {UserArray.username}</UserNameText>
          <Salute>Good {hours}</Salute>
        </SaluteContainer>

          <TouchableOpacity onPress={() => isOpen()}>
            <Feather name='plus-circle' color='#232129' size={32}/>
          </TouchableOpacity>

      </Header>
      
      <TodayPost article={articlesOfTheDay}/>
      <PostsList posts={articles} />
    </Container>
  );
}

export default dashboardPage;
