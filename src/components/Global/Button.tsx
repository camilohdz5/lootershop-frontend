// Vendors
import React from 'react';
import styled from 'styled-components/macro';

const BaseButton = styled('button')<{ fontSize: string; color: string; background: string }>`
  background: ${({ background }) => (background ? `${background}` : 'var(--primary)')};
  border: none;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  color: ${({ color }) => (color ? `${color}` : 'var(--main-font-color)')};
  padding: 0.25em 1em;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : '16px')};
  font-weight: bold;
  cursor: pointer;
`;

const Button = ({
  fontSize, color, background, children, onClick,
}: any): JSX.Element => (
  <BaseButton fontSize={fontSize} color={color} background={background} onClick={onClick}>
    {children}
  </BaseButton>
);

export default Button;
