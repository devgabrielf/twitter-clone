import styled, { css } from 'styled-components';

import { LocationOn, CalendarToday } from '../../styles/Icons';
import { Button } from '../Button';

export const Container = styled.div`
  max-width: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  height: min(33vw, 199px);
  width: 100%;

  cursor: pointer;

  background: var(--twitter);

  position: relative;

  flex-shrink: 0;
`;

export const Avatar = styled.div`
  height: max(45px, min(135px, 22vw));
  width: max(45px, min(135px, 22vw));

  cursor: pointer;

  border: 2px solid var(--primary);
  background: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: calc(max(45px, min(135px, 22vw)) / -2);
  left: 15px;
  z-index: 10;

  &:hover {
    filter: brightness(0.9);
  }

  @media (min-width: 500px) {
    border-width: 4px;
  }
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 16px), 67px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-size: 19px;
    font-weight: bold;
  }

  > h2 {
    font-size: 15px;
    font-weight: normal;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 11px;
  }

  > ul {
    list-style: none;
    margin: 10px 0;

    > li {
      font-size: 15px;
      color: var(--gray);

      display: flex;
      align-items: center;

      & + li {
        margin-top: 4px;
      }

      > svg {
        fill: var(--gray);
        margin-right: 5px;
      }
    }

    @media (min-width: 500px) {
      display: flex;
      align-items: center;

      > li + li {
        margin-top: 0;
        margin-left: 12px;
      }
    }
  }
`;

const iconCSS = css`
  height: 16px;
  width: 16px;
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;
export const CalendarIcon = styled(CalendarToday)`
  ${iconCSS}
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    cursor: pointer;

    &:hover {
    text-decoration: underline var(--white);
  }

    & + span {
      margin-left: 20px;
    }
  }
`;

export const EditButton = styled(Button)`
  font-size: 13px;

  position: absolute;
  top: 2vw;
  right: 12px;
  padding: 8px 16px;

  @media (min-width: 320px) {
    font-size: 15px;

    top: 10px;
    padding: 8px 19px;
  }
`;
