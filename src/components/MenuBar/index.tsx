import { Button } from '../Button';

import {
  Container,
  TopSide,
  LogoIcon,
  MenuButton,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  FeatherIcon,
  BotSide,
  Avatar,
  ProfileData,
  Dots
} from './styles';

export function MenuBar() {
  return (
    <Container>
      <TopSide>
        <MenuButton>
          <LogoIcon />
        </MenuButton>

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <SearchIcon />
          <span>Explorar</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <FeatherIcon />
          <span>Tweetar</span>
        </Button>
      </TopSide>

      <BotSide>
        <Avatar />

        <ProfileData>
          <strong>Gabriel Ferreira</strong>
          <span>@gabrielf</span>
        </ProfileData>

        <Dots>⋅⋅⋅</Dots>
      </BotSide>
    </Container>
  );
}
