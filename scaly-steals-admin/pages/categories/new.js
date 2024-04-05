import ProductForm from "@/components/CategoryForm";
import { useState } from "react";

export default function NewCategory() {
    return (
        <Layout>
            <h1>New Category</h1>
            <CategoryForm/>   
        </Layout>
    );
}