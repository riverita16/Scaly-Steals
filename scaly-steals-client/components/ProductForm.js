import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Spinner from "@/components/Loader";
import {ReactSortable} from "react-sortablejs";
import styled from "styled-components";

const PlaceholderText = styled.div`
    color: #FFF;
`;

const PhotoDiv = styled.div`
    margin-top: 10px;
`;

const CategoryDiv = styled.div`
    display: flex;
    flex-direction: column;
    select {
        color: #000;
    }
`;

const Input = styled.input`
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
`;

const TextArea = styled.textarea`
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    min-height: 100px; /* Set a minimum height */
`;

export default function ProductForm({
  _id,
  title:existingTitle,
  description:existingDescription,
  user,
  price:existingPrice,
  images:existingImages,
  category:assignedCategory,
}) {
    const [title,setTitle] = useState(existingTitle || '');
    const [description,setDescription] = useState(existingDescription || '');
    const [category,setCategory] = useState(assignedCategory || '');
    const [price,setPrice] = useState(existingPrice || '');
    const [images,setImages] = useState(existingImages || []);
    const [goToProducts,setGoToProducts] = useState(false);
    const [isUploading,setIsUploading] = useState(false);
    const [categories,setCategories] = useState([]);
    const router = useRouter();

    useEffect(() => {
        axios.get('/api/categories').then(result => {
            setCategories(result.data);
        })
    }, []);

    async function saveProduct(ev) {
        ev.preventDefault();
        const data = {
            title,description,user,price,images,category
        };

        await axios.put('/api/products', data);

        setGoToProducts(true);
    }

    if (goToProducts) {
        router.push('/users/profile/'+user);
    }

    async function uploadImages(ev) {
        const files = ev.target?.files;
        if (files?.length > 0) {
            setIsUploading(true);
            const data = new FormData();
            for (const file of files) {
                data.append('file', file);
            }
            const res = await axios.post('/api/upload', data);
            setImages(oldImages => {
                return [...oldImages, ...res.data.links];
            });
            setIsUploading(false);
        }
    }

    function updateImagesOrder(images) {
        setImages(images);
    }

    return (
        <form onSubmit={saveProduct}>
            <label>Product name</label>
            <Input type="text" placeholder="product name" value={title} onChange={ev => setTitle(ev.target.value)}/>

            <CategoryDiv>
                <label>Category</label>
                <select value={category} onChange={ev => setCategory(ev.target.value)}>
                    <option value="">Uncategorized</option>
                    {categories.length > 0 && categories.map(c => (
                        <option>{c.name}</option>
                    ))}
                </select>
            </CategoryDiv>

            <PhotoDiv>
                <label>
                    Photos
                </label>
                <div className="mb-2 flex flex-wrap gap-1">
                    <ReactSortable list={images} className="flex flex-wrap gap-1" setList={updateImagesOrder}>
                        {!!images?.length && images.map(link => (
                        <div key={link} className="h-24 bg-white shadow-sm rounded-sm border border-gray-200">
                            <img id={link} src={link} alt="" className="h-full rounded-lg"/>
                            
                        </div>
                        ))}
                    </ReactSortable>

                    {isUploading && (
                        <div className="h-24 flex items-center">
                            <Spinner />
                        </div>
                    )}
                    
                    <label className="w-24 h-24 cursor-pointer text-center flex flex-col items-center justify-center text-sm gap-1 text-primary rounded-sm bg-white shadow-sm border border-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="25" height="25" strokeWidth={1.5} stroke="#FFF" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        <PlaceholderText>
                            Add image
                        </PlaceholderText>
                        <input type="file" onChange={uploadImages} className="hidden"/>
                    </label>
                </div>
            </PhotoDiv>

            <label>Description</label>
            <TextArea
            placeholder="description"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            />
            <label>Price (in USD)</label>
            <Input
            type="number" placeholder="price"
            value={price}
            onChange={ev => setPrice(ev.target.value)}
            />
            <button
            type="submit"
            className="btn-primary">
            Save
            </button>
        </form>
    );
}