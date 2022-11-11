import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApartmentIcon from "@mui/icons-material/Apartment";
import styled from "styled-components";

const Links = ({data}) => {
  return (
    <LinksContent>
      <div>
        <LinksText>
          <LocationOnIcon
            style={{
              marginRight: 10,
            }}
          />
         {data.location || "Not Avaiable"}
        </LinksText>
        <LinksText>
          <LinkIcon
            style={{
              marginRight: 10,
            }}
          />
          {data.blog  || "Not Avaiable"}
        </LinksText>
      </div>
      <LinksRight>
        <LinksText>
          <TwitterIcon
            style={{
              marginRight: 10,
            }}
          />
          {data.twitter_username  || "Not Avaiable"}
        </LinksText>
        <LinksText>
          <ApartmentIcon
            style={{
              marginRight: 10,
            }}
          />
          {data.company  || "Not Avaiable"}
        </LinksText>
      </LinksRight>
    </LinksContent>
  );
};

export default Links;

const LinksContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    transform: translateX(-5rem);
  }
`;
const LinksText = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const LinksRight = styled.div`
  margin-right: 3rem;
`;
