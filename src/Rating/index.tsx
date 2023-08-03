import React, { useState } from 'react';

interface RatingProps {
  /**
   * @description 星星的最大个数
   * @default 6
   */
  maxStars: number;
  /**
   * @description 初始化点亮的星星个数
   * @default 1
   */
  initialRating?: number;
  /**
   * @description  Function
   */
  onChange?: (rating: number) => void;
   /**
   * @description 鼠标经过时触发事件
   */
  onMouseOver?: () => void;

}

const Rating: React.FC<RatingProps> = ({ maxStars, initialRating = 0, onChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (onChange) {
      onChange(selectedRating);
    }
    
  };

  return (
    <div className="start">
      {Array.from({ length: maxStars }, (_, index) => index + 1).map((star) => (
        <Star key={star} filled={star <= rating} onMouseOver={() => handleStarClick(star) as any} />
      ))}
    </div>
  );
};
type StarSize = 'lg' | 'sm';
interface StarProps {
  filled: boolean;
  onMouseOver: () => void;
}
const Star: React.FC<StarProps> = ({ filled, onMouseOver }) => {
  return (
    <span
      style={{
        cursor: 'pointer',
        color: filled ? 'gold' : 'gray',
        fontSize: '25px',
        marginRight: '10px',
      }}
      onMouseOver={onMouseOver}
    >
      ★
    </span>
  );
};
Rating.defaultProps = {
  maxStars: 6,
  initialRating: 1,
};
export default Rating;
