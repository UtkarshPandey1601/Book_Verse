import React from 'react';

function BookCard({ book }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
            <img
                src={book.image}
                alt={book.name}
                className="w-full h-52 object-cover"
            />
            <div className="p-5 space-y-3">
                <h2 className="text-lg font-bold text-gray-800">{book.name}</h2>

                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-xs bg-blue-100 text-blue-600 font-medium px-2 py-0.5 rounded-full">
                        {book.genre}
                    </span>
                    <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${book.cat === 'free'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}
                    >
                        {book.cat === 'free' ? 'Free' : `₹${book.price}`}
                    </span>
                </div>

                <p className="text-sm text-gray-600">{book.title}</p>

                <button className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition">
                    {book.cat === 'free' ? 'Read Now' : 'Buy Now'}
                </button>
            </div>
        </div>
    );
}

export default BookCard;
