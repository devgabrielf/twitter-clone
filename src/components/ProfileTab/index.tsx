import { Container, BottomBar, TabContent } from './styles';

interface ProfileTabProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
}

export function ProfileTab({ href, active = false, children }: ProfileTabProps) {
  return (
    <Container href={href}>
      <TabContent active={active}>
        <span>{children}</span>

        {active && (
          <BottomBar />
        )}
      </TabContent>
    </Container>
  );
}
