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
                        <h2>Corporate Board</h2>
                        <p>Ence, Editor in Chief</p>
                        <p>Dia Gill, Managing Editor</p>
                        <p>Vilanna Wang, Publisher</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Design and Development</h2>
                        <p>Victoria Geh, Head of Newsroom Development</p>
                        <p>Cindy Espinosa, Product Designer</p>
                        <p>Ray Banke, Deputy Illustrations Editor</p>
                    </SubDiv>

                    <SubDiv>
                        <h2>Lead Illustration By</h2>
                        <p>Ray Banke, Deputy Illustrations Editor</p>
                    </SubDiv>
                </Row>
                <h1>Content</h1>
                <Row>
                    <SubDiv>
                        <div>
                            <h3>News</h3>
                            <p>Dia Gill, News Editor</p>
                            <p>Sofia Kwon, News Editor</p>
                            <p>Abby Melbourne, Deputy News Editor</p>
                            <p>Talia Abrahamson</p>
                            <p>Faith Onyechere</p>
                            <p>Lucy Brenner</p>
                            <p>Katherine Nessel</p>
                            <p>Maya Mitrasinovic</p>
                            <p>Faith Andrews</p>
                            <p>Irie Sentner</p>
                            <p>Stella Pagkas</p>
                        </div>
                        <div>
                            <h3>Arts and Entertainment</h3>
                            <p>Noah Sheidlower, A&E Editor</p>
                            <p>Bella Druckman, Deputy A&E Editor</p>
                            <p>Fernanda Aguero</p>
                            <p>Esterah Brown</p>
                            <p>Julia Tong</p>
                            <p>Irene Madrigal</p>
                            <p>Emma Schartz</p>
                            <p>Anya Raj</p>

                        </div>
                        <div>
                            <h3>Illustrations</h3>
                            <p>Brenda Huang, Illustrations Editor</p>
                            <p>Noelle Hunter</p>
                            <p>Julian Michaud</p>
                            <p>Sadia Sharif</p>
                            <p>Melody Lu</p>
                            <p>Isai Soto</p>
                            <p>Natalie Tak</p>

                        </div>
                        <div>
                            <h3>Video</h3>
                            <p>Ryan Balderas, Deputy Video Editor</p>
                            <p>Caitlin Buckley</p>
                        </div>
                        <div>
                            <h3>Spec Audio</h3>
                            <p>
                                Samuel Hyman, Executive Editor of the Ear</p>
                        </div>

                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Opinion</h3>
                            <p>Ryan Oden, Editorial Page Editor</p>
                            <p>Gurtej Gill, Deputy Editorial Page Editor</p>
                            <p>Senem Yurdakul, Deputy Editorial Page Editor</p>
                            <p>Lily Nathanson, Deputy Editorial Page Editor</p>
                            <p>Karlton Gaskin, Deputy Editorial Page Editor</p>
                            <p>Hsinyen Huang, Deputy Editorial Page Editor</p>
                            <p>Casey Qi</p>
                            <p>Isabella Inouye</p>
                        </div>
                        <div>
                            <h3>Sports</h3>
                            <p>Mackenzie George, Sports Editor</p>
                            <p>Ence Morse, Sports Editor</p>
                            <p>Matt Kim, Deputy Sports Editor</p>
                            <p>Miles Schachner, Deputy Sports Editor</p>
                            <p>Wick Hallos</p>
                        </div>
                        <div>
                            <h3>Graphics</h3>
                            <p>Ellen Guo</p>
                        </div>
                        <div>
                            <h3>Photo</h3>
                            <p>Beatrice Shlansky, Photo Editor</p>
                            <p>Millie Felder, Deputy Photo Editor</p>
                            <p>Kate Della Pietra, Deputy Photo Editor</p>
                            <p>Elisabeth McLaughlin, Deputy Photo Editor</p>
                            <p>Samantha Camacho</p>
                            <p>Rommel Nunez</p>
                            <p>Joao Santos</p>
                            <p>Kirill Buskirk</p>
                            <p>Princeton Huang</p>
                            <p>Selina Yang</p>

                        </div>
                        <div>
                            <h3>The Eye</h3>
                            <p>Jade Justice, Features Editor</p>
                            <p>Annie Cheng</p>
                            <p>William Yee</p>
                            <p>Kaiwen Zheng</p>
                        </div>
                    </SubDiv>
                    <SubDiv>
                        <div>
                            <h3>Copy</h3>
                            <p>Emma Bradbury, Head Copy Editor</p>
                            <p>Fritzie Schwentker, Deputy Copy Editor</p>
                            <p>Mabry Griffin, Deputy Copy Editor</p>
                            <p>Kaylene Chong, Deputy Copy Editor</p>
                            <p>Vincenzo DiNatale, Deputy Copy Editor</p>
                            <p>Olivia Vella</p>
                            <p>Carolyn Wang</p>
                            <p>Harry Shi</p>
                            <p>Jacob Kang</p>
                            <p>Robyn Fohouo</p>
                            <p>Katherine Carraway</p>
                            <p>Rachel Borshchenko</p>
                            <p>Jonah Pitkowsky</p>
                            <p>Natalie Park</p>
                            <p>Adeline Hu</p>
                            <p>Maria Levit</p>
                            <p>Eden Teferi</p>
                            <p>Willa Nagy</p>
                            <p>Alia Derriey</p>
                            <p>Sam Barnett</p>
                            <p>Kathryn Cherven</p>
                            <p>Leif Wood</p>
                            <p>Renuka Balakrishnan</p>
                            <p>Abby Sim</p>
                            <p>Adam Burns</p>
                            <p>Haley Zehrung</p>
                            <p>Madison Guzy</p>
                            <p>Natalie Goldberg</p>
                            <p>Michaela Fleischer</p>
                            <p> Noyna Roy</p>
                            <p>Zoe Yin</p>
                        </div>
  
                    
                    </SubDiv>
                </Row>

            </Body>
        </LetterWrap>
    );
};

export default LetterEditor;