import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../img/logo.png';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;
  
  const Wrapper = styled.div`
  width: 1170px;
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 56px;
`;

const Go = styled(Link)`
  text-decoration: none;
  outline: none;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuLink = styled(NavLink)`
  color: var(--main-color);
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-left: 2rem;

  &:hover {
    color: var(--pannor-color);
  }

  &.active {
    color: var(--pannor-color);
  }
`;

function Header() {
  return (
    <Container>
      <Wrapper>
        <Go to="/">
          <Logo src={logo} alt="Pannor Group"/>
        </Go>
        <MenuContainer>
          <MenuLink to="/about">
            About us
          </MenuLink>
          <MenuLink to="/innovation">
            Innovation
          </MenuLink>
          <MenuLink to="/global-presence">
            Global presence
          </MenuLink>
          <MenuLink to="/career">
            Career
          </MenuLink>
          <MenuLink to="/media">
            Media
          </MenuLink>
        </MenuContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;
