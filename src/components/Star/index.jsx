import { useState } from 'react';
import './style.css';

export const Star = ({ value, onSelect }) => {
  const [glowing, setGlowing] = useState(false);

  const starClass = glowing ? 'rating__star rating__star--on' : 'rating__star';

  //onClick={() => setGlowing(!glowing) && onSelect(value)}  NEJDE DÁT DVĚ UDÁLOSTI NA JEDEN KLIK, tím pádem si to musím uložit jako proměnnou a tu pak vloži na onClick NEASI

  const handleSelect = () => {
    onSelect(value);
    setGlowing(!glowing);
  };

  return (
    <div onClick={handleSelect} className={starClass}>
      {/* {value} */}
    </div>
  );
};
