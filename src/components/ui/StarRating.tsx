import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 16 }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star 
        key={`star-${i}`} 
        className="text-accent-500 fill-accent-500"
        size={size} 
      />
    );
  }
  
  // Add half star if needed
  if (hasHalfStar) {
    stars.push(
      <div key="half-star" className="relative">
        <Star 
          className="text-gray-300 fill-gray-300" 
          size={size} 
        />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star 
            className="text-accent-500 fill-accent-500" 
            size={size} 
          />
        </div>
      </div>
    );
  }
  
  // Add empty stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star 
        key={`empty-star-${i}`} 
        className="text-gray-300 fill-gray-300" 
        size={size} 
      />
    );
  }
  
  return (
    <div className="flex items-center">
      {stars}
      <span className="ml-1 text-sm font-medium text-gray-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default StarRating;