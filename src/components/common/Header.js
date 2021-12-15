import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";
import Button from "./Button"

const StyledHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.colors.teal};
  background-color: ${({ theme }) => theme.colors.purple};
  display: flex;
  justify-content: space-around;
  align-items: baseline;
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
    window.location.reload()
  };

  return (
    <StyledHeader>
        <Link to="/">
            <Button>
              <h1>
                Dan Schneiders Nicknames
              </h1>
            </Button>
        </Link> 
        <nav>
            {token ? (
            <>
                <Link to="/">
                  <Button>
                    All Nicknames
                  </Button>
                </Link>
                <Link to="/create">
                  <Button>
                    Add Nickname
                  </Button>
                </Link>
                <Button onClick={logout}>
                  Logout
                </Button>
            </>
            ) : (
            <>
                <Link to="/signup">
                  <Button>
                    Signup
                  </Button>
                </Link>
                <Link to="/login">
                  <Button>
                    Login
                  </Button>
                </Link>
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
