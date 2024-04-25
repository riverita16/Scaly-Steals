import Header from "@/components/Header";
import Login from "@/components/Login";
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

export default function login() {

  return (
    <Page>
      <Header />
      <Login />
    </Page>
  );
}

// export async function getServerSideProps() {
//   await mongooseConnect();
//   const books = await Product.find({category: 'books'}, null, {sort: {'_id':-1}, limit:10});
  
//   return {
//     props: {
//       featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
//       books: JSON.parse(JSON.stringify(books)),
//     },
//   };
// }