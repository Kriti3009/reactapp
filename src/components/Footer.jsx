import styled from "styled-components";

const Footer = () => {
    return (
        <FooterSection>
            <img src="/images/logoapp.png" alt="logo" />
            <p>Every idea needs a Medium</p>
            <Links>
                <span>About</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Help</span>
            </Links>
        </FooterSection>
    );
};

const FooterSection = styled.footer`
    padding-inline: 2rem;
    width: 100%;
    height: 11rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        height: 5.4rem;
        width: auto;
    }
`;

const Links = styled.div`
    display: flex;
    column-gap: 1rem;

    span {
        font-size: 1.2rem;
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default Footer;
