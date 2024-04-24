import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { User } from "@/models/User";
import CartListings from "@/components/CartListings";
import Center from "@/components/Center";
import Button from "@/components/Button";

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

const Block = styled.div`
    background-color: #89CFF0;
    color: #fff;
    padding: 20px 0;
    width: 90%;
    border-radius: 20px;
`;

const Bottom = styled.div`
    background-color: #89CFF0;
    color: #fff;
    padding: 20px 0;
    width: 90%;
    border-radius: 20px;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    gap: 600px;
`;

export default function cart({user}) {
    const router = useRouter();
    const [productIds, setProductIds] = useState([]);
    const [total, setTotal] = useState(0);

    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }

        axios.get(`/api/users?id=${id}`).then(response => {
            setProductIds(response.data.cart || []);
            getTotal(response.data.cart || []);
        }).catch(error => console.error('Error fetching user cart:', error));
    }, [id]);

    async function getTotal(ids) {
        if (ids.length === 0) return;

        try {
            const { data } = await axios.post('/api/products', { ids });
            const sum = data.reduce((acc, product) => acc + product.price, 0);
            setTotal(sum);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    }

    return (
        <Page>
            <Header user={user}/>
            <Block>
                <Center>
                    <h1>Checkout</h1>
                </Center>
            </Block>
            <CartListings user={user._id} ids={productIds}/>
            <Bottom>
                <Center>
                    <h3>Total: ${total}</h3>
                    <Button reg pay><h3>Pay now</h3></Button>
                </Center>
            </Bottom>
        </Page>
    );
}

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