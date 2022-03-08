import StickyBox from 'react-sticky-box';

import { FollowSuggestions } from '../FollowSuggestions';
import { List } from '../List';
import { News } from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

export function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox style={{transition: '0s'}}>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions
                name="Luiza Oliveira"
                username="@luizaolv"
              />,
              <FollowSuggestions
                name="Felipe Dutra"
                username="@felipedutra"
              />,
              <FollowSuggestions
                name="Julia Fernandes"
                username="@jufernandes"
              />,
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
              <News
                title="ReactJS"
                context="Tecnologia · Assuntos do Momento"
                tweets={7.558}
              />,
              <News
                title="JavaScript"
                context="Programação · Assuntos do Momento"
                tweets={21.814}
              />,
              <News
                title="Desenvolvimento de software"
                context="Assuntos do Momento em Brasil"
              />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}
