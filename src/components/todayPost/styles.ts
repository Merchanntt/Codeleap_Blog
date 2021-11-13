import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  margin-top: 30px;
  border-radius: 10px;
  background-color: #232129;
  padding: 8px;
`;

export const TodayPostTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
`;

export const PostContainer = styled.View`
  padding: 8px;
`;

export const PostTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
`;

export const PostSummary = styled.Text`
  color: #ffffff;
  font-size: 14px;
  margin-top: 14px;
`;

export const TimeContainer = styled.View`
  margin-top: 8px;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 8px;
`;

export const PostDate = styled.Text`
  color: #a8a8b3;
  font-size: 12px;
`;

export const PostTimeToRead = styled.Text`
  color: #a8a8b3;
  font-size: 12px;
`;
