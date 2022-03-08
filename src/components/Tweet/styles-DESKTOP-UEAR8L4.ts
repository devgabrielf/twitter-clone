import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

import { Chat, Retweet, Favorite } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  cursor: pointer;

  padding: 14px 16px 4px;

  border-bottom: 0.5px solid var(--outline);

  @media (min-width: 500px) {
    border-bottom: 1px solid var(--outline);
  }

  max-width: 100%;

  &:hover {
    background: ${() => darken(0.6, 'rgba(239, 243, 244, 0.1)')};
  }
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const RetweetedIcon = styled(Retweet)`
  height: 16px;
  width: 16px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  height: 49px;
  width: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span, time {
    color: var(--gray);
  }

  > strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  height: 2px;
  width: 2px;
  border-radius: 50%;
  background: var(--gray);
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-top: 4px;
`;

export const Image = styled.div`
  height: min(285px, max(175px, 41vw));
  width: 100%;
  margin-top: 12px;

  background: var(--outline);
  border-radius: 14px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  margin: 4px auto 0;

  @media (min-width: 500px) {
    width: 63%;
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  height: 35px;

  font-size: 13px;
  color: var(--gray);

  > div {
    height: 35px;
    width: 35px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:nth-child(1) {
    > div > svg path, > span {
      color: var(--gray);
    }

    &:hover {
      > div > svg path, span {
        color: var(--twitter);
      }

      > div {
        background: ${transparentize(0.9, '#33A1F2')};
      }
    }
  }

  &:nth-child(2) {
    > div > svg path, > span {
      color: var(--retweet);
    }

    &:hover {
      > div {
        background: ${transparentize(0.9, '#00C06B')};
      }
    }
  }

  &:nth-child(3) {
    > div > svg path, > span {
      color: var(--like);
    }

    &:hover {
      > div {
        background: ${transparentize(0.9, '#E8265E')};
      }
    }
  }
`;

export const IconBox = styled.div`
`;

const iconCSS = css`
  height: 24px;
  width: 24px;

`;

export const CommentIcon = styled(Chat)`${iconCSS}`;

export const RetweetIcon = styled(Retweet)`${iconCSS}`;

export const LikeIcon = styled(Favorite)`${iconCSS}`;

