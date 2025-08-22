import React from 'react';

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 rounded-xl to-indigo-600 text-white py-20">
            <div className="container mx-auto px-6 text-center">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Welcome to Our Store 🚀
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-2xl mb-8">
                    Discover amazing products at the best prices. Start your journey now!
                </p>

                {/* CTA Button */}
                <div className="flex justify-center gap-4">
                    <a
                        href="/products"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                    >
                        Explore Products
                    </a>
                    
                </div>
            </div>
        </section>
    );
};

export default Hero;