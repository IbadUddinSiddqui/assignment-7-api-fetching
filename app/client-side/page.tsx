"use client";
import React, { useEffect, useState } from 'react';

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Page: React.FC = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const fetchedData: Products[] = await response.json();
        setProducts(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); 
  return (
    
    
    <div className='bg-gray-900 mt-0'>
       
      <h1 className='text-5xl  text-white m-4 font-bold text-center '>Client-side Fetched Products</h1>
    <p className='text-center'>  {loading ? "Fetching Data....." : ""}</p>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
      {products.map((product) => (
    <li
      key={product.id}
      className="flex flex-col bg-gray-900 items-center mx-auto md:w-[375px] w-[300px] mxl:w-[450px] m-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white border border-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-blue-500"
    >
      <div className="w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col items-center space-y-2">
        <h2 className="text-lg font-semibold text-center">{product.title}</h2>
        <p className="text-sm text-gray-400 text-center">{product.description}</p>
        <p className="text-lg font-bold text-blue-400">
          ${product.price}
        </p>
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-b-lg transition-all duration-300">
        Add to Cart
      </button>
    </li>
  ))}
      </ul>
    </div>
     );
};

export default Page;
