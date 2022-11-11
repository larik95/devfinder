import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";
import UserData from "../UserData";

const Search = () => {
  const [username, setUsername] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [data, setData] = useState({});
  const [inputUser] = useState("octocat");
  
  const handleChange = event => {
    setUsername(event.target.value);
  };

  
  const handleClick = () => {
    fetchUser(username);
  }

  async function fetchUser (username) {
    const profile = await fetch(`https://api.github.com/users/${username}`);
    const dataJson = await profile.json();
    //console.log(data)
   
    if(profile.status != 200) {
      setNotFound(true);
      return
    } else setNotFound(false);

    if(dataJson) {
      setData(dataJson);
    }
    

  }
  useEffect(()=> {
    fetchUser(inputUser)
  },[inputUser])

  return (
    <>
    <Container>
      <SearchContent>
        <SearchIcon
          style={{
            margin: 0,
          }}
          />
        <Input type="search" 
        name='github_user'
        placeholder="Search GitHub username..." 
        onChange={handleChange}
        value={username}
        /> 
      </SearchContent>
      {notFound ? <Warn> User not found</Warn> : null}
      <div>
        <Button
        type="submit"
        onClick={handleClick}
        >
          Search
        </Button>
      </div>
    </Container>
    <UserData data={data}/>
    </>
  );
};

export default Search;

const Container = styled.div`
  background-color: var(--card);
  border-radius: 10px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 1rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  
`;
const SearchContent = styled.div`
  display: flex;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  font-family: var(--font-f);
  width: 400px;
  margin-left: 10px;
  color: var(--txtNorm);
  font-size: 16px;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 750px) {
    width: 200px;
  }

`;
const Button = styled.button`
  background-color: #006add;
  border:none;
  border-radius: 10px;
  height: 3rem;
  width: 6rem;
  color: #fff;
  font-size: 16px;
  font-family: var(--font-f);
`;

const Warn = styled.p`
    font-weight: bold;
    font-size: 1rem;
    color: #f74646;
`