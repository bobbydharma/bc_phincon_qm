/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useToast } from "../hooks/use-toast.tsx";
import { useDispatch } from "react-redux";
import { createProduct } from "../features/products/Product.slice.ts";

const ManageProductPage = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ProductData = {
      name: formData.name,
      price: Number(formData.price),
      category: formData.category,
      image: formData.image,
      stock: Number(formData.stock),
    }
    try {
        await dispatch(createProduct(ProductData) as any).unwrap();

        toast({
            title: "Success!",
            description: "Product has been saved successfully",
          });

          setFormData({
            name: "",
            price: "",
            category: "",
            image: "",
            stock: "",
          });
    } catch (error) {
        console.log("error creating product", error);
        toast({
            title: "Error!",
            description: "Failed to save product"
          });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Add/Edit Product
      </h2>

      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2 md:col-span-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700"
              >
                Price (Rp.)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></input>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="image"
                className="text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="stock"
                className="text-sm font-medium text-gray-700"
              >
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ManageProductPage;
