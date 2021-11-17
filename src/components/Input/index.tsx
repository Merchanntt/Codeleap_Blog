import React from 'react';
import { TextInputProps } from 'react-native';

import { InputContainer, TextInput, InputLabel } from './styles';

interface InputProps extends TextInputProps {
  inputTextLabel: string;
  isContentInput?: boolean;
}

export const InputComponent: React.FC<InputProps> = ({inputTextLabel, isContentInput, ...rest}) => {
  return (
    <InputContainer isContentInput={isContentInput}>
      <InputLabel>{inputTextLabel}</InputLabel>
      <TextInput {...rest}/> 
    </InputContainer>
  );
}

