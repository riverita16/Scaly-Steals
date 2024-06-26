import Featured from "@/components/Featured";
import Listings from "@/components/Listings";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
import styled from "styled-components";
import { User } from "@/models/User";

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

export default function ToolsPage({featuredProduct, tools, user}) {
  return (
    <Page>
      <Header user={user}/>
      <Featured userId={user?._id} product={featuredProduct}/>
      <Categories />
      <Listings user={user?._id} products={tools}/>
    </Page>
  );
}

export async function getServerSideProps() {
  const featuredProductId = '6606d50f0e9cd5430ad592f9';
  const tempUserId = '6606c52955e3c5a7c65fed2f'; // CHANGE THIS WHEN WE HAVE LOGIN
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const tools = await Product.find({category: 'tools'}, null, {sort: {'_id':-1}, limit:10});
  const user = await User.findById(tempUserId);
  
  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      tools: JSON.parse(JSON.stringify(tools)),
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}