
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarRating } from '@/components/star-rating';
import type { Review } from '@/lib/types';
import { UserCircle2 } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-start space-x-4 pb-3">
        <Avatar>
          {/* Placeholder for user image, if available in future */}
          {/* <AvatarImage src={`https://placehold.co/40x40.png?text=${getInitials(review.name)}`} alt={review.name} /> */}
          <AvatarFallback className="bg-primary text-primary-foreground">
            <UserCircle2 size={24}/>
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg text-primary">{review.name}</CardTitle>
          <p className="text-xs text-muted-foreground">{review.date}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2">
          <StarRating rating={review.rating} interactive={false} size={18} />
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed">{review.comment}</p>
      </CardContent>
    </Card>
  );
}
