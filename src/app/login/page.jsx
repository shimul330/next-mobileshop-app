import Link from 'next/link';
import React from 'react';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
    return (
          <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 mt-5">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Welcome Back 👋
                </h2>

                {/* login Form */}
                <LoginForm/>
            </div>
        </div>
    );
};

export default LoginPage;