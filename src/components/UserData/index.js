import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";


const UserData = ({data}) => {
  return (
    <Container>
      <UserImg> <Image src={data.avatar_url}/></UserImg>
      <UserInfo data={data} />
    </Container>
  );
};

export default UserData;

const Container = styled.div`
  background-color: var(--card);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem 2rem 2rem;
  margin-top: 2rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
`;

const UserImg = styled.div`
margin-right: 3rem;
display: flex;
justify-content: center;

`
const Image = styled.img `
border-radius: 50%;
height: 150px;
width: 150px;
margin: 0;
@media screen and (max-width: 750px) {
    scale: 0.7;
    position: absolute;
   transform: translate(3rem, -5rem);
}
`