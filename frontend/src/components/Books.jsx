import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Card from './Card';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Books() {
    const [books, setBooks] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book/getbook");
                const bookList = res.data.books || [];
                const normalizedBooks = bookList.map(book => ({
                    ...book,
                    genre: book.genre?.trim()
                }));

                setBooks(normalizedBooks);

                const uniqueGenres = ['All', ...new Set(
                    normalizedBooks
                        .filter(book => book.genre)
                        .map(book => book.genre)
                )];
                setGenres(uniqueGenres);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBooks();
    }, []);

    const filteredBooks = books.filter(book =>
        selectedGenre === 'All' || book.genre === selectedGenre
    );

    return (
        <>
            <Navbar />
            <div className="max-w-screen-xl mx-auto md:px-20 px-5 mt-24">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-800">Thanks for logging in!</h1>
                    <p className="text-gray-600 mt-2 max-w-xl mx-auto">
                        Explore our curated selection of free and paid books. Whether you're looking to learn something new or dive into a story, we have something for you.
                    </p>
                </div>

                <div className="mt-6 flex justify-center">
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-4 py-2 mb-3.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition"
                    >
                        Go back to Home
                    </Link>
                </div>

                <div className="flex justify-center mb-8">
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                    >
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {filteredBooks.map((book) => (
                        <Card key={book.id} book={book} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Books;
