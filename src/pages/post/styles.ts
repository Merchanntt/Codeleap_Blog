import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background-color: #232129;
  padding: 30px;
  width: 100%;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const EditButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Article = styled.ScrollView`
  padding: 30px;
`;

export const ArticleDateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8px;
`;

export const ArticleDate = styled.Text`
  color: #a8a8b3;
  font-size: 12px;
`;

export const ArticleReadTime = styled.Text`
  color: #a8a8b3;
  font-size: 12px;
`;

export const ArticleTitle = styled.Text`
  color: #232129;
  font-weight: bold;
  font-size: 24px;
  margin-top: 16px;
`;

export const ArticleContent = styled.Text`
  color: #232129;
  font-size: 14px;
  margin-top: 16px;
`;
