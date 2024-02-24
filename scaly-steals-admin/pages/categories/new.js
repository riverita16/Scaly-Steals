import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function NewCategory() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [goToCategories, setGoToCategories] = useState(false);
    const router = useRouter();

    async function createCategory(ev) {
        ev.preventDefault();
        const data = {name, description};
        await axios.post('/api/categories', data);
        setGoToCategories(true);
    }

    if (goToCategories) {
        router.push('/categories');
    }

    return <Layout>
        <form onSubmit={createCategory}>
            <h1>New Category</h1>
            <label>Category name</label>
            <input type="text" placeholder="category name" value={name} onChange={ev => setName(ev.target.value)}/>
            <label>Description</label>
            <textarea placeholder="description" value={description} onChange={ev => setDescription(ev.target.value)}></textarea>    
            <button type="submit" className="btn-primary">Save</button>    
        </form>
    </Layout>
}