import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Feather} from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

import api from '../../services/api';
import { IArticleData } from '../dashboard';
import { InputComponent } from '../../components/Input';
import ButtonComponent from '../../components/button';
import { IUserData, IUserState } from '../../store/modules/users/userTypes';
import { timeToRead } from '../../utils/createFunctions';

import { 
    Container, 
    Header,
    EditButtonsContainer,
    Article,
    ArticleDateContainer,
    ArticleDate,
    ArticleReadTime,
    ArticleTitle,
    ArticleContent,
  } from './styles';
import { Alert } from 'react-native';

const PostPage: React.FC = () => {
  const User = useSelector<IUserState, IUserData>(state => state.users)
  const route = useRoute()
  const { goBack, reset } = useNavigation()
  const post = route.params as IArticleData

  const [isCreator, setIsCreator] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedArticleTitle, setEditedArticlesTitle] = useState(post.postTitle)
  const [editedArticleContent, setEditedArticlesContent] = useState(post.postContent)
  
  useEffect(() => {
    User.id === post.creatorId && setIsCreator(true)
  }, [])

  function updateArticle() {
    api.put(`articles/${post.id}`, {
      post: {
        postTitle: editedArticleTitle,
        postContent: editedArticleContent,
        readTime: timeToRead(editedArticleContent.length)
      }
    })
  }

  function deleteArticle() {
    Alert.alert(
      'Delete Article',
      'Are you sure, that you want to delete this post?',
      [
        {
          text: "Cancel",
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: "I'm Sure",
          onPress: () => {
            api.delete(`articles/${post.id}`)
            reset({
              routes: [{ name: 'Dashboard' }],
              index: 0
            })
          },
          style: 'default'
        }
      ]
    )
  }

  return (
    <Container>
      <StatusBar style='light'/>
      <Header>
        <TouchableOpacity onPress={() => goBack()}>
          <Feather name='arrow-left' color='#fff' size={32}/>
        </TouchableOpacity>
        {isCreator && (
          <EditButtonsContainer>
            
          <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
            <Feather name='edit' color='#fff' size={24}/>
          </TouchableOpacity>

          <TouchableOpacity 
            style={{marginLeft: 16}}
            onPress={deleteArticle}
            >
            <Feather name='trash' color='#fff' size={24}/>
          </TouchableOpacity>
          </EditButtonsContainer>
        )}
      </Header>

      <Article>
        <ArticleDateContainer>
          <ArticleDate>{post.createdAt}</ArticleDate>
          <ArticleReadTime>{post.readTime} min Read</ArticleReadTime>
        </ArticleDateContainer>  
        {!isEditing ? (
          <>
            <ArticleTitle>{post.postTitle}</ArticleTitle> 
            <ArticleContent>{post.postContent}</ArticleContent> 
          </>
        ) : (
          <>
            <InputComponent
              value={editedArticleTitle}
              onChangeText={(e) => setEditedArticlesTitle(e)}
              multiline
              inputTextLabel={"Edit Article's Title"}
              />
            <InputComponent
              value={editedArticleContent}
              onChangeText={(e) => setEditedArticlesContent(e)}
              multiline
              isContentInput
              inputTextLabel={"Edit Article's Content"}
              />
              <ButtonComponent 
                enabled
                onPress={updateArticle}
                >
                  Update Article
                </ButtonComponent>
          </>
        )}
      </Article>

    </Container>
  );
}

export default PostPage;
