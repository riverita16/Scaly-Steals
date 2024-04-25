import styled from "styled-components";
import Center from "./Center";
import CartListing from "./CartListing";

const Bg = styled.div`
    background-color: #89CFF0;
    color: #fff;
    padding: 20px 0;
    width: 90%;
    border-radius: 20px;
    max-height: 140;
`;

const ListingsContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(1, minmax(0, 1.1fr));
    gap: 10px;
`;

export default function CartListings({user, ids}) {
    return (
        <Bg>
            <Center>
                <ListingsContainer>
                    {ids?.map(id => (
                        <CartListing user={user} productId={id}/>
                    ))}
                </ListingsContainer>
            </Center>
        </Bg>
    );
}