import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import '../index.css';

const LetterWrap = styled.div`
    padding-top:5vh;
    border:solid 1px white;
    margin-top:5vh;

    @media (max-width: 768px) {
        margin-left:4%;
        margin-right:4%;
    }
`;

const Title = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 3em;
    text-align:center;
    letter-spacing: 0.1em;
    color:#555555;
    width:65%;
    margin-left:auto;
    margin-right:auto;
    
    padding:2vh 0 2vh 0;
    word-wrap:break-word;

    @media (max-width: 768px) {
        font-size:1.75em;
        width:90%;
        padding:1vh 0 1vh 0;
    }
    
`;

const Credits = styled.div`
    font-style: normal;
    font-weight: 900;
    font-size: 2em;
    color:#555555;
    text-align:center;
    width:65%;
    margin-left:auto;
    margin-right:auto;
    padding-top:2vh;
    padding-bottom:2vh;
    letter-spacing: 0.1em;
`;

const Body = styled.div`
    h1 {
        text-align:center;
        color:#000000;
    }
`;


const SubDiv = styled.div`
    width: 75vw;
    @media ${device.tablet} {
        width: fit-content;
    }
    color:#000000;
`;


const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    justify-content: center;
    @media ${device.tablet} {
        justify-content: space-evenly;
    }

    @media (max-width: 1000px) {
        font-size:0.75em;

    }
    @media (max-width: 768px) {
        font-size:1em !important;

    }
`;

const Content = styled.div`
    text-align:center;
`



const LetterEditor = () => {
    return (
        <LetterWrap>
            <Title>THE COLUMBIA DAILY SPECTATOR STAFF WHO MADE THIS ISSUE POSSIBLE</Title>
            <Credits> CREDITS </Credits>
            <Body>
                <Row>
                    <SubDiv>
                        <div>
                            <h3>Sports</h3>
                            <p>Miles Schachner, Sports Editor</p>
                            <p>Stephen Dames, Deputy Sports Editor</p>
                            <p>Robert Gao, Deputy Sports Editor</p>
                            <p>Jorge Hernandez, Deputy Sports Editor</p>
                            <p>Matthew Kim, Senior Staff Writer</p>
                            <p>Adam Lang, Senior Staff Writer</p>
                            <p>Talya Lerner, Staff Writer</p>
                            <p>Henry Oltman, Staff Writer</p>
                            <p>Owen Tesoro, Staff Writer</p>
                            <p>Rebecca Wachen, Staff Writer</p>
                            <p>Takashi Williams, Staff Writers</p>
                        </div>

                       
                        

                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Photo</h3>
                            <p>Millie Felder, Photo Editor</p>
                            <p>Kate Della Pietra, Deputy Photo Editor</p>
                            <p>Samantha Camacho, Deputy Photo Editor</p>
                            <p>Alex Kieu, Deputy Photo Editor</p>
                            <p>Kat St. Martin, Deputy Photo Editor</p>
                            <p>Caitlin Buckley, Staff Photographer</p>
                            <p>Kathy Fang, Staff Photographer</p>
                            <p>Shannon Binns, Staff Photographer</p>

                        </div>
                        <div>
                            <h3>Illustrations</h3>
                            <p>Carlos Ochoa, Staff Illustrator</p>
                        </div>
                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Copy</h3>
                            <p>Kaylene Su Yee Chong, Head Copy Editor</p>
                            <p>Maria Levit, Deputy Copy Editor</p>
                            <p>Sam Barnett, Associate Copy Editor</p>
                            <p>Adam Burns, Associate Copy Editor</p>
                            <p>Sadie Rochman, Associate Copy Editor</p>
                            <p>Yvin Shin, Associate Copy Editor</p>
                        </div>
                        <div>
                            <h3>Design and Development</h3>
                            <p>Victoria Geh, Head of Newsroom Development</p>
                            <p>Philippe Wu, Head of Product</p>
                            <p>Hong Du, Senior Newsroom Developer</p>
                            <p>Patrick Puma, Deputy Newsroom Developer</p>
                            <p>Cindy Espinosa, Senior Product Designer</p>
                            <p>Sadie Rochman, Associate Copy Editor</p>
                        </div>
                    </SubDiv>
                </Row>

            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;