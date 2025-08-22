"use client";

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo + About */}
                    <div>
                        <h2 className="text-xl font-bold text-white">Mobile Shop</h2>
                        <p className="mt-2 text-sm">
                            A simple Next.js project with Navbar & Footer design.
                            Clean UI and responsive layout.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-2 space-y-2">
                            <li><a href="/" className="hover:text-white">Home</a></li>
                            <li><a href="/about" className="hover:text-white">About</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                            <li><a href="/services" className="hover:text-white">Services</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Contact</h3>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>Email: support@mywebsite.com</li>
                            <li>Phone: +880 1234-567890</li>
                            <li>Address: Dhaka, Bangladesh</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                    <p>©  MyWebsite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;