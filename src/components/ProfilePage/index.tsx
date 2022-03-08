import { Feed } from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CalendarIcon,
  Followage,
  EditButton,
} from './styles';

export function ProfilePage() {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Gabriel Ferreira</h1>
        <h2>@gabrielf</h2>

        <p>Front-end developer</p>

        <ul>
          <li>
            <LocationIcon />
            Betim, MG
          </li>
          <li>
            <CalendarIcon />
            Entrou em janeiro de 2019
          </li>
        </ul>

        <Followage>
          <span>
            <strong>195</strong> Seguindo
          </span>
          <span>
            <strong>124</strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}
