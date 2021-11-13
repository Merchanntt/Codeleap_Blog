import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

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

const TodayPost: React.FC<RectButtonProps> = ({...rest}) => {
  return (
    <Container {...rest}>
      <TodayPostTitle>Today's Article</TodayPostTitle>
      <PostContainer>
        <PostTitle>My First Post</PostTitle>
        <PostSummary>Caso você solicite o serviço até às 14h30, o dinheiro estará na sua conta, no mesmo dia. Depois deste horário, você terá o dinheiro em até 1 dia útil, sujeito à análise.</PostSummary>
        <TimeContainer>
          <PostDate>10/11/2021</PostDate>
          <PostTimeToRead>3 min read</PostTimeToRead>
        </TimeContainer>
      </PostContainer>
    </Container>
  );
}

export default TodayPost;
