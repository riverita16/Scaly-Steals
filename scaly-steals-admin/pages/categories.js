import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('/api/categories').then(response => {
      setCategories(response.data);
    })
  }, []);

  // continue from 1:26:26
  return <Layout>
    <Link className="bg-green-700 text-white rounded-md py-1 px-2" href={'/categories/new'}>
      Add a new category
    </Link>
    <table className="basic mt-4">
      <thead>
        <tr>
          <td>Category name</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {categories.map(category => (
          <tr>
            <td>{category.name}</td>
            <td>
              buttons to edit
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Layout>
}
