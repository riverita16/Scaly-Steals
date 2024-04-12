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

export default function UserListings({ids}) {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     if (!ids) {
    //         return;
    //     }

    //     console.log(ids.length);
        
    //     let promises = [];
    //     for (i = 0; i < ids.length; i++) {
    //         promises.push(
    //             axios.get('/api/products/'+ids[i]).then(response => {
    //                 console.log(ids[i]);
    //                 setProducts((prevProducts) => prevProducts.concat(response.data));
    //             })
    //         )
    //     }
    //     Promise.all(promises).then(() => console.log('hi'));
    // }, []);

    return (
        <Bg>
            <Center>
                <ListingsContainer>
                    {ids?.map(id => (
                        <Listing productId={id}/>
                    ))}
                </ListingsContainer>
            </Center>
        </Bg>
    );
}