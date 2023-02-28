import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Navbar>
                <Logo to={"/"}>
                    <img src="/images/logoapp.png" alt="logo" />
                    <p>Blogger</p>
                </Logo>
                <Nav>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blogs"}>Blogs</NavLink>
                    </li>
                </Nav>
            </Navbar>
        </header>
    );
};

const Navbar = styled.nav`
    margin: auto;
    height: 80px;
    width: 90%;
    max-width: 1440px;
    display: flex;
    background: #388d80;
    align-items: center;
    justify-content: space-between;

    img {
        height: 50px;
        width: auto;
    }
`;

const Logo = styled(Link)`
    display:flex;
    align-items: center;
    column-gap: 6px;
    p {
       
        font-size: 24px;
        color: white;
    }
`;

const Nav = styled.ul`
    display: flex;
    column-gap: 2rem;

    a {
        color: #fff;
    }
`;

export default Header;
