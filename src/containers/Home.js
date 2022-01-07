import React from 'react';
import styled from 'styled-components';

import { device } from '../device';

import CreditsSec from './Credits';
import LetterSec from './LetterEditor';
import NavigationSec from '../components/Navigation';
import Heading from './Heading';
import VerticalNav from '../components/VerticalNav';
import MobileNav from '../components/MobileNav';

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

const Home = () => {
    return (
        <div>
            <Heading/>
        <Wrapper1>
            <LetterSec />
            <NavigationSec first={true} next="all basketball" link="/all" />
            <CreditsSec />
        </Wrapper1>
        </div>

    );
};

export default Home;