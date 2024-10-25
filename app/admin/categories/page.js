import CategoryForm from "@/components/admin/CategoryForm";
import { fetchData } from "@/hooks/fetchData";
import { HiOutlineTrash } from "react-icons/hi2";
import { LiaEditSolid } from "react-icons/lia";

async function Categories() {
    const allCategories = await fetchData("/categories");

    return (
        <div>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-4">
                    <CategoryForm />
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <div className="relative overflow-x-auto bg-white px-8 py-4 rounded-md">
                        <div className="overflow-scroll 2xl:overflow-visible">
                            <div className="w-[975px] 2xl:w-full">
                                <section className="container px-4 mx-auto">
                                    <div className="flex items-center gap-x-3">
                                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Categories</h2>
                                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">{allCategories?.length}</span>
                                    </div>
                                    <div className="flex flex-col mt-6">
                                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                                            <tr>
                                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">
                                                                    <div className="flex items-center gap-x-3">
                                                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded " />
                                                                        <span>Name</span>
                                                                    </div>
                                                                </th>

                                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Slug
                                                                </th>

                                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                    Actions
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                            {allCategories?.map((category, index) => {
                                                                return (
                                                                    <tr key={index}>
                                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                            <div className="inline-flex items-center gap-x-3">
                                                                                <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                                                                                <div className="flex items-center gap-x-2">
                                                                                    <img className="object-contain w-10 h-10" src={category.image} alt="image" />
                                                                                    <div>
                                                                                        <h2 className="font-medium text-gray-800 ">{category.name}</h2>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                        <td className="px-4 py-4 text-sm text-gray-500">{category.slug}</td>

                                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                            <div className="flex items-center gap-x-6">
                                                                                <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                                                    <HiOutlineTrash fontSize={20} />
                                                                                </button>
                                                                                <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                                                                    <LiaEditSolid fontSize={20} />
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                );
                                                            })}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;