import styled from 'styled-components';

interface ButtonProps {
  outlined?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: ${props => props.outlined ? 'transparent' : 'var(--twitter)'};
  color: ${props => props.outlined ? 'var(--gray-light)' : 'var(--white)'};
  border: ${props => props.outlined ? '1px solid var(--outline)' : 'none'};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: ${props => props.outlined ? 'var(--twitter-hover)' : 'var(--twitter-dark-hover)'}
  }
`;
