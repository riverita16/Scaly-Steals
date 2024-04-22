import Featured from "@/components/Featured";
import Listings from "@/components/Listings";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Listing from "@/components/Listing";
import axios from "axios";
import { useRouter, useRouterQuery } from "next/router";

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

export default function SearchPage({}) {
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
      <Header>
      </Header >
      <input 
        autoFocus
        placeholder="Search listings..."
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        />
      <Listings products={product}/>
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