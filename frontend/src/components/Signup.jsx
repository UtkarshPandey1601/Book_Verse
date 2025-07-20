import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Signup() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.name,
            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:4001/user/signup', userInfo).then((response) => {
            console.log(response.data);
            if (response.data) {
                toast.success("Account created successfully");
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigate('/');
            }
        }).catch((error) => {
            if (error.response && error.response.status === 400) {
                toast.error("Account already exists");
            }
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative">
            <div className="w-full max-w-md bg-white text-gray-800 rounded-2xl shadow-xl p-8 relative">

                {/* Close (X) button */}
                <button
                    onClick={() => navigate('/')}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-xl font-bold focus:outline-none"
                >
                    &times;
                </button>

                <h3 className="font-bold text-3xl text-center mb-6">Create Account</h3>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="name" className="text-sm font-medium mb-1">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered w-full bg-gray-100 focus:bg-white focus:outline-blue-500"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span className='text-red-800'>Name is required</span>}

                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full bg-gray-100 focus:bg-white focus:outline-blue-500"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-800'>E-Mail is required</span>}

                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium mb-1">Password</label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full bg-gray-100 focus:bg-white focus:outline-blue-500"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-red-800'>Password is required</span>}

                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg transition duration-200"
                    >
                        Create Account
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-2">
                        Already have an account?{' '}
                        <span
                            className="text-blue-600 hover:underline cursor-pointer"
                            onClick={() => document.getElementById('login-modal').showModal()}
                        >
                            Login
                        </span>
                    </p>
                </form>
            </div>

            {/* Include Login Modal */}
            <Login />
        </div>
    );
}

export default Signup;
