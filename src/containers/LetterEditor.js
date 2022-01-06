import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import '../index.css';
const LetterWrap = styled.div`
    padding-bottom:5vh;

    @media (max-width: 768px) {
        padding-left:4%;
        padding-right:4%;
    }

`;

const Title = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 5em;
    letter-spacing: 0.05em;
    color:rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    padding:6vh 0 2vh 0;
    word-wrap:break-word;

    @media (max-width: 768px) {
        font-size: 2em;
    }

`;

const Body = styled.div`
    font-size: 1.5em; 
    color:white;
    word-wrap:break-word;
    width:100%;

    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>LETTER FROM THE EDITOR</Title>
            <Body>
                <p>Dear readers, </p>
                <p>Each year during the month of February, we celebrate Black History Month, which is a time dedicated to highlighting the accomplishments of Black Americans and Black culture. This year, it is even more important to champion Black scholars, artists, athletes, entrepreneurs, and future leaders as we aim to amplify their voices.
</p>
                <p>Within Spectator’s Black History Month issue, you can find coverage of the development of distinct foodways and food trends in Harlem; profiles of Black student activists, haircare entrepreneurs, and musicians whose heritage has influenced their craft; and an examination of the University’s failure to provide resources to students who want to learn art forms with roots in the Black community like tap dance or jazz music. Furthermore, the issue explores new developments in uplifting marginalized voices, both in professors’ attempts to address racism through adjusting syllabi to highlight Black and other historically underrepresented scholars and through the University’s racial justice mini-grants.</p>
                <p>Columbia is an institution with a long history of racial injustice, and its narratives have often been whitewashed. We hope that within this edition you can learn more about the long-overlooked contributions that Black scholars, activists, and creatives have made to the Columbia and larger West Harlem community.
</p>
                <hr></hr>
                <p>Sarah Braka, Editor in Chief</p>
                <p>Elizabeth Karpen, Managing Editor</p>
            </Body></LetterWrap>
    );
};

export default LetterEditor;