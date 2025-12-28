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
    return <div className= " fixed insert-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6 ">
        <div className=" bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden ">
            <button onClick={onClose} className= " absolute top-4 right-4 text-gray-500 hover:text-gray-700 ">
                <XIcon size={24} />
            </button>

            <div className= " ">
                <h2 className= " ">
                    {isLogin ?  'Welcome Back!' : 'Join Skill lift'}
                </h2>

                <p className= " ">
                    {isLogin ? 'Sign in to access your dashboard and continue learning' : 'Create an account to start your tech training journey'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className= " ">
                {!isLogin }
            </form>
        </div>
    </div>
}

AuthModal.propTypes = {
    onClose: PropTypes.func.isRequired
}