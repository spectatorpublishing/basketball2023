import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import '../index.css';
import SocialSpec from '../components/SocialSpec';
const LetterWrap = styled.div`
    padding-bottom:5vh;
    
    @media (max-width: 768px) {
        padding-left:4%;
        padding-right:4%;
    }

`;

const Title = styled.div`
    font-style: regular;
    font-weight: 900;
    font-size: 6em;
    letter-spacing: 0.05em;
    font-family: 'Baumans' ;
    color:rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0.5px #DDFFB2;
    padding:9vh 0 1vh 0;
    word-wrap:break-word;

    @media (max-width: 768px) {
        font-size: 2em;
        -webkit-text-stroke: 1px #DDFFB2;
    }

`;
const SocialsWrapper = styled.div`
    margin-top: 1.5rem;
    position: absolute;
    `;
const Body = styled.div`
    font-size: 1.5em; 
    color: white;
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
                <p>Last year, after almost two years of no competitions, Ivy League basketball returned. Following initially-limited attendance, Levien Gymnasium eventually welcomed back crowds of fans to cheer for the Lions as conference play picked up. 
                 In the previous season, the women’s team saw its most successful season to date, while the men’s team limped into last place in the Ivy League. While the teams’ seasons tell opposite tales, one thing is certain: Columbia basketball is back. </p>
                <p>In this special edition, our staff is thrilled to bring you a variety of stories, from a look at how three-pointers are changing league dynamics to a spotlight on how a first-year on the men’s basketball team hopes to change team culture. Between 
                women’s basketball setting its sights on the Ivy League Championship and a March Madness bid and men’s basketball hoping to bounce back after two consecutive 1-13 Ivy League seasons, these are the storylines that shine light on the state of basketball 
                at Columbia.</p>

Thank you for reading!


                <hr></hr>
                <p>Jorge Hernandez, Sports Editor</p>
            </Body>

            <SocialSpec/>
         
            </LetterWrap>
    );
};

export default LetterEditor;