import React from 'react'
import BookCard from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
function DeskBook() {
    const [freebooks, setbooks] = useState([]);
    useEffect(() => {
        const getbooks = async () => {
            try {
                axios.get("http://localhost:4001/book/getbook").then((res) => {
                    setbooks(res.data.books.filter((book) => book.price === 0));
                });
            }
            catch (error) {
                console.error("Error fetching books:", error);
            }
        }
        getbooks();
    }, []);
    console.log(freebooks);
    return (
        <div className='max-w-screen-xl mx-auto md:px-20 px-5'>
            <h1 className='font-bold text-xl pb-2'>Free Offered Books</h1>
            <p>
                Free books offer knowledge, inspiration, and entertainment without cost. They promote equal access to education, support learning, and empower readers of all ages across genres, cultures, and backgrounds worldwide.
            </p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                    {freebooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default DeskBook
