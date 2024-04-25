import { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from "axios";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import Center from "./Center";
import ButtonLink from './ButtonLink';

const secretKey = 'pz5KtSbxXoHcmvF992DHJoqEu'; 
// const accessToken = localStorage.getItem("accessToken");

const Bg = styled.div`
    background-color: #fff;
    color: #000;
    padding: 30px 0;
    width: 90%;
    border-radius: 20px;
`;

const Username = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size: 3rem;
`;

const Desc = styled.p`
    color: #000;
    font-size: .8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.4fr 1.1fr;
    gap: 40px;

    img {
        max-width: 100%;
        border-radius: 50%;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function UserInfo({user}) {

    const [name, setName] = useState("Not logged in");
    const [id, setId] = useState();


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
            
            setName(decoded.name);
            setId(decoded._id)
        });
    }, []);

    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                    {/* {user?.images} */}
                        <img src='/images/testpfp.jpeg' alt=""/>
                    </Column>
                    <Column>
                        <div>
                            <Username>
                                {name}
                            </Username>
                            <Desc>
                                we will add rating and stuff here...
                            </Desc>
                            <ButtonLink reg primary href={'/users/products/'+id}>Create Listing</ButtonLink>
                        </div>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}