import React from "react";
import styled from "styled-components";

const HeaderImg = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;
const InstructionImg = styled.img`
  width: 33%;
  height: 350px;
  object-fit: cover;
`;

const InstructionDiv = styled.div`
  display: flex;
  width: 95%;
  height: 33%;
  justify-content: space-between;
  border: 5px solid ${({ theme }) => theme.colors.teal};
  padding: 1%;
  margin: 1%;
  p {
    padding: 2%;
  }
`;

export default function LandingPage() {


  return (
    <div>
      <HeaderImg
        alt="A picture of the Hollywood Sign"
        src="https://images.pexels.com/photos/2671089/pexels-photo-2671089.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
      <br />
      <p>
        Welcome to your favorite place! Schneider Social is a community of
        people who love to create aloof and unique nicknames for the
        controversial American television producer and screenwriter, Dan
        Schneider. We do not take any responsibility for the nicknames you
        create. Login or sign up to create some of your own!
      </p>
      <br />
      <InstructionDiv>
        <InstructionImg
          alt="You, as you fill out the signup form"
          src="https://images.pexels.com/photos/955389/pexels-photo-955389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <p>
          If this is your first time around, you can get started by clicking the
          "Signup" button at the top of the page. It will ask you to create a
          password as well as a unique username and a valid email. Once you have
          created an account, it will bring you back to this home page.
        </p>
      </InstructionDiv>
      <InstructionDiv>
        <p>
          If you would like to create some nicknames, then know that anything
          goes so long as it is unique and has "Dan" or "Schneider" in it. You
          may also like your favorite nicknames and have your nicknames be liked
          by others.
        </p>
        <InstructionImg
          alt="A woman writing some fire nicknames in her notebook"
          src="https://images.pexels.com/photos/7256738/pexels-photo-7256738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </InstructionDiv>
      <InstructionDiv>
        <InstructionImg src="https://images.pexels.com/photos/5684562/pexels-photo-5684562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <p>
          See some nicknames you like? We've got a something for that! A simple
          click of the like button will allow the creators to know how the
          community enjoys their creative masterpieces of the mind.
        </p>
      </InstructionDiv>
      <h1>Have Fun Creating Some Names!</h1>
    </div>
  );
}
