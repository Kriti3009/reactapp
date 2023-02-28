import { Link } from "react-router-dom";
import styled from "styled-components";

const TrendingCard = (props) => {
    return (
        <Card>
            <Row>
                <AuthorImage
                    src={props.article.publisher_pic}
                    alt={props.article.publisher_name}
                />
                <AuthorName>{props.article.publisher_name}</AuthorName>
            </Row>
            <CardTitle>
                <Link to={"/blog/" + props.article.id}>
                    {props.article.article_title}
                </Link>
            </CardTitle>
            <CardFooter>{props.article.publish_date}</CardFooter>
        </Card>
    );
};

const Row = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

const AuthorImage = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
`;

const AuthorName = styled.p`
    font-size: 1.2rem;
`;

const CardTitle = styled.h2`
    font-size: 1.6rem;
    font-weight: 700;
`;

const CardFooter = styled.span`
    font-size: 1.2rem;
    font-weight: 400;
    color: #747474;
`;

export default TrendingCard;
