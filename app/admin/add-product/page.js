"use client";
import { revalidate } from "@/hooks/fetchData";
import usePost from "@/hooks/usePost";
import { Button, Form, message, Select, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

function AddProduct() {
    const { postData, createCategoryLoading } = usePost();

    const onSuccess = () => {
        message.success("Category created successfully");
        form.resetFields();
        revalidate("/admin/categories");
    };

    const onError = (err) => {
        console.log(err);
        message.error(err.message);
    };

    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        try {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(values.image.fileList[0].originFileObj);
            fileReader.onload = () => {
                // postData("/category", { ...values, image: fileReader.result }, onSuccess, onError);
                console.log({ ...values, image: fileReader.result });
            };
        } catch (error) {
            console.log(error);
            message.error("Cannot read image file");
        }
    };

    return (
        <Form form={form} onFinish={handleSubmit}>
            <div className="bg-white mb-10 px-8 py-8 rounded-md">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-10">Add product</h2>
                <div className="grid lg:grid-cols-2 gap-x-20">
                    {/* title */}
                    <div>
                        <p className="mb-2 text-black">Title</p>
                        <FormItem name="title" rules={[{ required: true, message: "Please enter title" }]}>
                            <input className="w-full outline-none h-[44px] rounded-md border border-gray6 px-6" type="text" placeholder="Title" />
                        </FormItem>
                    </div>
                    {/* New price */}
                    <div>
                        <p className="mb-2 text-black">New Price</p>
                        <FormItem name="newPrice" rules={[{ required: true, message: "Please enter new price" }]}>
                            <input className="w-full outline-none h-[44px] rounded-md border border-gray6 px-6" min="0" type="number" placeholder="New Price" />
                        </FormItem>
                    </div>
                    {/* Old price */}
                    <div>
                        <p className="mb-2 text-black">Old price</p>
                        <FormItem name="oldPrice">
                            <input className="w-full outline-none h-[44px] rounded-md border border-gray6 px-6" type="number" placeholder="Old Price" />
                        </FormItem>
                    </div>
                    {/* Colors */}
                    <div>
                        <p className="mb-2 text-black">Colors</p>
                        <FormItem name="colors">
                            <Select className="w-full" defaultValue="select" options="" />
                        </FormItem>
                    </div>
                    {/* Sizes */}
                    <div>
                        <p className="mb-2 text-black">Sizes</p>
                        <FormItem name="sizes">
                            <Select className="w-full" defaultValue="select" options="" />
                        </FormItem>
                    </div>

                    {/* Category */}
                    <div>
                        <p className="mb-2 text-black">Category</p>
                        <FormItem name="Category" rules={[{ required: true, message: "Select product category" }]}>
                            <Select className="w-full" defaultValue="select" options="" />
                        </FormItem>
                    </div>
                    {/* shipping */}
                    <div>
                        <p className="mb-2 text-black">Shipping cost</p>
                        <FormItem name="shipping" rules={[{ required: true, message: "Enter shipping cost" }]}>
                        <input className="w-full outline-none h-[44px] rounded-md border border-gray6 px-6" type="number" placeholder="Shipping cost" />
                        </FormItem>
                    </div>
                    {/* image */}
                    <div>
                        <p className="mb-2 text-black">Product Image</p>
                        <FormItem name="image" valuePropName="image" rules={[{ required: true, message: "Please upload product image" }]}>
                            <Upload beforeUpload={() => false} maxCount={1}>
                                <Button>Click to Upload</Button>
                            </Upload>
                        </FormItem>
                    </div>
                    {/* Description */}
                    <div>
                        <p className="mb-2 text-black">Description</p>
                        <FormItem name="description" rules={[{ required: true, message: "Please enter description" }]}>
                            <TextArea placeholder="Write here..." autoSize={{ minRows: 2, maxRows: 10 }} />
                        </FormItem>
                    </div>
                </div>

                <button disabled="" type="submit" className="bg-violet-600 text-white rounded px-7 py-2">
                    Add Category
                </button>
            </div>
        </Form>
    );
}

export default AddProduct;
