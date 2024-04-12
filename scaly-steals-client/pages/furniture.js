import Featured from "@/components/Featured";
import Listings from "@/components/Listings";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import styled from "styled-components";

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

export default function FurniturePage({featuredProduct, furniture}) {
  return (
    <Page>
      <Header />
      <Featured product={featuredProduct}/>
      <Categories />
      <Listings products={furniture}/>
    </Page>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '6606d50f0e9cd5430ad592f9';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const furniture = await Product.find({category: 'furniture'}, null, {sort: {'_id':-1}, limit:10});
  
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      furniture: JSON.parse(JSON.stringify(furniture)),
    },
  };
}