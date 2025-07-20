import React from 'react';
import { useNavigate } from 'react-router-dom';
function Hero() {
    const navigate=useNavigate();
    return (
        <div className='max-w-screen-xl mx-auto md:px-20 px-5 py-20 flex flex-col md:flex-row items-center'>
            {/* Left Side */}
            <div className='w-full md:w-1/2 space-y-6'>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                    Discover Your Next Favorite Book
                </h1>
                <p className='text-gray-600 text-lg'>
                    Dive into a world of imagination, knowledge, and adventure. Browse thousands of titles from all genres, handpicked for every reader.
                </p>
                <button className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300'
                onClick={() => navigate('/books')}>
                    Browse Collection
                </button>
            </div>

            {/* Right Side */}
            <div className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-center'>
                <img
                    src='https://images.unsplash.com/photo-1512820790803-83ca734da794'
                    alt='Books'
                    className='rounded-2xl shadow-lg max-w-full h-auto'
                />
            </div>
        </div>
    );
}

export default Hero;
