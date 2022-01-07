import React from 'react';
import styled from 'styled-components';
import LineTo from 'react-lineto';

import { device } from '../device';
import "../index.css";
import VerticalNav from '../components/VerticalNav';
import BigArticle from '../components/BigArticle';
import MediumArticle from '../components/MediumArticle';
import SmallArticle from '../components/SmallArticle';
import NavigationSec from '../components/Navigation';
import MobileNav from '../components/MobileNav';
import Lines from '../components/Lines';
import Heading from './Heading';

const SectionWrap1 = styled.div`

    background: ${props => props.color};
    padding-left:9%;
    padding-right:9%;

    @media (max-width: 500px) {
        padding-left:4%;
        padding-right:4%;
    }
`;

const Wrapper2 = styled.div`
`;

const Header = styled.h1`
    font-size: 2rem;
    letter-spacing: .05rem;
    z-index:4;
    color:rgba(0, 0, 0, 0);
    -webkit-text-stroke: 1px white;
    position:absolute;
    top:10vh;
    left:5vh;
    @media ${device.tablet} {
        font-size: 3rem;
        letter-spacing: .1rem;
    }

    @media ${device.laptopS} {
        letter-spacing: .1rem;
    }

    @media (max-width: 500px) {
        top:12vh;
    }
`;

const ArticlesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const GenderWrap = styled.div`
    padding-top:7.5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const Mens = styled.div`
    text-transform:uppercase;
    background: #C4D8E2;
    padding: 2vh 4vh 2vh 4vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
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
    :hover {
        color: white;
        background-color: #CD4F27;
    }
`;

const Womens = styled.div`
    text-transform:uppercase;
    background: #C4D8E2;
    padding: 2vh 6vh 2vh 6vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
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
    :hover {
        color: white;
        background-color: #CD4F27;
        }
    }
`;

const NavWrap = styled.div`
    display: none;

    @media ${device.tablet} {
        display: inherit;
        padding-bottom: 4rem;
    }

    @media ${device.laptop} {
        padding-bottom: 3rem;
    }
`;

const MobileNavWrap = styled.div`
        display: inherit;

        @media ${device.tablet} {
            display: none;
        }
`;

const Wrapper = styled.div`
    padding-left:7%;
    padding-right:7%;
    overflow-x:hidden;
    @media (max-width: 768px) {
        height:100vh;
        padding-left:0%;
        padding-right:0%;
    }
`;

const CoverWrapper = styled.div`
    background: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/JENGHVSK3FCXPD4GTNMSIQBBZA.jpg);
    background-size: cover;
    background-position: center;
    width:100%;
    height:110vh;

    @media (max-width: 500px) {
        width:100%;
        height:40vh;
        margin-top:25vw; 
        background-size:cover !important;
    }

    @media (max-width: 768px) {
        height:60vh;
    }

    @media (max-width: 1300px) {
        background-size:contain;
        background-repeat:no-repeat;
    }
`;


const TextWrap = styled.div`
    font-size: 7.375em;
    position:relative;
    top:5%;
    font-weight:900;
    left:3%;
    color:#D2D2C0;
    font-style: italic;
    @media (max-width: 501px) {
        display:none;
    }
    @media (max-width: 768px) {
        font-size:5em;
    }
`;

const TextWrapMobile = styled.div`    
    font-size: 2.5em;
    position:relative;
    color:white;
    font-style:italic;
    height:auto;
    font-weight:900;
    letter-spacing:1px;
    div {
        position: relative;
        display: inline-block;
        padding: 0.5em 0.5em 0.5em 0.25em;
        overflow: hidden;
        color: #fff;
    }
    
    @media (min-width: 500px) {
            display: none;
    }
`;

const PartOneText = styled.div`
    #text-transform:uppercase;
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

const PartTwoText = styled.div`
    margin-left:3vh;
    margin-top:2vh;
    #text-transform:uppercase;
    @media (max-width: 500px) {
        float:right;
        margin-top:0vh;
        padding:2vw;
        :after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:#0102C1;
            transform-origin: 0% 100%;
            transform: skew(-10deg);
            z-index: -1;
        }
    }
`;

const Section = ({ id, articles, header, color, next, link }) => {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    const [isMobile, setMobile] = React.useState(false);
    const [lastIndex, setLastIndex] = React.useState(articles.length - 4);
    const [renderLines, setRenderLines] = React.useState(false);

    React.useEffect(() => {
        if (dimensions.width < 500)
            setMobile(true)

        setTimeout(function () { //Start the timer
            setRenderLines(true)
        }, 100)

        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
            console.log(window.innerWidth)
            if (window.innerWidth < 500)
                setMobile(true)
            else
                setMobile(false)

            setRenderLines(false)
            setTimeout(function () { //Start the timer
                setRenderLines(true)
            }, 100)
        }

        window.addEventListener('resize', handleResize)
    }, [])
    return (
        <div>
            <Heading/>
            <GenderWrap>
                <Mens>Men's Basketball</Mens>
                <Womens>Women's Basketball</Womens>
            </GenderWrap>
            <SectionWrap1 id={id} color={color}>
                <Wrapper2>
                    <ArticlesWrap>
                        {articles.map((article, index) => {
                            if (index === 0) {
                                return (<div className="A" ><BigArticle article={article} /></div>
                                )
                            } else if (index === 1) {
                                if (isMobile) {
                                    return (<div className="B">
                                        <SmallArticle article={article} />
                                    </div>)
                                }
                                else {
                                    return (<div className="B">
                                        <MediumArticle article={article} />
                                    </div>)
                                }

                            } else if (index === 2) {
                                if (isMobile) {
                                    return (<div className="C">
                                        <SmallArticle article={article} />
                                    </div>)
                                }
                                else {
                                    return (<div className="C">
                                        <MediumArticle position="left" article={article} />
                                    </div>)
                                }
                            } else
                                return (<div style={{ 'marginRight': ((lastIndex === (index - 3)) && (lastIndex % 2 === 0) && (!isMobile)) ? "40vw" : "0" }} className={"D" + (index - 3)}><SmallArticle article={article} right={index % 2} /></div>)
                        })}
                    </ArticlesWrap>
                </Wrapper2>
                {renderLines && <Lines last_index={lastIndex} mobile={isMobile} />}
            </SectionWrap1 >
        </div>
    );
};

export default Section;