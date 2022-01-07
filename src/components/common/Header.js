import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Form/Button";
import NavLink from "./NavLink";
import { useNavigate } from "react-router";

const StyledHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.colors.teal};
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-style: italic;
  h1 {
    ${({ theme }) => theme.setFont(3)}
    font-weight: 600;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    top: 0;
    position: fixed;
    h1 {
      ${({ theme }) => theme.setFont(2)}
    }
    nav {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
    }
  }
  @media (max-width:380px) {
    position: static
  }
`;

function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
    window.location.reload();
  };

  return (
    <StyledHeader>
      <Link to="/">
        <Button id="TitleHeader">
          <h1>SCHNEIDER SOCIAL</h1>
        </Button>
      </Link>
      <nav>
        {token ? (
          <>
            <NavLink to="page/ranked">Ranked Nicknames</NavLink>
            <NavLink to="page/recent">Recent Nicknames</NavLink>
            <NavLink to="create">Add Nickname</NavLink>
            <NavLink to="user">My Nicknames</NavLink>
            <NavLink to="frontend" onClick={logout}>Logout</NavLink>
          </>
        ) : (
          <>
            <NavLink to="signup">Signup</NavLink>
            <NavLink to="login">Login</NavLink>
          </>
        )}
      </nav>
    </StyledHeader>
  );
}

export default Header;
