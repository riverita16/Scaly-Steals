import Link from "next/link";
import Center from "@/components/Center";
import Listings from "@/components/Listings";
import styled from "styled-components";
import axios from "axios";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import { useState, useEffect } from "react";
const Page = styled.div`
  background-color: rgb(250, 222, 168);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  overflow: scroll;
  padding-bottom: 100px;
`;

const StyledHeader = styled.header`
    background-color: rgb(250, 222, 168);
`;

const LogoContainer = styled.div`
    width: 50%;
`;

const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;

    #gator {
        width: 40%;
        padding-right: 10px;
    }

    #logo {
        width: 50%;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
`;

const SearchBar = styled(Link)`
    color: #000;
    width: 100%;
    height: 75%;
    align-content: center;
    margin-top: 5px;
    margin-left: 10px;
    margin-right: 10px;
    display: flex;
    text-decoration: none;

    svg {
        width: 20px;
        color: #000;
    }

    input {
        background-color: #fff;
        border-radius: 10px;
        border: none;
        height: 30px;
        width: 90%;
        margin-left: 5px;
        padding-left: 5px;
    }

    input:focus {
        outline: none;
    }
`;

const StyledNav = styled.nav`
    width: 50%;
    display: flex;
    gap: 15px;
    padding-top: 10px;
`;

const NavLink = styled(Link)`
    color: black;
    text-decoration: none;

    svg {
        width: 40%;
    }
`;

export default function SearchPage({user}) {
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if(search.length >= 0)
    {
       axios.get('/api/search?query='+encodeURIComponent(search))
       .then(response => {setProduct(response.data)});
    }
   }, [search])
  

  return (
    <Page>
        <StyledHeader>
            <Center>
                <Wrapper>
                    <LogoContainer>
                        <Logo href={'/'}><img id="gator" src="/images/gator.png" alt="Gator" /><img id="logo" src="/images/scaly-steals.png" alt="Scaly Steals" /></Logo>
                    </LogoContainer>
                    <SearchBar href={'/search'}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input 
                            autoFocus
                            placeholder="Search listings..."
                            value={search}
                            onChange={(ev) => setSearch(ev.target.value)}
                            // onKeyPress={handleKeyPress}
                            />
                    </SearchBar>
                    <StyledNav>
                        <NavLink href={'/saved'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </NavLink>
                        <NavLink href={'/cart'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </NavLink>
                        <NavLink href={'/users/profile/'+user?._id}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </NavLink>
                    </StyledNav>
                </Wrapper>
            </Center>
        </StyledHeader>
      <Listings user={user?._id} products={product}/>
    </Page>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '6606d50f0e9cd5430ad592f9';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
    },
  };
}