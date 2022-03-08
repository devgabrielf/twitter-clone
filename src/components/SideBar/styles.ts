import styled from 'styled-components';

import { Search } from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  max-height: 57px;
  width: min(399px, 100%);

  padding: 10px 24px;

  background: var(--primary);

  position: fixed;
  top: 0;
  z-index: 10;
`;

export const SearchInput = styled.input`
  height: 42px;
  width: 100%;

  background: var(--search);
  font-size: 14px;

  padding: 0 10px 0 52px;
  border-radius: 19.5px;

  transition: 0s;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 10;

    transition: 0s;
  }

  outline: 0;

  &:focus {
    background: var(--primary);
    border: 1px solid var(--twitter);

    ~ svg {
      fill: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  height: 27px;
  width: 27px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 57px 24px 200px;
  margin-top: 3px;

  > div {
    margin-top: 15px;
  }
`;
