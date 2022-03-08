import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.div`
  height: 53px;
  overflow-x: scroll;
  white-space: nowrap;

  border-bottom: 0.5px solid var(--outline);

  @media (min-width: 500px) {
    border-bottom: 1px solid var(--outline);
  }

  display: flex;

  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

export const Dot = styled.div`
  height: 4px;
  width: 4px;

  background: var(--outline);
  border-radius: 50%;

  align-self: center;
  margin: 32px 0 80px;

  @media (min-width: 500px) {
    margin: 32px 0;
  }
`;
