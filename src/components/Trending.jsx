import { useEffect, useState } from "react";
import styled from "styled-components";
import TrendingCard from "./TrendingCard";

const Trending = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getTrending();
    }, []);

    const getTrending = async () => {
        const response = await fetch("/api/articles.json");
        const data = await response.json();
        setArticles(data.slice(0, 6));
    };

    return (
        <div className="trendingWrapper">
            <TrendingSection>
                <Row>
                    <img src="/images/trending.png" alt="trending" />
                    <h3>TRENDING ON MEDIUM</h3>
                </Row>
                <Grid>
                    {articles.map((article) => {
                        return (
                            <TrendingCard key={article.id} article={article} />
                        );
                    })}
                </Grid>
            </TrendingSection>
        </div>
    );
};

const TrendingSection = styled.main`
    margin: auto;
    padding-block: 4rem;
    width: 90%;
    max-width: 1440px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;

    h3 {
        font-size: 1.2rem;
    }
`;

const Grid = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
`;

export default Trending;
