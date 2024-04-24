import styled from "styled-components";
import Center from "./Center";
import Listing from "./Listing";

const Bg = styled.div`
    background-color: #3EB489;
    color: #fff;
    padding: 20px 0;
    width: 90%;
    border-radius: 20px;
    max-height: 140;
`;

const ListingsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1.1fr));
    gap: 10px;
`;

export default function UserListings({user, ids}) {
    return (
        <Bg>
            <Center>
                <ListingsContainer>
                    {ids?.map(id => (
                        <Listing user={user} productId={id}/>
                    ))}
                </ListingsContainer>
            </Center>
        </Bg>
    );
}