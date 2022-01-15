// Vendors
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  height: 7vh;
  background-color: var(--main-nav-color);
  //border-bottom: 2px solid var(--border-color);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
`;

// wil be replaced by a logo
const LogoTile = styled.span`
  font-weight: bold;
`;
const StyledLogoNavLink = styled(NavLink)`
  color: var(--main-font-color);
  text-decoration: none;
`;

const LinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  margin: 15px;
  border-radius: 5px;
  color: var(--main-font-color);
  text-decoration: none;

  &.active {
    color: var(--active-text-color);
  }

`;

const CartContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MooneyBalance = styled.span`
  font-weight: bold;
`;

const Navbar = (): JSX.Element => {
  const messsage = 'Navbar';
  return (
    <MainContainer>
      <LogoContainer>
        <StyledLogoNavLink to="Home">
          <LogoTile>LooterShop</LogoTile>
        </StyledLogoNavLink>
      </LogoContainer>
      <LinksContainer>
        <StyledNavLink to="Home">Home</StyledNavLink>
        <StyledNavLink to="Favorites">Favorites</StyledNavLink>
        <StyledNavLink to="Store">Shop</StyledNavLink>
        <StyledNavLink to="SellYourLoot">Sell Your Loot</StyledNavLink>
        <StyledNavLink to="EsportsNews">E-Sports News</StyledNavLink>
      </LinksContainer>
      <CartContainer>
        <MooneyBalance>cart Balance: $ 245.5</MooneyBalance>
      </CartContainer>
    </MainContainer>
  );
};

export default Navbar;
