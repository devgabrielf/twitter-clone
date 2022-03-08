import styled from 'styled-components';

interface TabProps {
  active: boolean;
}

export const Container = styled.div`
  cursor: pointer;

  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  &:hover {
    background: var(--twitter-hover);
  }
`;

export const TabContent = styled.div<TabProps>`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  > span {
    color: ${props => props.active ? 'var(--white)' : 'var(--gray)'};
    font-size: 15px;
    font-weight: ${props => props.active ? '700' : '500'};
  }
`;

export const BottomBar = styled.div`
  height: 4px;
  width: calc(100% + 6px);
  background: var(--twitter);
  border-radius: 2px;

  position: absolute;
  bottom: 0;
`;
