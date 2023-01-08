import { Header, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/create">Add Contact</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
      </nav>
    </Header>
  );
};
