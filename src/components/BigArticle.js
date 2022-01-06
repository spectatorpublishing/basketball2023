import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
    height:60vw;
    width:81vw;
    margin-top:7.5vh;
    margin-bottom:7.5vh;

    @media (max-width: 500px) {
        margin-bottom: 2.5vh;
        width:92vw;
        height:70vw !important;
    }

    @media (max-width: 800px) {
        height:50vh;
        margin-bottom: 2.5vh;
    }
`;

const Link = styled.a`
    text-decoration: none;
    width: inherit;
`;

const ArticleImg = styled.img`
    width: inherit;
    height:100%;
    overflow: hidden;
    position:relative;
    z-index:2;
    opacity:1;
    transition-duration:1s;
    :hover {
        opacity:1;
    }
`;

const ImageWrap = styled.div`
    background: linear-gradient(rgba(1, 2, 193, 0.29),rgba(1, 2, 193, 0.29));
    width: inherit;
    height:100%;
    z-index:2;
    position:relative;
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

`;

const ArticleText = styled.div`
    text-align: left;
    padding: 0.5rem 2rem;
    color: rgba(38, 36, 57, 1);
    @media (max-width: 500px) {
        padding: 0.25rem 1rem;
    }
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 1.25rem;

    @media (max-width: 500px) {
        font-size:0.75rem;
    }
`;

const Author = styled.p`
    text-transform:capitalize;
    @media (max-width: 500px) {
        font-size:0.5rem;
    }
`;

const TextWrap = styled.div`
    position:relative;
    z-index:3;
    right:0;
    float:right;
    bottom:10vh;
    background-color:white;
    width:40%;
    @media (max-width: 500px) {
        width:60%;
    }
`;



const BigArticle = ({ article }) => {
    console.log(article)
    return (
        <ArticleWrap>
            <Link href={article.article_link} target="_blank" rel="noreferrer">
                <ImageWrap>
                    <ArticleImg src={article.image_url} />
                </ImageWrap>
                <TextWrap>
                    <ArticleText>
                        <Title>{article.article_title}</Title>
                        <Author>{article.article_authors}</Author>
                    </ArticleText>
                </TextWrap>
            </Link>
        </ArticleWrap>
    );
};

export default BigArticle;