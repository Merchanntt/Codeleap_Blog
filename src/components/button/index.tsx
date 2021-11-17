import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, ButtonText  } from './styles';

interface ButtonProps extends RectButtonProps {
  children: string | React.ReactElement;
  isFilled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({isFilled, children, ...rest}) => {
  return (
      <Container enabled={isFilled} {...rest}>
        <ButtonText>{children}</ButtonText>
      </Container>
  );
}

export default ButtonComponent;
