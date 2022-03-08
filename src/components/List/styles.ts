import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: var(--secondary);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  & + div {
    cursor: pointer;

    &:hover {
      background: ${transparentize(0.97, '#FFF')};

      &:last-child {
        border-radius: 0 0 14px 14px;
      }
    }
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding: 17px;

    > span {
      color: var(--twitter-dark-hover);
    }
  }
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 800;
`;
