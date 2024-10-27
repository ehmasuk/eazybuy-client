import Table from "@/components/Table";
import { fetchData } from "@/hooks/fetchData";

async function Products() {
    const allProducts = await fetchData("/products");
    return (
        <div>
            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800">Products</h2>
                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">{allProducts?.length}</span>
                </div>
                <div className="flex flex-col mt-6">
                    <Table
                        data={allProducts}
                        image={{ value: ["image"] }}
                        rows={[
                            { label: "Name", value: ["title"] },
                            { label: "Price", value: ["newPrice"] },
                            { label: "Old price", value: ["oldPrice"] },
                            { label: "Category", value: ["category","name"] },
                            { label: "Quantity", value: ["quantity"] },
                            { label: "Shipping", value: ["shipping"] },
                            { label: "description", value: ["description"] },
                        ]}
                        actions={true}
                    />
                    {/* <pre>{JSON.stringify(allProducts, null, 2)}</pre> */}
                </div>
            </section>
        </div>
    );
}

export default Products;
