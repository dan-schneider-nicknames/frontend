import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NewLink = styled(Link)`
font-weight: 400;
    padding: 1rem;
    ${({ theme }) => theme.setFont(2)}
    color: ${({ theme }) => theme.colors.slime};
    border: none;
    text-decoration: none;
    background-color: inherit;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
    &:focus {
        border: none
        text-decoration: underline;
    }
`

export default function LoginForgot() {
    return <NewLink to="/reset">Forgot Password?</NewLink>
}