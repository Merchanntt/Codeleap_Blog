import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { IArticleData } from '../../pages/dashboard';

import { 
    Container,
    TodayPostTitle,
    PostContainer,
    PostTitle,
    PostSummary,
    TimeContainer,
    PostDate,
    PostTimeToRead
  } from './styles';

  interface TodayPostProps extends RectButtonProps{
    article: IArticleData;
  }

const TodayPost: React.FC<TodayPostProps> = ({article, ...rest}) => {
  const {navigate} = useNavigation()

  function handleOpenPostPage(article: IArticleData) {
    navigate('PostPage', article)
  }

  return (
    <Container onPress={() => handleOpenPostPage(article)} {...rest}>
      <TodayPostTitle>Today's Article</TodayPostTitle>
      <PostContainer>
        <PostTitle>{article.postTitle}</PostTitle>
        <PostSummary 
          numberOfLines={4} 
          ellipsizeMode='tail'
        >
          {article.postContent}
        </PostSummary>
        <TimeContainer>
          <PostDate>{article.createdAt}</PostDate>
          <PostTimeToRead>{article.readTime} min read</PostTimeToRead>
        </TimeContainer>
      </PostContainer>
    </Container>
  );
}

export default TodayPost;
