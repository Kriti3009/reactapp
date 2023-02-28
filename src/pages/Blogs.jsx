import { useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const response = await fetch("/api/articles.json");
        const data = await response.json();
        setBlogs(data);
    };

    return (
        <div className="blogWrapper">
            <Main>
                {blogs.map((blog) => {
                    return <BlogCard key={blog.id} blog={blog} />;
                })}
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
    row-gap: 2rem;

    div.cardRight a,
    div.cardRight img {
        display: block;
        height: 150px;
        width: auto;
    }
`;

export default Blogs;
