import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import CategoryForm from "@/components/CategoryForm";

export default function EditCategoryPage() {
  const [categoryInfo, setCategoryInfo] = useState(null);
  const router = useRouter();
  const {id} = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/api/categories?id='+id).then(response => {
      setCategoryInfo(response.data);
    });
  }, [id]);
  return (
    <Layout>
      <h1>Edit category</h1>
      {categoryInfo && (
        <CategoryForm {...categoryInfo} />
      )}
    </Layout>
  );
}