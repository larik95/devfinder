import React from 'react'
import styled from "styled-components";
import Links from './Links';
import WorkDatasContainer from './WorkDatas';
import dayjs from "dayjs"

const UserInfo = ({data}) => {

    function joinedDate(ISO) {
        const date = dayjs(ISO);
        const formateDate = `Joined ${date.format("DD MM YYYY")}`
    
        return formateDate;
    }


  return (
    <UserDatas>
        <UserContent>
          <UserName>
            <Name>{data.name}</Name>
            <Joined>{joinedDate(data.created_at)}</Joined>
          </UserName>
          <div>
            <Text>@{data.login}</Text>
            <Bio>{data.bio || "This user has no bio"}</Bio>
          </div>
        </UserContent>
        <WorkDatasContainer  data={data}/>
        <Links data={data} />
      </UserDatas>
  )
}

export default UserInfo

const UserDatas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
`;

const UserContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Name = styled.p`
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-size: 25px;
  @media screen and (max-width: 750px) {
    transform: translate(2rem, -1.5rem);
    font-size: 21px;
  }
`;
const UserName = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  margin-bottom: 10px;
  color: #006add;
  letter-spacing: 1px;
  @media screen and (max-width: 750px) {
    transform: translate(2rem, -3.5rem);
  }

`;
const Joined = styled.span `
font-size:14px;
@media screen and (max-width: 750px) {
    transform: translate(1.7rem, 0rem);
}
`

const Bio = styled.p `
@media screen and (max-width: 750px) {
    transform: translate(-5rem, 1rem);
}
`
