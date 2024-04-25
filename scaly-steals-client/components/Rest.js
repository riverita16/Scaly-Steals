import { useEffect, useState } from "react";
import axios from "axios";
import Listings from "./Listings";

export default function Rest({category, except}) {
    const [products, setProducts] = useState();
    useEffect(() => {
        if (!category || !except) {
            return;
        }

        axios.get('/api/products').then(response => {
            setProducts(response.data.filter(product => product.category === category && product._id != except));
        });
    }, [category]);

    return (
        <Listings products={products}/>
    );
}