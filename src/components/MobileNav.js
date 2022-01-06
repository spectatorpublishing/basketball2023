import React from 'react';
import styled from 'styled-components';
import HamburgerMenu from 'react-hamburger-menu';
import { fallDown as Menu } from 'react-burger-menu';
import "../index.css";
import { Link } from 'react-router-dom';

const NavWrap = styled.div`
    text-align: center;
    margin: auto;
    padding-top: 0rem;
    height:10vh;
    justify-content: space-between;
    align-items:center;
    display:flex;
    position:sticky;
    top:0;
    left:0;
    flex-wrap: wrap;
    z-index:100;
    background-color:#282439;
    @media (min-width: 768px) {
       display:none;
    }
`;

const Tab = styled.a`
    background-color:${props => props.current ? "rgba(172, 186, 237, 1)": "inherit"};
    color:${props => props.current ? "black": "white"};
`;
const Logo = styled.div`
    z-index:100;
    position:relative;
    left:5%;
`;
const MobileNavBar = ({ color, current }) => {
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        console.log(open)
        setOpen(!open)
    }

    return (

        <NavWrap>
            <Logo>
                <a href="https://www.columbiaspectator.com/" style={{
                }}><img style={{
                    height: "40px",
                    width: "40px",
                }} src="https://cloudfront-us-east-1.images.arcpublishing.com/spectator/LC75RL476NFG3P677LOBAW2MXE.png"></img></a>
            </Logo>
            <HamburgerMenu
                isOpen={open}
                menuClicked={() => handleClick()}
                width={30}
                height={20}
                strokeWidth={5}
                rotate={0}
                color='white'
                borderRadius={0}
                animationDuration={0.5}
                zIndex={100}
                className="over"
            />
            <Menu isOpen={open} width={'100vw'}>
                <Tab id="home"  current={current === "home"} className="menu-item" href="/">Home</Tab>
                <Link style={{ textDecoration: 'none' }} to="/womens"><Tab id="about"  current={current === "womens"} className="menu-item" href="/womens">WOMEN'S BASKETBALL</Tab></Link>
                <Link style={{ textDecoration: 'none' }} to="/mens"><Tab id="contact" current={current === "mens"} className="menu-item" href="/mens">MEN'S BASKETBALL</Tab></Link>
                <Link style={{ textDecoration: 'none' }} to="/all"><Tab current={current === "all"} className="menu-item--small" href="/all">ALL</Tab></Link>
            </Menu>
        </NavWrap>


    );
};

export default MobileNavBar;