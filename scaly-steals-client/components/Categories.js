import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";

const Bg = styled.div`
    background-color: #89CFF0;
    color: #fff;
    padding: 20px 0;
    width: 90%;
    border-radius: 20px;
`;

const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    gap: 15px;
    
`;

const NavLink = styled(Link)`
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    svg {
        width: 20%;
    }
`;

export default function Categories() {
    return (
        <Bg>
            <Center>
                <StyledNav>
                    <NavLink href={'/tools'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                        Tools
                    </NavLink>
                    <NavLink href={'/books'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        Books
                    </NavLink>
                    <NavLink href={'/electronics'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                        </svg>
                        Electronics
                    </NavLink>
                    <NavLink href={'/furniture'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Furniture
                    </NavLink>
                    <NavLink href={'/clothing'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3a3 3 0 006 0h6a1 1 0 011 1v7a1 1 0 01-1 1h-2.001L19 20a1 1 0 01-1 1H6a1 1 0 01-1-1l-.001-8.001L3 12a1 1 0 01-1-1V4a1 1 0 011-1h6zm11 1.999h-3.417l-.017.041a5.002 5.002 0 01-4.35 2.955L12 8a5.001 5.001 0 01-4.566-2.96L7.416 5H4v5l2.999-.001V19H17l-.001-9L20 9.999v-5z" />
                        </svg>
                        Clothing
                    </NavLink>
                    <NavLink href={'/vehicles'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.82 19H15v-1c0-2.21 1.79-4 4-4h.74l-1.9-8.44A2.009 2.009 0 0015.89 4H12v2h3.89l1.4 6.25h-.01A6.008 6.008 0 0013.09 17H7.82a2.996 2.996 0 00-3.42-1.94c-1.18.23-2.13 1.2-2.35 2.38A3.002 3.002 0 005 21c1.3 0 2.4-.84 2.82-2M5 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m14-4c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                        </svg>
                        Vehicles
                    </NavLink>
                </StyledNav>
            </Center>
        </Bg>
    )
}