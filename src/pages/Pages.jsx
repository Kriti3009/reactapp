import { Routes, Route } from "react-router-dom";
import Article from "./Article";
import Blogs from "./Blogs";
import Home from "./Home";

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:articleID" element={<Article />} />
        </Routes>
    );
};

export default Pages;
