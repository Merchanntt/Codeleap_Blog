import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  margin-top: 30px;
  height: 350px;
  border-top-width: 1px;
  border-top-color: #e1e1e6;
`;

export const Header = styled.View`
  margin-top: 8px;
  padding-bottom: 4px;
`;

export const HeaderTitle = styled.Text`
  color: #232129;
  font-weight: bold;
  font-size: 18px;
`;

export const MainList = styled.FlatList`
  padding: 0 8px;
`;

export const ArticleContainer = styled(RectButton)`
  border-bottom-width: 1px;
  border-bottom-color: #e1e1e6;
`;

export const ArticleInfoContainer = styled.View`
  margin-top: 12px;
`;

export const ArticleTitle = styled.Text`
  color: #232129;
  font-weight: bold;
  font-size: 14px;
`;

export const ArticleTimeContainer = styled.View`
  margin-top: 4px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 8px 8px ;
`;

export const ArticleDate = styled.Text`
  color: #a8a8b3;
  font-size: 12px;
`;

export const ArticleReadTime = styled.Text`
  color: #a8a8b3;
  font-size: 12px;
`;
