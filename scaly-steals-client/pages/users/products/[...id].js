import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductForm from "@/components/ProductForm";
import { useEffect, useState } from "react";
import styled from "styled-components";
const jwt = require('jsonwebtoken');

const secretKey = 'pz5KtSbxXoHcmvF992DHJoqEu'; 

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

const Bg = styled.div`
    background-color: #3EB489;
    color: #fff;
    padding: 50px 0;
    width: 90%;
    border-radius: 20px;
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

export default function NewProduct() {
  const [id, setId] = useState("");

  useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
          console.log("Access token not found in localStorage");
          return;
      }

      jwt.verify(accessToken, secretKey, (err, decoded) => {
          if (err) {
              console.error('Failed to verify token:', err.message);
              return;
          }
          
          setId(decoded._id);
      });
  }, []);

  return (
    <Page>
      <Header />
      <Bg>
        <Center>
          <Title>New Product</Title>
          <ProductForm user={id}/>
        </Center>
      </Bg>
    </Page>
  );
}