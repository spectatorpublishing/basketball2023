import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavigationSec from "../components/Navigation";
import { device } from "../device";
import "../index.css";
import SmallArticle from "../components/SmallArticle";
import Heading from "./Heading";
import { render } from "react-dom";

import { mendata } from "../data/mendata";
import { womendata } from "../data/womendata";
import { sports_articles } from "../data/sports_articles";

const SectionWrap1 = styled.div`
  background: #A3C3D0;
  padding-left: 9%;
  padding-right: 9%;
  @media (max-width: 500px) {
    padding-left: 4%;
    padding-right: 4%;
  }
`;

const TwoColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const ArticlesWrap = styled.div`
  display: flex;
  margin-right: 2vh;
  flex-wrap: wrap;
  position: center;
`;

const GenderColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const GenderWrap = styled.div`
  display: flex;
  background-color:  #A3C3D0;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5vw;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 7vw;
  }
  
`;

const Filter = styled.div`
  
  text-transform: uppercase;
  font-weight: bold;
  padding: 1vh 5vh 1vh 0vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  @media (max-width: 500px) {
    left: 0%;
    padding: 2vw;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0102c1;
      transform-origin: 100% 0;
      transform: skew(-10deg);
      z-index: -1;
    }
  }
  :hover {
    color: black;
    background-color:#DEFFB4; 
    cursor: pointer;
  }
`;

const Women = styled.div`
  color: ${(props) => (props.section == "womens" ? "black" : "white")};
  background-color: ${(props) =>
    props.section == "womens" ? "#DEFFB4" : "#88A9B7"};
  border-radius: 14px;
  width:50vh;
  margin-left: 8%;
  margin-top: 5px;
  text-align: center;
  font-size: 20px;
  @media(max-width:1090px){
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 50%;
    margin-left: 0;

  }
`;

const Men = styled.div`
  color: ${(props) => (props.section == "mens" ? "black" : "white")};
  background-color: ${(props) =>
    props.section == "mens" ? "#DEFFB4" : "#88A9B7"};
  font-size: 20px;
  width:50vh;
  margin-top: 5px;
  margin-right:4%;
  text-align: center;
  border-radius: 14px;
  @media(max-width:1090px){
    width: 30%;
    margin-top: 5%;
  }
  @media (max-width: 768px) {
    width: 60%;
    margin-top:5%;
    margin-bottom: 5%;
    margin-right: 0;
    
  }
`;

const Section = ({ id, mendata, womendata, color }) => {
  
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isMobile, setMobile] = React.useState(false);

  const [section, setSection] = React.useState("all");
  console.log(section);
  React.useEffect(() => {
    if (dimensions.width < 500) setMobile(true);

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (window.innerWidth < 500) setMobile(true);
      else setMobile(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Heading section = {section} setSection={setSection} />
      <GenderWrap id="section1">
        <Men section={section}>
          {" "}
          <Filter onClick={() => setSection("mens")}>Men's Basketball</Filter>
        </Men>
        <Women section={section}>
          {" "}
          <Filter onClick={() => setSection("womens")}>
            Women's Basketball
          </Filter>
        </Women>
      </GenderWrap>

      <SectionWrap1 id={id} color={color}>
        {section === "mens" && (
          <TwoColumn>
            {" "}
            {mendata.map((article) => {
              return <SmallArticle article={article} />;
            })}{" "}
          </TwoColumn>
        )}

        {section === "womens" && (
          <TwoColumn>
            {" "}
            {womendata.map((article) => {
              return <SmallArticle article={article} />;
            })}{" "}
          </TwoColumn>
        )}

        {section === "all" && (
          <ArticlesWrap>
            <GenderColumn>
              {" "}
              {mendata.map((article) => {
                return <SmallArticle article={article} />;
              })}{" "}
            </GenderColumn>
            <GenderColumn>
              {" "}
              {womendata.map((article) => {
                return <SmallArticle article={article}/>;
              })}{" "}
            </GenderColumn>
          </ArticlesWrap>
        )}
        <NavigationSec first={false} next="Home" link="/" />
      </SectionWrap1>
    </div>
  );
};

export default Section;
