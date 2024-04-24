import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import axios from "axios";

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

const Desc = styled.p`
    color: #fff;
    font-size: .8rem;
`;

const Price = styled.p`
    color: #fff;
    font-size: 1rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;

    img {
        max-width: 100%;
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

export default function Featured({user, product}) {
    async function saveProduct(id) {
        const data = { id, user };
        await axios.post('/api/saved', data);
    }

    async function addToCart(id) {
        const data = { id, user };
        await axios.post('/api/cart', data);
    }

    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>
                                {product?.title}
                            </Title>
                            <Desc>
                                {product?.description}
                            </Desc>
                            <Price>
                                <b>Price:</b> {product?.price}
                            </Price>
                            <ButtonWrapper>
                                <ButtonLink reg outline white href={'/products/info/'+product?._id}>See more</ButtonLink>
                                <Button primary onClick={() => addToCart(product._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                                    </svg>
                                    Add to cart
                                </Button>
                                <Button reg like onClick={() => saveProduct(product._id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </Button>
                            </ButtonWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src={product?.images[0]} alt=""/>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}