import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import { Link } from 'react-router-dom';

import '../index.css';

const NavWrap = styled.div`
    height:35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/CBMHUPQ56ZGDXDVOJIRGAUBMWQ.jpg) #6B6BA2;
    background-size: cover;
    margin-bottom: 5vh;
    background-position: 30% 80%;
    @media (max-width: 768px) {
        height:25vh;
    }
`;

const Title = styled.div`
    font-style: normal;
    font-weight:400;
    padding:0vh 0 2vh 0;

`;

const TextWrap = styled.a`
    border: solid 1px white;
    width:40%;
    margin:auto;
    font-family:"Barlow", sans-serif;
    text-transform:uppercase;
    padding-top:5vh;
    padding-bottom:5vh;
    font-size: 2.5em;
    color:white;
    text-align:center;
    text-decoration:none;
    transition-duration:1s;
    :hover {
        background-color:white;
        color:black;
    }
    @media (max-width: 768px) {
        font-size:1.5em;
        width:80%;
    }
`;

const Next = styled.div`
    word-wrap:break-word;
    text-align:center;
    font-weight: 700;

    a {
        text-decoration:none;
        color:inherit;
        :hover {
            text-decoration:underline;
        }
    }
`;

const NavigationSec = ({ first, next, link }) => {
    return (
        <NavWrap>

            <TextWrap>
                <Link style={{ color:"inherit", textDecoration: 'none' }} to={link}>
                    <Title>{first == true ? "Begin Reading" : "Continue"}</Title>

                    <Next>{first == true?"Next: " :"Back to: "}{next}</Next>
                </Link>
            </TextWrap>

        </NavWrap >

    );
};

export default NavigationSec;