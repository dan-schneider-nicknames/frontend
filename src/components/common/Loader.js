import React from 'react'
import styled, { keyframes } from 'styled-components'

const animation = keyframes`
    0% {opacity: 0}
    50% {opacity: 1}
    100% {opacity: 0}
`
const StyledLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        border-radius: 100%;
        margin: 2rem;
        width: 30px;
        height: 30px;
        background-color: ${props => props.theme.primeColor};
        animation: ${animation} 1s linear -.9s infinite;
        &:nth-child(2) {animation-delay: -.6s;}
        &:nth-child(3) {animation-delay: -.3s;}
    }
`
export default function Loader() {
    return (
        <StyledLoader>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
        </StyledLoader>
    )
}