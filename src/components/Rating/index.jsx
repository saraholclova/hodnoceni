import { useState } from 'react';
import { Star } from '../Star';
import './style.css';

export const Rating = () => {
  const [rating, setRating] = useState(0);

  const klikNaHvezdu = (value) => {
    setRating(value);
  };

  return (
    <div className="rating">
      <div className="rating__value">{rating}</div>
      <div className="rating__stars">
        <Star value={1} onSelect={klikNaHvezdu} />
        <Star value={2} onSelect={klikNaHvezdu} />
        <Star value={3} onSelect={klikNaHvezdu} />
        <Star value={4} onSelect={klikNaHvezdu} />
        <Star value={5} onSelect={klikNaHvezdu} />
      </div>
    </div>
  );
};
