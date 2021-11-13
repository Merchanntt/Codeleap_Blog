import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText  } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({children, ...rest}) => {
  return (
      <Container {...rest}>
        <ButtonText>{children}</ButtonText>
      </Container>
  );
}

export default ButtonComponent;
