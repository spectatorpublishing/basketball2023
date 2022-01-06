import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import CreditsSec from './Credits';
import LetterSec from './LetterEditor';
import NavigationSec from '../components/Navigation'
import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';

const CoverWrapper = styled.div`
    background: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UQ4JFQMSONFXJHSBKTCU64BQGQ.png);
    background-size: cover;
    background-position: bottom;
    width:100%;
    height:110vh;

    @media (max-width: 500px) {
        width:100%;
        height:40vh;
        margin-top:25vw;
        background-size:cover !important;
    }

    @media (max-width: 768px) {
        height:60vh;
    }

    @media (max-width: 1300px) {
        background-size:contain;
        background-repeat:no-repeat;
    }
`;

const Wrapper = styled.div`
    padding-left:7%;
    padding-right:7%;
    overflow-x:hidden;
    @media (max-width: 768px) {
        height:100vh;
        padding-left:0%;
        padding-right:0%;
    }
`;


const NavWrap = styled.div`
    display: none;

    @media ${device.tablet} {
        display: inherit;
        margin-top: 0;
    }
`;

const TextWrap = styled.div`
    font-size: 7.375em;
    position:relative;
    top:5%;
    font-weight:900;
    left:3%;
    color:#D2D2C0;
    font-style: italic;
    @media (max-width: 501px) {
        display:none;
    }
    @media (max-width: 768px) {
        font-size:5em;
    }
`;

const TextWrapMobile = styled.div`    
    font-size: 2.5em;
    position:relative;
    color:white;
    font-style:italic;
    height:auto;
    font-weight:900;
    letter-spacing:1px;
    div {
        position: relative;
        display: inline-block;
        padding: 0.5em 0.5em 0.5em 0.25em;
        overflow: hidden;
        color: #fff;
    }
    
    @media (min-width: 500px) {
            display: none;
    }
`;

const PartOneText = styled.div`
    #text-transform:uppercase;
    @media (max-width: 500px) {
        left:0%;
        padding:2vw;
        :after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:#0102C1;
            transform-origin: 100% 0;
            transform: skew(-10deg);
            z-index: -1;
        }
    }
`;

const PartTwoText = styled.div`
    margin-left:3vh;
    margin-top:2vh;
    #text-transform:uppercase;
    @media (max-width: 500px) {
        float:right;
        margin-top:0vh;
        padding:2vw;
        :after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:#0102C1;
            transform-origin: 0% 100%;
            transform: skew(-10deg);
            z-index: -1;
        }
    }
`;
const Home = () => {
    return (

        <Wrapper>

            <MobileNav current="home" />
            <TextWrapMobile>
                <PartOneText>basketball</PartOneText>
                <PartTwoText>title edition</PartTwoText>
            </TextWrapMobile>
            <CoverWrapper id="home">
                <TextWrap>
                    <PartOneText>basketball</PartOneText>
                    <PartTwoText>title edition</PartTwoText>
                </TextWrap>
                <NavWrap>
                    <VerticalNav color="white" current="home" />
                </NavWrap>
            </CoverWrapper>

            <LetterSec />
            <NavigationSec first={true} next="all basketball" link="/all" />
            <CreditsSec />
        </Wrapper>

    );
};

export default Home;