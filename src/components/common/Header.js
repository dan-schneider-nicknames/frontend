import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setToken } from "../../state/actions";

const StyledHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.colors.teal};
  background-color: ${({ theme }) => theme.colors.purple};
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  font-style: italic;
  a, button {
      font-weight: 400;
      padding: 1rem;
      ${({ theme }) => theme.setFont(2)}
      color: ${({ theme }) => theme.colors.teal};
      border: none;
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.purple};
      cursor: pointer;
    }
    h1 {
      ${({ theme }) => theme.setFont(4)}
      font-weight: 600;
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
        <Link to="/">
            <h1>
                Dan Schneiders Nicknames
            </h1>
        </Link> 
        <nav>
            {token ? (
            <>
                <Link to="/">All Nicknames</Link>
                <Link to="/create">Add Nickname</Link>
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
