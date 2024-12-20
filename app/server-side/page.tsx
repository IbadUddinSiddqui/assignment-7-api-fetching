import React from 'react';

interface Book {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const BooksPage = async () => {
  const response = await fetch('https://simple-books-api.glitch.me/books/');

  const books: Book[] = await response.json();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Server Side Fetched Data</h1>
      <h1 className="text-2xl font-bold text-blue-400 mb-6">Available Books</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {books.map((book) => (
          <li
            key={book.id}
            className="flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-100">{book.name}</h2>
            <p className="text-sm text-gray-400 capitalize">Type: {book.type}</p>
            <p
              className={`mt-2 font-medium ${
                book.available ? 'text-green-400' : 'text-red-400'
              }`}
            >
              {book.available ? 'Available' : 'Unavailable'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksPage;
