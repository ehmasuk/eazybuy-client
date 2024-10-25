import { fetchData } from "@/hooks/fetchData";
import { Button, Select, Upload } from "antd";

async function SubCategories() {
    const allCategories = await fetchData("/categories");

    const categoriesSelect = allCategories?.map((category) => {
        return { value: category._id, label: category.name };
    });

    return (
        <div>
            <div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 lg:col-span-4">
                        <div className="bg-white px-8 py-8 rounded-md">
                            <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-10">Add sub category</h2>
                            <div className="mb-6">
                                <p className="mb-2 text-black">Upload Image</p>
                                <Upload>
                                    <Button>Click to Upload</Button>
                                </Upload>
                            </div>
                            {/* input */}
                            <div className="mb-6">
                                <p className="mb-2 text-black">Name</p>
                                <input className="input w-full outline-none h-[44px] rounded-md border border-gray6 px-6" type="text" placeholder="Name" />
                            </div>

                            {/* input */}
                            <div className="mb-6">
                                <p className="mb-2 text-black">Parent</p>
                                <Select className="w-full" defaultValue="select" options={categoriesSelect} />
                            </div>

                            <button className="bg-violet-600 text-white rounded px-7 py-2">Add Category</button>
                        </div>
                    </div>

                    <div className="col-span-12 lg:col-span-8">
                        <div className="relative overflow-x-auto bg-white px-8 py-4 rounded-md">
                            <div className="overflow-scroll 2xl:overflow-visible">
                                <div className="w-[975px] 2xl:w-full">
                                    <section className="container px-4 mx-auto">
                                        <div className="flex items-center gap-x-3">
                                            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Sub categories</h2>
                                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">100 users</span>
                                        </div>
                                        <div className="flex flex-col mt-6">
                                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                                    <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                                        <table className="min-w-full divide-y divide-gray-200">
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
                                                                    <th scope="col" className="relative py-3.5 px-4">
                                                                        <span className="sr-only">Edit</span>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y divide-gray-200">
                                                                <tr>
                                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                                        <div className="inline-flex items-center gap-x-3">
                                                                            <input type="checkbox" className="text-blue-500 border-gray-300 rounded" />
                                                                            <div className="flex items-center gap-x-2">
                                                                                <img
                                                                                    className="object-cover w-10 h-10 rounded-full"
                                                                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                                                                    alt
                                                                                />
                                                                                <div>
                                                                                    <h2 className="font-medium text-gray-800 dark:text-white ">fashion</h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-4 text-sm text-gray-500">fashion</td>

                                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                                        <div className="flex items-center gap-x-6">
                                                                            <button className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth="1.5"
                                                                                    stroke="currentColor"
                                                                                    className="w-5 h-5"
                                                                                >
                                                                                    <path
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                            <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                                                                                <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                    strokeWidth="1.5"
                                                                                    stroke="currentColor"
                                                                                    className="w-5 h-5"
                                                                                >
                                                                                    <path
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
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
        </div>
    );
}

export default SubCategories;
