import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import Button from "./Button";
import { useRouter } from "next/router";

const Title = styled.h3`
    margin: 0;
    font-weight: normal;
    font-size: 1.5rem;
`;

const Price = styled.p`
    color: #fff;
    font-size: 0.9rem;
`;

const ColumnsWrapper = styled.div`
    background-color: rgb(250, 222, 168);
    max-height: 100px;
    border-radius: 20px;
    padding: 15px 10px;
    padding-bottom: 36px;
    display: grid;
    grid-template-columns: 0.6fr 0.4fr;
    gap: 40px;
    align-items: center;

    img {
        max-width: 70%;
        max-height: 125px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 25px;
`;

export default function CartListing({user, productId}) {
    const router = useRouter();

    const [product, setProduct] = useState();

    async function removeFromCart(id) {
        await axios.delete('/api/cart?user='+user+'&id='+id);
        router.replace(router.asPath);
    }

    useEffect(() => {
        if (!productId) {
            return;
        }

        axios.get('/api/products?id='+productId).then(response => {
            setProduct(response.data);
        });
    }, [productId]);

    return (
        <ColumnsWrapper>
                <Column>
                    <div>
                        <Title>
                            {product?.title}
                        </Title>
                        <Price>
                            <b>Price:</b> {product?.price}
                        </Price>
                        <ButtonWrapper>
                            <ButtonLink reg outline white href={'/products/info/'+product?._id}>See more</ButtonLink>
                            <Button reg delete onClick={() => removeFromCart(product?._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                Remove
                            </Button>
                        </ButtonWrapper>
                    </div>
                </Column>
                <Column>
                    <img src={product?.images[0]} alt="" />
                </Column>
        </ColumnsWrapper>
    )
}