import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import UserInfo from "@/components/UserInfo";
import Header from "@/components/Header";
import UserListings from "@/components/UserListings";

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

export default function profile() {
    const router = useRouter();
    const [userInfo,setUserInfo] = useState();
    const [productIds, setProductIds] = useState();
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get('/api/users?id='+id).then(response => {
            setUserInfo(response.data);
            setProductIds(response.data.products);
        });
    }, [id]);

    return (
        <Page>
            <Header />
            <UserInfo user={userInfo} />
            <UserListings ids={productIds} />
        </Page>
    );
}