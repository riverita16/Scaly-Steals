import styled from "styled-components";
import Center from "./Center";
import Listing from "./Listing";
import { useEffect, useState } from 'react';
const jwt = require('jsonwebtoken');



const secretKey = 'pz5KtSbxXoHcmvF992DHJoqEu'; 


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

    const [items, setItems] = useState([]);

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
            
            setItems(decoded.products);
        });
    }, []);

    return (
        <Bg>
            <Center>
                <ListingsContainer>
                    {items}
                </ListingsContainer>
            </Center>
        </Bg>
    );
}