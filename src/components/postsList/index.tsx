import React from 'react';

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

interface ArticleData {
  id: number;
  name: string;
  createdDate: string;
  timeToRead: string;
};

const PostsList: React.FC = () => {
  const posts: ArticleData[] = [
    {
      id: 1,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 2,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 3,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 4,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 5,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 6,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 7,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 8,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 9,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    },
    {
      id: 10,
      name: 'Make a Successful instagram',
      createdDate: 'November 11, 2021',
      timeToRead: '3 min Read'
    }
  ]

  return (
    <Container>
      <Header>
        <HeaderTitle>More Articles</HeaderTitle>
      </Header>
      <MainList 
        data={posts}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ArticleContainer>
            <ArticleInfoContainer>
              <ArticleTitle>{item.name}</ArticleTitle>
            </ArticleInfoContainer>

              <ArticleTimeContainer>
                <ArticleDate>{item.createdDate}</ArticleDate>
                <ArticleReadTime>{item.timeToRead}</ArticleReadTime>
              </ArticleTimeContainer>

          </ArticleContainer>
        )}
      />
    </Container>
  );
}

export default PostsList;
