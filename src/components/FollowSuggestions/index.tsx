import {
  Container,
  Avatar,
  Info,
  FollowButton,
} from './styles';

interface FollowSuggestionsProps {
  name: string;
  username: string;
}

export function FollowSuggestions({ name, username }: FollowSuggestionsProps) {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{username}</span>
        </Info>
      </div>
        <FollowButton outlined>Seguir</FollowButton>
    </Container>
  );
}
