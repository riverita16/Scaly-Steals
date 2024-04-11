import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Rest from "@/components/Rest";

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
    background-color: #89CFF0;
    color: #fff;
    padding: 10px 0;
    width: 90%;
    border-radius: 20px;
`;

const StyledDiv = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center; 
`;

export default function ProductInfoPage() {
    const router = useRouter();
    const [productInfo,setProductInfo] = useState();
    const [category, setCategory] = useState();
    const {id} = router.query;
    const [except, setExcept] = useState();
    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data);
            setCategory(response.data.category)
            setExcept(id);
        });
    }, [id]);

    return (
        <Page>
            <Header />
            <Featured product={productInfo}/>
            <Bg>
                <StyledDiv>
                    <h2>More like this...</h2>
                </StyledDiv>
            </Bg>
            <Rest category={category} except={except}/>
        </Page>
    );
}