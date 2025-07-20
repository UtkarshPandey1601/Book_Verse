import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-1">
            <div className="max-w-screen-xl mx-auto px-5 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-semibold text-white">BookVerse</h2>
                    <p className="mt-3 text-sm">
                        Your gateway to the world of books. Read more, grow more.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/books" className="hover:underline">Categories</Link></li>
                        <li><Link to="/books" className="hover:underline">Best Sellers</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                    <ul className="text-sm space-y-2">
                        <li>Email: support@bookverse.com</li>
                        <li>Phone: +91 98765 43210</li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5">
                &copy; {new Date().getFullYear()} BookVerse. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
