import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";

const StyledHeader = styled.header`
  width: 100%;
  color: ${(props) => props.theme.colors.teal};
  background-color: ${(props) => props.theme.colors.purple};
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  font-weight: 600;
  font-style: italic;
  ${({ theme }) => theme.setFont(4)}
  a {
    padding: 1rem;
    ${({ theme }) => theme.setFont(3)}
    color: ${(props) => props.theme.colors.teal};
    
  }
`;

function Header(props) {
  const { token, setToken } = props;
  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    navigate("/");
  };

  return (
    <StyledHeader>
      <h1>Dan Schneiders Nicknames</h1>
      <nav>
        {token ? (
          <>
            <Link to="/">All Nicknames</Link>
            <Link to="/create">Create Nickname</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
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
