import React from 'react';
import { TextInputProps } from 'react-native';

import { InputContainer, TextInput, InputLabel } from './styles';

interface InputProps extends TextInputProps {
  inputTextLabel: string;
}

export const InputComponent: React.FC<InputProps> = ({inputTextLabel, ...rest}) => {
  return (
    <InputContainer>
      <InputLabel>{inputTextLabel}</InputLabel>
      <TextInput {...rest}/> 
    </InputContainer>
  );
}

