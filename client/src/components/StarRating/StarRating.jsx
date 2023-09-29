import React from 'react';

export default function StarRating ({ rating }){
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="text-yellow-400">&#9733;</span>); 
    } else {
      stars.push(<span key={i} className="text-gray-400">&#9733;</span>); 
    }
  }

  return <span className="flex">{stars}</span>;
  // return stars;
};


