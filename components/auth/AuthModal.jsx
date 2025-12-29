import React, {useState} from 'react';
import { XIcon } from "lucide-react";
import PropTypes from 'prop-types';

export function AuthModal({onClose}) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle authentication logic here
        console.log(isLogin? 'Login' : 'Sign Up', {
            email, password, name
        });
        onClose();
    };
    {/* Modal Backdrop*/}
    return <div className= " fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 ">
        <div className=" bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden ">
            <button onClick={onClose} className= " absolute top-4 right-4 text-gray-500 hover:text-gray-700 ">
                <XIcon size={24} />
            </button>

            <div className= " bg-blue-600 p-6 text-white ">
                <h2 className= " text-2xl font-bold ">
                    {isLogin ?  'Welcome Back!' : 'Join Skill lift'}
                </h2>

                <p className= " mt-1 text-blue-100 ">
                    {isLogin ? 'Sign in to access your dashboard and continue learning' : 'Create an account to start your tech training journey'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className= " p-6 space-y-4 ">
                {!isLogin && <div>
                    <label htmlFor="name" className=" block text-sm font-medium text-gray-700 ">
                        Full Name
                    </label>
                    <input id="name" type="text" value={name} onChange={e=> setName(e.target.value)} className=" w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 " required />
                </div> }

                <div>
                    <label htmlFor="email" className=" block text-sm font-medium text-gray-700 ">
                        Email Address
                    </label>
                    <input id="email" type="email" value={email} onChange={e=> setEmail(e.target.value)} className=" w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 " required />
                </div>

                <div>
                    <label htmlFor="password" className=" block text-sm font-medium text-gray-700 ">
                        Password
                    </label>
                    <input id="password" type="password" value={password} onChange={e=> setPassword(e.target.value)} className=" w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 " required />
                </div>

                <div>
                    <button type="submit" className=" w-full px-4 py-2 mt-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offest-2 transition-colors">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </div>

                <div className="text-center text-sm">
                    <button type = "button" onClick={()=> setIsLogin(!isLogin)} className=" text-blue-600 hover:text-blue-800 font-medium">
                        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                    </button>
                </div>
            </form>
        </div>
    </div>
}

AuthModal.propTypes = {
    onClose: PropTypes.func.isRequired
}