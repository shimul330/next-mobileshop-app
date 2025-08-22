import React from "react";

const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        price: "$999",
        image: "https://i.ibb.co.com/6R52pq9V/mob1.jpg",
    },
    {
        id: 2,
        name: "Samsung Galaxy S24",
        price: "$899",
        image: "https://i.ibb.co.com/mLYcPkv/mob2.jpg",
    },
    {
        id: 3,
        name: "OnePlus 12",
        price: "$799",
        image: "https://i.ibb.co.com/QvBdcLKp/mob3.jpg",
    },
];

const ProductHighlights = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center mb-10">
                    Featured Products ⭐
                </h2>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition flex flex-col"
                        >
                            {/* Image wrapper */}
                            <div className="w-full aspect-[4/3]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 text-center flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="text-blue-600 font-bold">{product.price}</p>
                                </div>
                                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductHighlights;
