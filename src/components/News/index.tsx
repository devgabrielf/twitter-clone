import { Container } from './styles';

interface NewsProps {
  title: string;
  context: string;
  tweets?: number;
}

export function News({ title, context, tweets }: NewsProps) {
  return (
    <Container>
      <span>{context}</span>
      <strong>{title}</strong>
      {tweets && <span>{tweets} Tweets</span>}
    </Container>
  );
}
