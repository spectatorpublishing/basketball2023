import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import NavigationSec from '../components/Navigation'
import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';


const CoverWrapper = styled.div`
    background: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/CBMHUPQ56ZGDXDVOJIRGAUBMWQ.jpg);
    background-size: cover;
    background-position: top;
    width:100%;
    height: 110vh;

    @media (max-width: 500px) {
        width:100%;
        height:40vh;
        background-size:cover !important;
    }

    @media (max-width: 768px) {
        height:60vh;
    }

    @media (max-width: 1300px) {
        background-repeat:no-repeat;
    }
    `;

const SocialsWrapper = styled.div`
    padding-left:7%;
    padding-right:7%;
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
    top:55%;
    font-weight:900;
    left:3%;
    color:white;
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
const Heading = () => {
    return (
        <div>
            <MobileNav current="home" />
            <TextWrapMobile>
                <PartOneText>2021-22</PartOneText>
                <PartOneText>basketball edition</PartOneText>
            </TextWrapMobile>
            <CoverWrapper id="home">
                <TextWrap>
                    <PartOneText>2021-22</PartOneText>
                    <PartOneText>basketball edition</PartOneText>
                </TextWrap>
                <NavWrap>
                    <VerticalNav color="white" current="home" />
                </NavWrap>
            </CoverWrapper>
        </div>
    );
};

export default Heading;