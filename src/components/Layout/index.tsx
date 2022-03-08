import { Container, Wrapper } from './styles';

import { MenuBar } from '../MenuBar'
import { Main } from '../Main';
import { SideBar } from '../SideBar';

export function Layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
}
