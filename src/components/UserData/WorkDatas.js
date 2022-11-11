import React from 'react'
import styled from "styled-components";


const WorkDatasContainer = ({data}) => {
  return (
    <WorkDatasContent>
    <WorkDatas>
      <Text>Repos</Text>
      <Title>{data.public_repos}</Title>
    </WorkDatas>
    <WorkDatas>
      <Text>Followers</Text>
      <Title>{data.followers}</Title>
    </WorkDatas>
    <WorkDatas>
      <Text>Following</Text>
      <Title>{data.following}</Title>
    </WorkDatas>
  </WorkDatasContent>
  )
}

export default WorkDatasContainer

const WorkDatasContent = styled.div`
  background-color: var(--bg);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 1.5rem 0;
  @media screen and (max-width: 750px) {
    padding: 1rem 1.5rem;
    width: 340px;
    transform: translateX(-5rem);
  }
`;
const WorkDatas = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 700;
  @media screen and (max-width: 750px){
    font-size: 18px;
  }
`;

const Text = styled.p `
@media screen and (max-width: 750px) {
    margin: 0;
    padding: 0;
}

`