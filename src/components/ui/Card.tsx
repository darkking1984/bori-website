import React from 'react';
import { CardProps } from '@/types';
import { cn } from '@/lib/utils';

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  footer,
  className = '',
  hover = true,
  ...props
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-lg hover:scale-105 transition-all duration-300' : '';

  return (
    <div
      className={cn(baseClasses, hoverClasses, className)}
      {...props}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
        
        {footer && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card; 