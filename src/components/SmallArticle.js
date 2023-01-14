import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width:50vh;
    margin-left: 3.25vw;
    margin-right: 2vw;
    margin-top: 3vw;
    margin-bottom:2vw;
    @media (max-width: 768px) {
        margin-right: 2vw;
    }
    @media (max-width: 500px) {
        width:100%;
        margin-left:0;
        margin-right:0;
        margin-top:7vw;
    }
`;

const Link = styled.a`
    text-decoration: none;
    width: 100%;
    justify-content:flex-start;
`;

const ArticleImg = styled.img`
    width: inherit;
    max-height: 20rem;
    overflow: hidden;
    opacity:1;
    position:relative;
    z-index:2;
    transition-duration:1s;
    :hover {
        opacity:1;
    }
    object-fit: cover;
    display:block;

    
`;

const ImageWrap = styled.div`
    background: linear-gradient(rgba(1, 2, 193, 0.29),rgba(1, 2, 193, 0.29));
    z-index:10;
    width: inherit;
    max-height: 20rem;
    transition-duration:1s;
    position: relative;
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
    color: white;
`;

const Title = styled.p`
    font-weight: 900;
    font-size: 1.25rem;

    @media (max-width: 500px) {
        font-size:0.75rem;
        width:70%;
    }
`;

const Author = styled.p`
  @media (max-width: 500px) {
        font-size:0.5rem;
        width:70%;
    }
`;


const ArticleBox = ({ article }) => {
    return (
        <ArticleWrap>
            <Link href={article.article_link} target="_blank" rel="noreferrer">
                <ImageWrap>
                    <ArticleImg src={article.image_url} />
                </ImageWrap>
                <ArticleText>
                    <Title>{article.article_title}</Title>
                    <Author>{article.article_authors}</Author>
                </ArticleText>
            </Link>
        </ArticleWrap>
    );
};

export default ArticleBox;