'use client';

import { add } from "@/Redux/CartSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Home() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    console.log("products : ", data);

    setProducts(data);

  }

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  // const 

  useEffect( () => {
    getProducts();
  },[]);

  return (
    <div className="productsWrapper">

    {
      products.map((product) =>(
        <div className="card" key={product.id}>
          <img src={product.image} alt="image" />
          <h4>
            {product.title}
          </h4>
          <h5>
            {product.price}
          </h5>
          <button className="btn"
          onClick={()=>handleAdd(product)}>
            Add To Cart
          </button>
        </div>
      ))
    }
      
    </div>
  )
}
