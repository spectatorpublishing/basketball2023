import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import CreditsSec from './Credits';
import LetterSec from './LetterEditor';
import NavigationSec from '../components/Navigation';
import Heading from './Heading';
import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';
import SocialShare from '../components/SocialShare';
  
const Wrapper1 = styled.div`
    padding-left:7%;
    padding-right:7%;
    overflow-x:hidden;
    @media (max-width: 768px) {
        height:100vh;
        padding-left:0%;
        padding-right:0%;
    }
`;
const SocialsWrapper = styled.div`
    padding-left:7%;
    padding-right:7%;
    padding-top:1%;
    padding-bottom:7%;
    right: 0px;
    position: absolute;
    `;
var url = "google.com"
const Home = () => {
    return (
        <div>
            <Heading/>
        <Wrapper1>
            <SocialsWrapper>
            <SocialShare link = {"google.com"} description = {"yay you shared! i never thought anyone would"}></SocialShare>
            </SocialsWrapper>
            <LetterSec />
            <NavigationSec first={true} next="all basketball" link="/all" />
            
            <CreditsSec />
        </Wrapper1>
        
        </div>

    );
};

export default Home;