import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CategoryForm({
    _id,
    name:existingName,
    description:existingDescription,
  }) {
    const [name,setName] = useState(existingName || '');
    const [description,setDescription] = useState(existingDescription || '');
    const [goToCategories,setGoToCategories] = useState(false);
    const router = useRouter();

    async function saveCategory(ev) {
        ev.preventDefault();
        const data = {
            name,description
        };
        if (_id) {
            //update
            await axios.put('/api/categories', {...data,_id});
        } else {
            //create
            await axios.post('/api/categories', data);
        }
        setGoToCategories(true);
    }

    if (goToCategories) {
        router.push('/categories');
    }

    return (
        <form onSubmit={saveCategory}>
            <label>Category name</label>
            <input type="text" placeholder="category name" value={name} onChange={ev => setName(ev.target.value)}/>
            <label>Description</label>
            <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>    
            <button type="submit" className="btn-primary">Save</button>    
        </form>
    );
  }