import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 80px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  margin-bottom: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows.first};

  > nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: ${p => p.theme.space[2]}px 0;

  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.white};
  }

  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
  }
`;
