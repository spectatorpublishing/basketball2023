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
        height: 110vh;
    }

    @media (max-width: 768px) {
        height:60vh;
    }
    `;

const NavWrap = styled.div`
    display: none;

    @media ${device.tablet} {
        display: inherit;
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
    @media (max-width: 768px) {
        top: 50%;
        font-size:5em;
    }
    @media (max-width: 650px) {
        font-size:3em;
        position:relative;
        top: 40%;
    }

`;

const PartOneText = styled.div`
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

const Heading = ({ setSection }) => {
    return (
        <div>
            <MobileNav current="home" />
            <CoverWrapper id="home">
                <TextWrap>
                    <PartOneText>2021-22</PartOneText>
                    <PartOneText>basketball edition</PartOneText>
                </TextWrap>
                <NavWrap>
                    <VerticalNav color="white" current="home" setSection={setSection} />
                </NavWrap>
            </CoverWrapper>
        </div>
    );
};

export default Heading;