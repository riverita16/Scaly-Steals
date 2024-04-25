import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import UserInfo from "@/components/UserInfo";
import Header from "@/components/Header";
import UserListings from "@/components/UserListings";
import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
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

export default function profile({user}) {
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

    const router = useRouter();
    const [userInfo,setUserInfo] = useState();
    const [productIds, setProductIds] = useState();
    // const {id} = router.query;

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
            <Header  user={user}/>
            <UserInfo user={userInfo} />
            <UserListings user={user._id} ids={productIds} />
        </Page>
    );
}
// NOT IN USE

export async function getServerSideProps() {
    const tempUserId = '6606c52955e3c5a7c65fed2f'; // CHANGE THIS WHEN WE HAVE LOGIN
    await mongooseConnect();
    const user = await User.findById(tempUserId);

    return {
        props: {
            user: JSON.parse(JSON.stringify(user)),
        },
    };
}