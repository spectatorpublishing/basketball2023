import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const VertNav = styled.div`
  text-align: right;
  position: absolute;
  right: 1vw;
  top: 3vh;
  font-weight: 700;
  z-index: 100;
`;

const Links = styled.div`
    background-color: rgb(222, 255, 180,0.94);
    z-index: 1;
    transform: translateX(99%); /* normal, hidden state */
    padding-bottom: 0.1vw;
    padding-right: 1vw;
    padding-left: 1vw;
    padding-top: 1vw;
    backdrop-filter: blur(2px);
    :hover {
        transform: translateX(0); 
    }

`;

const Tab = styled.a`
    display:block;
    z-index: 2;
    margin-bottom: 2vh;
    position:relative;
    text-align:right;
    padding: auto;
    height: auto;
    width: auto;
    text-decoration:none;
    div {
      width: 100%;
      font-size: 1.5em;
    }

    :hover {
        color: #000D74;
        background-color: rgba(255, 255, 255, 0.85);;
        cursor: pointer;
        div {
            width: 100%;
            font-size: 1.5em;
        }
    }

`;

const NavTextSelected = styled.div`
  letter-spacing: 0.1rem;
  z-index:3;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  background-color: #A3C3D0;
  color: white;

  opacity:100%;
  text-transform: uppercase;
  position: relative;
  width: 100%;
`;
const NavText = styled.div`
  letter-spacing: 0.1rem;
  z-index:3;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
  color: black;
  background-color: inherit;
  opacity:100%;
  text-transform: uppercase;
  position: relative;
  width: 100%;
`;
const Logo = styled.div`
    width: 100px;
    height: 80px;
    padding-top:10px;
    text-align: center;
    background-color: black;
    border-radius: 100%;
    margin-left: 25vh;
    margin-bottom: 2.5vh;
`;


const NavBar = ({ current, setSection }) => {
    const [sec, setSec] = React.useState(current);

    return (
        <VertNav>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "70px",
                    width: "65px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </Logo>
            
        </VertNav >
    );
};

export default NavBar;
