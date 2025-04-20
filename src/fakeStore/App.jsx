import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const result = await axios.get("https://fakestoreapi.com/products");
      setProducts(result.data);
      console.log("Fetched Data:", result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function trimContent(text, length) {
    return text.split(" ").length > length 
      ? `${text.split(" ").slice(0, length).join(" ")}...`
      : text;
  }

  return (
    <div className='flex justify-around items-center gap-3 flex-wrap'>
      {
        products.length > 0 && products.map((product) => (
          <div key={product.id} className="border p-4 w-[23%] text-center h-96 " >
            <img src={product.image} alt={product.title} width={150} className="mx-auto h-1/2 w-full" />
            <p>{trimContent(product.title, 8)}</p>
            <p>${product.price}</p>
            <button className="bg-blue-500 text-white px-2 py-1 m-1 rounded">Add to wishlist</button>
            <button className="bg-green-500 text-white px-2 py-1 m-1 rounded">Add to cart</button>
          </div>
        ))
      }
    </div>
  );
};

export default App;
