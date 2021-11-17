import styled from 'styled-components/native'

interface InputContainerProps {
  isContentInput: boolean
}

export const InputContainer = styled.View<InputContainerProps>`
  width: 100%;
  height: ${props => props.isContentInput ? 300 : 68}px;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;
`;

export const InputLabel = styled.Text`
  color: #232129;
  font-size: 12px;
  margin-top: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #232129;
  font-size: 16px;
`;
