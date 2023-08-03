import React from 'react';
import Rating from '../index';

const App: React.FC = () => {
  const handleRatingChange = (rating: number) => {
    console.log('Selected rating:', rating);
    // 在这里可以处理评分变化后的逻辑
  };

  return (
    <div>
      <Rating initialRating={1} maxStars={6} onChange={handleRatingChange} />
    </div>
  );
};

export default App;
