import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import StarRating from './StarRating';

interface CardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  description: string;
  price: number;
  badge?: string;
  rating?: number;
  type: 'destination' | 'flight' | 'bus';
  additionalInfo?: ReactNode;
}

const Card = ({
  id,
  image,
  title,
  location,
  description,
  price,
  badge,
  rating,
  type,
  additionalInfo
}: CardProps) => {
  const urlPrefix = type === 'destination' 
    ? '/destinations/' 
    : type === 'flight' 
      ? '/flights/' 
      : '/buses/';

  return (
    <div className="card group h-full flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-secondary-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-2 rounded">
            {badge}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          {rating !== undefined && <StarRating rating={rating} />}
        </div>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {description}
        </p>
        
        {additionalInfo && (
          <div className="mt-auto mb-4">
            {additionalInfo}
          </div>
        )}
        
        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
          <div className="text-primary-950">
            <span className="text-xl font-bold">₹{price}</span>
            {type === 'destination' && (
              <span className="text-sm text-gray-500"> / person</span>
            )}
          </div>
          <Link 
            to={`${urlPrefix}${id}`} 
            className="btn-outline text-sm py-1"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;