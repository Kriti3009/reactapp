import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Hero = () => {
    return (
        <div className="heroWrapper">
            <HeroSection>
                <h1>Stay curious.</h1>
                <p>
                    Discover stories, thinking, and expertise from writers on
                    any topic.
                </p>
                <Button to={"/blogs"}>Start Reading</Button>
            </HeroSection>
        </div>
    );
};

const HeroSection = styled.section`
    width: 90%;
    max-width: 480px;
    background: #388d80;

    h1 {
        font-family: serif;
        font-size: 8rem;
    }

    p {
        margin-block: 4rem;
        font-size: 2.4rem;
    }
`;

const Button = styled(NavLink)`
    padding: 1rem 5rem;
    background: #000;
    color: #e0e0e0;
    font-size: 2rem;
    border-radius: 3rem;
`;

export default Hero;
