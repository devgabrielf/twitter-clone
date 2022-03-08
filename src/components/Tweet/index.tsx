import {
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  Image,
  Icons,
  Status,
  IconBox,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

export function Tweet() {
  return (
    <Container>
      <Retweeted>
        <RetweetedIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Gabriel Ferreira</strong>
            <span>@gabrielf</span>
            <Dot />
            <time>03 de mar</time>
          </Header>

          <Description>
            Desenvolvendo mais uma aplicação utilizando React 🚀
          </Description>

          <Image />

          <Icons>
            <Status>
              <IconBox>
                <CommentIcon />
              </IconBox>

              <span>8</span>
            </Status>
            <Status>
              <IconBox>
                <RetweetIcon />
              </IconBox>

              <span>4</span>
            </Status>
            <Status>
              <IconBox>
                <LikeIcon />
              </IconBox>

              <span>26</span>
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}
