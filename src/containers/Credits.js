import React from 'react';
import styled from 'styled-components';
import { credits } from '../data/credits'
const Disp = styled.div`
    display: flex; 
    
`
const Container = styled.div`
    width: 97%;
    margin-top: 5rem;
    font-style: normal;
    font-weight: 900;
    font-size: 3em;
    margin-bottom: 3rem;
    height: 70rem;
    padding-left: 3rem;
    padding-right: 3rem;
    background-color: #3B4448;
    color: #DEFFB4;
    border-style: solid;
    border-color: #DEFFB4;
    @media only screen and (max-width: 1216px){
        font-size: 2.1rem;
    }
    @media only screen and (max-width: 768px){
        height: 80%;
        width: 85%;
    }
`;

const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Header = styled.h1`
    text-align: center;
    font-weight: 900;
    letter-spacing: 0.05em;
    width: 55%;
    font-size: 3.25rem;
    padding-top:2rem;
    @media only screen and (max-width: 1216px){
        font-size: 2.1rem;
    }
    @media only screen and (max-width: 768px){
        width: 80%;
        font-size: 2rem;
    }
    @media only screen and (max-width: 600px){
        width: 90%;
        font-weight: 600;
        font-size: 1.5rem;
        padding-top:2rem;
    }
`;
const CreditsHeader = styled.h2`
    text-align: center;
    font-weight: 900;
    letter-spacing: 0.05em;
    width: 55%;
    font-size: 2.25rem;
    @media only screen and (max-width: 1216px){
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 768px){
        width: 80%;
        font-size: 2rem;
    }
    @media only screen and (max-width: 600px){
        font-weight: 400;
        font-size: 1.5rem;
        padding-top:0.5rem;
}
`

const SectAndNames = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    padding-left: 14.5%;
    padding-bottom: 50%;
    align-content:space-around;
    width: 70%;
    height: 60%;
    @media only screen and (max-width: 768px){
        margin-left: 1rem;
        display: block;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: none;
        height: fit-content;
        margin-top:2rem;
    }  
`;

const Section = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    width: 22rem;
    height: fit-content;
    color: white;
    margin-bottom: 2rem;
    padding:0;
    margin:0;
    @media only screen and (max-width: 1216px){
        font-size: 1.6rem;
        width: 16rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 1.4rem;
        width: 14rem;
    }
    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
    }
    @media only screen and (max-width: 600px){
        font-size: 1.2rem;
        width: 85%;
    }
`;

const Name = styled.div`
    font-size: 1.15rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media only screen and (max-width: 1216px){
        font-size: 1rem;
    }
    @media only screen and (max-width: 1024px){
        font-size: 0.75rem;
    }
    @media only screen and (max-width: 768px){
        font-size:1rem;
    }
`;

const Credits = () => {
    return (
        <Disp>
        <Container id="credits">
            <HeaderDiv><Header>THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE</Header>
            <CreditsHeader>CREDITS</CreditsHeader>     
            </HeaderDiv>
            
            <SectAndNames>
                {Object.entries(credits).map(([section, key]) => {
                    return(
                        <Section> {section} 
                        <br/>
                        {key.map((person, index) => {
                            return(
                                <Name key={index}>{person.staff_name}, {person.title}</Name>
                            );
                        })}
                        <br/>
                        </Section>
                    );
                })}
            </SectAndNames>
        </Container>
        </Disp>
    )
};

export default Credits;
