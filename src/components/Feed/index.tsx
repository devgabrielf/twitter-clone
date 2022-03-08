import { ProfileTab } from '../ProfileTab';
import { Tweet } from '../Tweet';

import {
  Container,
  NavBar,
  Tweets,
  Dot,
} from './styles';

export function Feed() {
  return (
    <Container>
      <NavBar>
        <ProfileTab href="/" active>Tweets</ProfileTab>
        <ProfileTab href="/">Tweets e respostas</ProfileTab>
        <ProfileTab href="/">Mídia</ProfileTab>
        <ProfileTab href="/">Curtidas</ProfileTab>
      </NavBar>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>

      <Dot />
    </Container>
  );
}
