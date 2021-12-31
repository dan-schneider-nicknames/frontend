import React from "react";
import Button from "./Form/Button";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://github.com/dan-schneider-nicknames" target="_blank">
        <Button>Wanna check out the code?</Button>
      </a>
    </StyledFooter>
  );
}
