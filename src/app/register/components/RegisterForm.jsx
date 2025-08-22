"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import Link from 'next/link';
import React from 'react';

const RegisterForm = () => {
    const handleRegister = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        registerUser({name, email, password})
    }
    return (
        <form onSubmit={handleRegister} className="space-y-5">

            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name='name'
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    name='email'
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Password */}
            <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Password
                </label>
                <input
                    type="password"
                    name='password'
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>



            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                </label>
                <a href="#" className="text-blue-500 hover:underline">
                    Forgot password?
                </a>
            </div>

            {/* Button */}
            <button
                type="submit"

                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Sign up
            </button>

            <p className="text-center flex justify-center text-sm text-gray-500 mt-6">

                <h5>Allready have an account?{" "}</h5>

                <Link href='/login'>
                    <h1 className="text-blue-500 hover:underline"> Sign in</h1>
                </Link>
            </p>
        </form>
    );
};

export default RegisterForm;