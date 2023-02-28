import { Link } from "react-router-dom";
import styled from "styled-components";

const BlogCard = (props) => {
    return (
        <Card>
            <div className="cardLeft">
                <CardHeader>
                    <AuthorImage
                        src={props.blog.publisher_pic}
                        alt={props.blog.publisher_name}
                    />
                    <AuthorName>{props.blog.publisher_name}</AuthorName>
                </CardHeader>
                <CardTitle>
                    <Link to={"/blog/" + props.blog.id}>
                        {props.blog.article_title}
                    </Link>
                </CardTitle>
                <CardFooter>
                    <span>{props.blog.publish_date}</span>
                    <Tag>{props.blog.tag}</Tag>
                    <img src="/images/bookmark.png" alt="" />
                </CardFooter>
            </div>
            <div className="cardRight">
                <Link to={"/blog/" + props.blog.id}>
                    <img
                        src={props.blog.article_banner}
                        alt={props.blog.publisher_name}
                    />
                </Link>
            </div>
        </Card>
    );
};

const Card = styled.div`
    display: flex;
    column-gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #b0b0b0;

    &:last-child {
        padding: 0;
        border: none;
    }

    div.cardLeft {
        flex-grow: 1;
    }
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    column-gap: 8px;
`;

const AuthorImage = styled.img`
    height: 20px;
    width: 20px;
    border-radius: 50%;
`;

const AuthorName = styled.h4`
    font-size: 1.2rem;
`;

const CardTitle = styled.h2`
    margin-block: 1rem;
    font-size: 22px;
    font-weight: 700;
`;

const CardFooter = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    span {
        font-size: 1.2rem;
        font-weight: 400;
        color: #757575;
    }

    img {
        cursor: pointer;
        margin-left: auto;
    }
`;

const Tag = styled.span`
    display: block;
    padding: 2px 8px;
    border-radius: 20px;
    color: #757575;
    background: #f2f2f2;
    cursor: pointer;
    transition: background 0.2s linear;

    &:hover {
        background: #e6e6e6;
    }
`;

export default BlogCard;
