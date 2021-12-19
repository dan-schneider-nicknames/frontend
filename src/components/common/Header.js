import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Form/Button";
import NavLink from "./NavLink";

const StyledHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.colors.teal};
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-style: italic;
  h1 {
    ${({ theme }) => theme.setFont(4)}
    font-weight: 600;
  }
`;

function Header() {
  const token = localStorage.getItem("token")
  const logout = () => {
    localStorage.removeItem("token")
    window.location.reload();
  };

  return (
    <StyledHeader>
      <Link to="/landing">
        <Button id="TitleHeader">
          <h1>DAN SCHNEIDER NICKNAMES</h1>
        </Button>
      </Link>
      <nav>
        {token ? (
          <>
            <NavLink to="/">All Nicknames</NavLink>
            <NavLink to="/create">Add Nickname</NavLink>
            <NavLink to="/landing" onClick={logout}>Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </nav>
    </StyledHeader>
  );
}

export default Header;
