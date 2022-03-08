import styled, { css } from 'styled-components';

import { transparentize } from 'polished';

import {
  Twitter,
  Home,
  Search,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  FeatherAlt
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const LogoIcon = styled(Twitter)`
  height: 34px;
  width: 34px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  border-radius: 27px;
  cursor: pointer;

  padding: 12px;
  outline: 0;

  &:first-child:hover {
    background: ${transparentize(0.9, '#33A1F2')};
  }

  &:not(:nth-child(-n+2)) {
    margin-top: 8px;
  }

  &:hover {
    background: var(--twitter-hover);
  }

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;
      font-size: 20px;
    }

    &.active {
      > span {
        font-weight: bold;
      }
    }
  }

  & + button:last-child {
    margin-top: 33px;

    height: 50px;
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    > span {
      display: none;
    }

    @media (min-width: 1280px) {
      height: unset;
      width: 100%;

      > span {
        display: inline;
      }

      > svg {
        display: none;
      }
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  height: 30px;
  width: 30px;
`;

export const HomeIcon = styled(Home)`${iconCSS}`;

export const SearchIcon = styled(Search)`${iconCSS}`;

export const BellIcon = styled(Notifications)`${iconCSS}`;

export const EmailIcon = styled(Email)`${iconCSS}`;

export const FavoriteIcon = styled(FavoriteBorder)`${iconCSS}`;

export const ProfileIcon = styled(Person)`${iconCSS}`;

export const FeatherIcon = styled(FeatherAlt)`
  flex-shrink: 0;

  height: 22px;
  width: 22px;
`;

export const BotSide  = styled.button`
  margin-top: 20px;
  padding: 12px;
  border-radius: 31.5px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
      background: var(--twitter-hover);
    }
`;

export const Avatar = styled.div`
  height: 39px;
  width: 39px;

  flex-shrink: 0;

  border-radius: 50%;
  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }

    > strong, span {
      max-width: 120px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`;

export const Dots = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: inline-block;
    font-size: 24px;

    margin-left: 30px;
  }
`;
