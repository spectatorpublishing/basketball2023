import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
    display: flex;
    height:40vw;
    width:100%;
    margin-top:7.5vh;
    margin-bottom:7.5vh;

    @media (max-width: 500px) {
        height:35vh;
        margin-top:3vh;
    }
    @media (max-width: 800px) {
        height:40vw;
    }
`;

const Link = styled.a`
    text-decoration: none;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArticleImg = styled.img`
    width: 50vw;
    height:40vw;
    order: ${props => props.position === "left" ? "1" : "2"};
    opacity:1;
    position:relative;
    z-index:2;
    transition-duration:1s;
    :hover {
        opacity:1;
    }
    @media (max-width: 500px) {
        width: 100vw;
        max-height: 100rem;
    }

    @media (max-width: 800px) {
        width: 50vw;
    }
`;

const ImageWrap = styled.div`
    background: linear-gradient(rgba(1, 2, 193, 0.29),rgba(1, 2, 193, 0.29));
    width:50vw;
    height:40vw;
    z-index:10;
    position:relative;
    order: ${props => props.position === "left" ? "1" : "2"};
    :after {
        content:'';
        position:absolute;
        left:0; top:0;
        width:100%; height:100%;
        display:inline-block;
        transition-duration:1s;
        z-index:5;
        opacity:1;
        background: linear-gradient(rgba(1, 2, 193, 0.29),rgba(1, 2, 193, 0.29));
    }
    :hover::after {
        transition-duration:1s;
        opacity:0;
    }
    @media (max-width: 500px) {
        width: 100vw;
        max-height: 100rem;
        order:none;
    }

    @media (max-width: 800px) {
        width: 50vw;
    }
    
`;


const ArticleText = styled.div`
    text-align: left;
    color: #251282;
    width:${props => props.position === "left" ? "110%" : "115%"};
`;

const Title = styled.p`
    font-weight: bold;
    font-size:2.5em;
    color:white;

    @media (max-width: 800px) {
        font-size:1.5em;
    }
`;

const Author = styled.p`
    font-size:1.5em;
    color:white;
    @media (max-width: 800px) {
        font-size:1em;
    }

`;

const TextWrap = styled.div`
    order: ${props => props.position === "left" ? "2" : "1"};
    color:white;
    z-index:100;
    position:relative;
    left:${props => props.position === "left" ? "-10%" : "0%"};
    width: inherit;
    max-height: 40rem;
    @media (max-width: 500px) {
        order:none;
        width:100%;
        left:0%;
    }
`;


const MediumArticle = ({ article, position }) => {
    console.log(position)
    return (
        <ArticleWrap>
            <Link href={article.article_link} target="_blank" rel="noreferrer">
                <ImageWrap>
                    <ArticleImg position={position} src={article.image_url} />
                </ImageWrap>
                <TextWrap position={position}>
                    <ArticleText position={position}>
                        <Title>{article.article_title}</Title>
                        <Author>{article.article_authors}</Author>
                    </ArticleText>
                </TextWrap>
            </Link>
        </ArticleWrap>
    );
};

export default MediumArticle;