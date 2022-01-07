import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VertNav = styled.div`
  text-align: right;
  position: fixed;
  right: 1vw;
  top: 3vh;
  font-weight: 700;
  z-index: 100;
`;

const Tab = styled.a`
  display: block;
  margin-bottom: 5vh;
  position: relative;
  text-align: right;
  color: #000d74;
  background-color: ${(props) => (props.current ? "#D2D2C0" : "none")};
  padding: ${(props) => (props.current ? "1vw 2vw 1.5vw 7vw" : "auto")};
  height: ${(props) => (props.current ? "3vh" : "3vh")};
  width: ${(props) => (props.current ? "7vw" : "auto")};
  text-decoration: none;
  div {
    width: ${(props) => (props.current ? "100%" : "auto")};
    font-size: ${(props) => (props.current ? "1.5em" : "1em")};
  }

  :hover {
    color: #000d74;
    background-color: #d2d2c0;
    padding: 1vw 2vw 1.5vw 7vw;
    height: 3vh;
    width: 7vw;
    div {
      width: 100%;
      font-size: 1.5em;
    }
  }
`;
const NavText = styled.div`
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  position: relative;
  width: 100%;
`;

const Logo = styled.div`
  margin-bottom: 5vh;
`;
const NavBar = ({ current }) => {
  console.log(current);
  return (
    <VertNav>
      <Logo>
        <a href="https://www.columbiaspectator.com/" style={{}}>
          <img
            style={{
              height: "38px",
              width: "36px",
            }}
            src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"
          ></img>
        </a>
      </Logo>
      <Tab href="/" current={current === "home"}>
        <NavText>HOME</NavText>
      </Tab>
      <Link style={{ textDecoration: "none" }} to="/womens">
        <Tab current={current === "womens"}>
          <NavText>WOMEN'S BASKETBALL</NavText>
        </Tab>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/mens">
        <Tab current={current === "men"}>
          <NavText>MEN'S BASKETBALL</NavText>
        </Tab>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/all">
        <Tab current={current === "all"}>
          <NavText>ALL</NavText>
        </Tab>
      </Link>
    </VertNav>
  );
};

export default NavBar;
