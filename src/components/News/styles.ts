import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: var(--gray);
    font-size: 13px;

  }

  > strong {
    font-size: 15px;
    padding: 4px 0;
  }
`;
