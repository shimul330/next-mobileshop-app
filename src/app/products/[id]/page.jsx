import React from 'react';
import { ArrowRight } from "lucide-react"
import Link from 'next/link';

const ProductDetails = async ({ params }) => {
    const p = await params;
     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${p.id}`);
    const data = await res.json();
    console.log(data)
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white shadow-lg rounded-2xl p-6">
                {/* Image Section */}
                <div className="w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-xl">
                    <img
                        src={data.image}
                        alt={data.itemName}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                        {data.itemName}
                    </h1>
                    <p className="text-gray-500 text-sm">{data.company}</p>
                    <p className="text-gray-700">{data.description}</p>
                    <p className="font-semibold text-lg">
                        Price:{" "}
                        <span className="text-green-600">${data.price}</span> |{" "}
                        <span className="text-red-500">{data.discount}% Off</span>
                    </p>

                    
                </div>
            </div>

            {/* Arrow Button */}
            <div className="flex justify-end mt-6">
                <Link href='/products'>
                    <button
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg shadow"
                    >
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;