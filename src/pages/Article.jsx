import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Article = () => {
    let params = useParams();

    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticle();
        console.log(params.articleID);
        // eslint-disable-next-line
    }, []);

    const getArticle = async () => {
        const response = await fetch("/api/articles.json");
        const data = await response.json();
        setArticle(data.find((obj) => obj.id === params.articleID));
    };

    return (
        <div className="articleWrapper">
            <Main>
                <ArticleHeader>
                    <img
                        src={article.publisher_pic}
                        alt={article.publisher_name}
                    />
                    <Info>
                        <h4>{article.publisher_name}</h4>
                        <p>{article.publish_date}</p>
                    </Info>
                    <Vote>
                        <img src="/images/clap.png" alt="" />
                        <p>{article.likes}</p>
                    </Vote>
                </ArticleHeader>
                <ArticleBanner>
                    <img src={article.article_banner} alt={article.id} />
                </ArticleBanner>
                <ArticleTitle>{article.article_title}</ArticleTitle>
                <ArticleBody
                    dangerouslySetInnerHTML={{
                        __html: `${article.article_content}`,
                    }}
                ></ArticleBody>
            </Main>
        </div>
    );
};

const Main = styled.main`
    margin: auto;
    padding-block: 4rem;
    width: 90%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
`;

const ArticleHeader = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1.6rem;

    img {
        border-radius: 50%;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 6px;

    h4 {
        font-size: 1.6rem;
        font-weight: 400;
    }

    p {
        font-size: 1.4rem;
        font-weight: 400;
        color: #757575;
    }
`;

const Vote = styled.div`
    margin-left: auto;
    display: flex;
    align-items: center;
    column-gap: 5px;

    img {
        height: 24px;
        width: 24px;
    }

    p {
        font-size: 1.2rem;
        font-weight: 400;
        color: #757575;
    }
`;

const ArticleBanner = styled.div`
    width: 100%;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

const ArticleTitle = styled.h2`
    font-size: 3.2rem;
    font-weight: 700;
`;

const ArticleBody = styled.article`
    h2 {
        margin-block: 5rem 1rem;
        font-size: 2.2rem;
        font-weight: 600;
    }

    p {
        margin-bottom: 3rem;
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.3;
        color: #3b3c3d;
    }

    h2:last-child,
    p:last-child {
        margin: 0;
    }
`;

export default Article;
