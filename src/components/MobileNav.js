import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import "../index.css";
import { Link } from 'react-router-dom';
import { faBlackTie } from '@fortawesome/free-brands-svg-icons';
const NavWrap = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 0rem;
    height:10vh;
    width: 100%;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:sticky;
    top:0;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background-color:#DEFFB4;
    @media (min-width: 768px) {
       display:none;
    }
`;
const NavText = styled.div`
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
const NavTextSelected = styled.div`
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
const Tab = styled.div`
    background-color:${props => props.current ? "#A3C3D0": "inherit"};
    color:${props => props.current ? "white": "black"};
`;

const Logo = styled.div`
    z-index:100;
    position:relative;
    left:3%;
`;
const MobileNavBar = ({ current, setSection }) => {
    const [open, setOpen] = React.useState(false);
    const [sec, setSec] = React.useState(current);
    function handleClick() {
        setOpen(!open);
    }
    console.log("m" , current);
    return (

        <NavWrap>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "47px",
                    width: "54px",
                }} src="https://spectrum-logos.s3.amazonaws.com/cds_crown_black_clear.png"></img></a>
            </Logo>
            <HamburgerMenu
                isOpen={open}
                menuClicked={() => handleClick()}
                width={30}
                height={20}
                strokeWidth={5}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
                zIndex={100}
                className="over"
            />
            <Menu isOpen={open} width={'100vw'}>
                <Link style={{ textDecoration: 'none' }} to="">
                    <Tab current={current == "home"}onClick={() =>{ 
                        const n = "home"
                        setSec(n)} }>{sec!="all" ? <NavTextSelected >
                        HOME
                    </NavTextSelected> : <NavText >
                        HOME
                    </NavText>}</Tab>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/all">
                    <Tab current={current == "all"}onClick={() => {
                                                const m = "all"
                                                setSec(m)
                                                setSection("all")
                                                }}>
                            {sec!=null ? <NavTextSelected>
                            ARTICLES
                        </NavTextSelected>: <NavText>
                            ARTICLES
                        </NavText>}
                    </Tab>
                </Link>
            </Menu>
        </NavWrap>


    );
};

export default MobileNavBar;