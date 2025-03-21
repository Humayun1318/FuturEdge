import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = ({ rating }) => {
  console.log(rating);
  const createRating = () => {
    return [...Array(rating)].map((_, idx) => (
      <span className={`${idx < Math.floor(rating) ? "text-yellow-500" : "text-gray-500"}`}>
        <FaStar className='inline-block'></FaStar>
      </span>
    ))
  }

  return (
    <div>
      {createRating()}
    </div>
  );
};

export default Rating;