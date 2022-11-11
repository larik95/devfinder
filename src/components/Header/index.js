import React from "react";
import styled from "styled-components";

const Header = ({ toggleTheme }) => {
  return (
    
      <Container>
        <Text>devfinder</Text>
        <Button className="btn" onClick={toggleTheme}></Button>
      </Container>
    
  );
};

export default Header;


const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 2rem;
`;

const Text = styled.h1 `
color: var(--txtBolded);
margin: 0;
`
const Button = styled.button`
  background-color: transparent;
  background-image: var(--img-btn);
  border: none;
  width: 26px;
  height: 26px;
  margin: 0;
`;

