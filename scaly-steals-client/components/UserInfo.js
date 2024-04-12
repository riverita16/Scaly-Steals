import Center from "./Center";
import styled from "styled-components";

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
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                    {/* {user?.images} */}
                        <img src='/images/testpfp.JPG' alt=""/>
                    </Column>
                    <Column>
                        <div>
                            <Username>
                                {user?.name}
                            </Username>
                            <Desc>
                                we will add rating and stuff here...
                            </Desc>
                        </div>
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}