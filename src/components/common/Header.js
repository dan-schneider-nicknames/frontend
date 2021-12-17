import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";
import Button from "./Form/Button";

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

function Header(props) {
  const { token, setToken } = props;

  const logout = () => {
    setToken("");
    window.location.reload();
  };

  return (
    <StyledHeader>
      <Link to="/">
        <Button id="TitleHeader">
          <h1>DAN SCHNEIDER NICKNAMES</h1>
        </Button>
      </Link>
      <nav>
        {token ? (
          <>
            <div class="button" id="button-6">
              <div id="spin"></div>
              <Link to="/">All Nicknames</Link>
            </div>
            <div class="button" id="button-6">
              <div id="spin"></div>
              <Link to="/create">Add Nickname</Link>
            </div>
            <div class="button" id="button-6">
              <div id="spin"></div>
              <a href="/" onClick={logout}>Logout</a>
            </div>
          </>
        ) : (
          <>
            <div class="button" id="button-6">
              <div id="spin"></div>
              <Link to="/signup">Signup</Link>
            </div>
            <div class="button" id="button-6">
              <div id="spin"></div>
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </nav>
    </StyledHeader>
  );
}

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps, { setToken })(Header);
