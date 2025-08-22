"use client"
import Link from 'next/link';
import React from 'react';
import { signIn, } from "next-auth/react"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';




const LoginForm = () => {

    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast("subneting....")
        try {
            const res = await signIn("credentials", {
                redirect: false,  
                email,
                password,
            });

            if (res?.ok) {
              toast.success("loggein Success")
                router.push("/"); 
                form.reset(); 
            } else {
                toast.error("Invalid credentials ❌");
            }
        } catch (error) {
           
            toast.error("Something went wrong");
        }
    };


    return (
        <form onSubmit={handleLogin} className="space-y-5">
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

            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
                Login
            </button>
            <p className="text-center flex justify-center text-sm text-gray-500 mt-6">
                <h6> Don’t have an account?{" "}</h6>

                <Link href='/register'>
                    <h1 className="text-blue-500 hover:underline"> Sign Up</h1>
                </Link>
            </p>
        </form>
    );
};

export default LoginForm;