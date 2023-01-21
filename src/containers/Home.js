import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import CreditsSec from './Credits';
import LetterSec from './LetterEditor';
import NavigationSec from '../components/Navigation';
import Heading from './Heading';
import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';
import SocialSpec from '../components/SocialSpec';
import SocialShare from '../components/SocialShare';
  
const Wrapper1 = styled.div`
    padding-left:7%;
    padding-right:7%;
    overflow-x:hidden;
    overflow-y: hidden;
    @media (max-width: 768px) {
        overflow-y: visible;
        height:150vh;
        padding-left:0%;
        padding-right:0%;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    overflow-x:hidden;
    background: #3B4448;
    @media (max-width: 768px) {
        height:100vh;
        padding-left:0%;
        padding-right:0%;
    }
`;

const SocialsWrapper = styled.div`
    padding-left:7%;
    padding-right:7%;
    padding-top:5%;
    padding-bottom:10%;
    right: 0px;
    position: absolute;
    `;
var url = "google.com"
const Home = () => {
    return (
        <Wrapper>
        <Heading/>
        <Wrapper1>     
            <LetterSec />
            <NavigationSec first={true} next="all basketball" link="/all" />
            <CreditsSec />
        </Wrapper1>
        </Wrapper>
    );
};

export default Home;