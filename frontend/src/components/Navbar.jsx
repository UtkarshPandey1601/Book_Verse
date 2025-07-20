import React, { useEffect, useState } from 'react';
import Login from './Login';
import Logout from './Logout.jsx';
import { useAuth } from '../context/Authprovider.jsx';
import axios from 'axios';

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [auth] = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book/getbook');
        setBooks(res.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    getBooks();
  }, []);

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const navList = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/books">Books</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <div className={`max-w-screen-xl mx-auto md:px-20 px-5 fixed top-0 left-0 right-0 z-50 ${scroll ? 'shadow-md bg-gray-200' : 'bg-white'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navList}
          </ul>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IugSOE4YFNfRKis-N_gkVzo3ai0E2GgLfQ&s"
          alt="Logo"
          className="w-20 h-15 rounded-full"
        />
      </div>

      <div className="navbar-end space-x-3">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navList}
          </ul>
        </div>

        {/* Search Input */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search by book title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {searchTerm && (
            <ul className="absolute bg-white border w-full mt-1 rounded-md shadow-md max-h-60 overflow-y-auto z-50">
              {filteredBooks.length > 0 ? (
                filteredBooks.map((book) => (
                  <li key={book._id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {book.name}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">No books found.</li>
              )}
            </ul>
          )}
        </div>

        {auth ? (
          <Logout />
        ) : (
          <div>
            <a className="bg-black text-white px-2 py-2 rounded-md cursor-pointer" onClick={() => {
              document.getElementById('login-modal').showModal();
            }}>
              Login
            </a>
            <Login />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
