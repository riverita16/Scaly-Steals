import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

// 6:47:50

const StyledHeader = styled.header`
    background-color: green;
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 15px;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Center>
                <Wrapper>
                    <Logo href={'/'}>Scaly Steals</Logo>
                    <StyledNav>
                        <NavLink href={'/'}>Home</NavLink>
                        <NavLink href={'/account'}>Account</NavLink>
                        <NavLink href={'/cart'}>Cart (0)</NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
    )
}