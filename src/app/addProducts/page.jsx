"use client";
import React from 'react';
import toast from 'react-hot-toast';
import { addProduct } from '../actions/addProduct';

const AddProductForm = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;



    // Step 1: Image Upload
    const imageFile = form.image.files[0];
    let imageUrl = "";
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("image", imageFile);

        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          { method: "POST", body: formData }
        );

        const data = await res.json();
        if (!data.success) {
          toast.error("❌ Image upload failed!");
         
          return;
        }
        imageUrl = data.data.url;
      } catch (err) {
        console.error(err);
        toast.error("❌ Image upload error!");
       
        return;
      }
    }

    // Step 2: Product Data
    const productData = {
      itemName: form.name.value,
      company: form.company.value,
      price: parseFloat(form.price.value),
      discount: parseFloat(form.discount.value),
      description: form.description.value,
      image: imageUrl,
    };

    try {
      // Step 3: Call Server Action
      const result = await addProduct(productData);
      if (result?.acknowledged) {
        toast.success("✅ Product added successfully!");
        form.reset();
      } else {
        toast.error("❌ Failed to add product!");
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Server error!");
    } finally {
      
    }
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 mt-3">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Add New Product
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Name */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name='name'
              placeholder="Enter product name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>



          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Company
            </label>
            <input
              type="text"
              name='company'
              placeholder="Company name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Price
            </label>
            <input
              type="number"
              name='price'
              placeholder="Enter price"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Discount */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Discount (%)
            </label>
            <input
              type="number"
              name='discount'
              placeholder="Enter discount"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>



          {/* Image Upload */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Product Image
            </label>
            <input
              type="file"
              name='image'
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Write product description..."
              name='description'
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-full">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default AddProductForm;