import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { IArticleData } from '../../pages/dashboard';

import { 
    Container, 
    Header, 
    HeaderTitle, 
    MainList,
    ArticleContainer,
    ArticleInfoContainer,
    ArticleTitle,
    ArticleTimeContainer,
    ArticleDate,
    ArticleReadTime,
  } from './styles';

  interface PostListProps {
    posts: IArticleData[];
  }

const PostsList: React.FC<PostListProps> = ({posts}) => {
  const { navigate } = useNavigation()

  function handleOpenPost(post: IArticleData) {
    navigate('PostPage', post)
  }
  
  return (
    <Container>
      <Header>
        <HeaderTitle>More Articles</HeaderTitle>
      </Header>
      <MainList 
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ArticleContainer onPress={() => handleOpenPost(item)}>
            <ArticleInfoContainer>
              <ArticleTitle>{item.postTitle}</ArticleTitle>
            </ArticleInfoContainer>

              <ArticleTimeContainer>
                <ArticleDate>{item.createdAt}</ArticleDate>
                <ArticleReadTime>{item.readTime}</ArticleReadTime>
              </ArticleTimeContainer>

          </ArticleContainer>
        )}
      />
    </Container>
  );
}

export default PostsList;
