import { useState } from 'react';
import './style.css';

export const Star = ({ value, onSelect, glowing }) => {
  // const [glowing, setGlowing] = useState(false);

  //onClick={() => setGlowing(!glowing) && onSelect(value)}  NEJDE DÁT DVĚ UDÁLOSTI NA JEDEN KLIK, tím pádem si to musím uložit jako proměnnou a tu pak vložit na onClick NEASI

  const handleSelect = () => {
    onSelect(value);
  };

  return (
    <div
      onClick={handleSelect}
      className={glowing ? 'rating__star rating__star--on' : 'rating__star'}
    ></div>
  );
};
