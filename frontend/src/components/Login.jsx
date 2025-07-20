import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
    const closeModal = () => {
        document.getElementById('login-modal').close();
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post('http://localhost:4001/user/login', userInfo).then((response) => {
            console.log(response.data);
            if (response.data) {
                toast.success("Login successful");
                localStorage.setItem('user', JSON.stringify(response.data.user));
                closeModal();
                setTimeout(() => {
                    toast.success('Login Successfully');
                    window.location.reload();
                }, 3000);

            }
        }).catch((error) => {
            if (error.response && error.response.status === 400) {
                toast.error("Invalid Credential");
            }
        })
    }

    return (
        <div>
            <dialog id="login-modal" className="modal">
                <div className="modal-box bg-white text-gray-800 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative">
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 text-xl font-bold focus:outline-none"
                    >
                        &times;
                    </button>

                    <h3 className="font-bold text-3xl text-center mb-6">Welcome Back</h3>

                    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
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
                            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
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
                            Sign In
                        </button>

                        <p className="text-sm text-center text-gray-600 mt-2">
                            Not registered?{' '}
                            <Link to="/signup" className="text-blue-600 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
