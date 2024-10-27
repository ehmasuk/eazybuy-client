import ProductsForm from "@/components/admin/ProductsForm";
import { fetchData } from "@/hooks/fetchData";

async function AddProducts() {

    const allCategories = await fetchData("/categories");
    const allSubCategories = await fetchData("/subcategories");
    const allColors = await fetchData("/colors");
    const allSizes = await fetchData("/sizes");


    return <ProductsForm allCategories={allCategories} allColors={allColors} allSizes={allSizes} allSubCategories={allSubCategories} />;
}

export default AddProducts;
