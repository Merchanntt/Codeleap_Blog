import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { 
    Container, 
    Header,
    Article,
    ArticleDateContainer,
    ArticleDate,
    ArticleReadTime,
    ArticleTitle,
    ArticleContent,
  } from './styles';

const PostPage: React.FC = () => {
  return (
    <Container>
      <StatusBar style='light'/>
      <Header>
      </Header>

      <Article>
        <ArticleDateContainer>
          <ArticleDate>November 11, 2021</ArticleDate>
          <ArticleReadTime>3 min Read</ArticleReadTime>
        </ArticleDateContainer>  

        <ArticleTitle>My First Post</ArticleTitle> 
        <ArticleContent>Caso você solicite o serviço até às 14h30, o dinheiro estará na sua conta, no mesmo dia. Depois deste horário, você terá o dinheiro em até 1 dia útil, sujeito à análise.</ArticleContent> 
      </Article>

    </Container>
  );
}

export default PostPage;
