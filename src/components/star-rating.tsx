"use client";

import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Dispatch, SetStateAction } from 'react';

interface StarRatingProps {
  rating: number;
  setRating?: (rating: number) => void; 
  interactive?: boolean;
  size?: number;
  className?: string;
  starClassName?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  setRating,
  interactive = true,
  size = 20,
  className,
  starClassName,
}) => {
  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {[1, 2, 3, 4, 5].map((starValue) => (
        <button
          key={starValue}
          type="button"
          disabled={!interactive || !setRating}
          onClick={() => interactive && setRating && setRating(starValue)}
          className={cn(
            "p-0 bg-transparent border-none appearance-none",
            interactive && setRating ? "cursor-pointer" : "cursor-default",
          )}
          aria-label={`Rate ${starValue} out of 5 stars`}
        >
          <Star
            size={size}
            className={cn(
              starValue <= rating ? 'fill-accent text-accent' : 'fill-muted text-muted-foreground',
              interactive && setRating && "hover:opacity-80 transition-opacity",
              starClassName
            )}
          />
        </button>
      ))}
    </div>
  );
};
