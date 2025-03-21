import { useState } from 'react';

export default function Like() {
    const [count, setCount] = useState(0);
    const [thumb, setThumb] = useState(null);
  
    const handleLike = () => {
      setCount(count + 1);
      setThumb('👍');
      setTimeout(() => setThumb(null), 1000);
    };
  
    const handleDislike = () => {
      if (count > 0) {
        setCount(count - 1);
        setThumb('👎');
        setTimeout(() => setThumb(null), 1000);
      }
    };
  
    return (
      <div className="actions">
        <button className="button" onClick={handleLike}>Like</button>
        <button className="button" onClick={handleDislike}>Dislike</button>
        <p className="counter">{count}❤️</p>
        {thumb && (
          <span className={`thumb ${thumb === '👍' ? 'up' : 'down'}`}>
            {thumb}
          </span>
        )}
      </div>
    );
}