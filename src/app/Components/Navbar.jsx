"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  
  if (status === "loading") {
    return null; 
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
  ];

  if (status === "authenticated") {
    navItems.push({ name: "Add Product", path: "/addProducts" });
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Left Side - Project Name */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">Mobile Shop</Link>
      </div>

      {/* Center - Menu Items */}
      <div className="flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-2 py-1 rounded-md transition ${
              pathname === item.path
                ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                : "hover:text-blue-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right Side - Auth Buttons */}
      <div className="flex items-center space-x-3">
        {status === "authenticated" ? (
          <button
            onClick={() => signOut()}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
