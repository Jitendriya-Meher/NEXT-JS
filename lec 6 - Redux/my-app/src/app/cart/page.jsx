"use client"

import { remove } from '@/Redux/CartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const page = () => {

    const item = useSelector((state)=>state.cart);
    const dispatch = useDispatch();

  return (
    <div>
      <h3>
        Cart Page
      </h3>
      <div className="cartWrapper">
        {
            item.map((prod) => (
                <div className="cartCard" key={prod.id}>
                    <img src={prod.image} alt="image" />
                    <h5>
                        {prod.title}
                    </h5>
                    <h5>
                        {prod.price}
                    </h5>
                    <button className='btn' onClick={() => {
                        dispatch(remove(prod.id));
                    }}>
                        Remove
                    </button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default page
