
"use client";

import { useState, useEffect } from 'react';
import { ReviewCard } from '@/components/review-card';
import { ReviewForm } from '@/components/review-form';
import type { Review } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus, ChevronDown, ChevronUp } from 'lucide-react';

const initialReviews: Review[] = [
  {
    id: '1',
    name: 'Aditya Sharma',
    rating: 5,
    comment: 'Absolutely breathtaking views from the Churdhar peak! The trek was challenging but worth every step. Well-maintained trails for the most part.',
    date: 'October 15, 2023',
  },
  {
    id: '2',
    name: 'Priya Singh',
    rating: 4,
    comment: 'A spiritual and adventurous journey. The temple at the top has a serene vibe. Be prepared for cold nights even in summer. Accommodation options at base camps are basic but manageable.',
    date: 'September 22, 2023',
  },
  {
    id: '3',
    name: 'Rohan Verma',
    rating: 4,
    comment: 'Loved the flora and fauna. Spotted some rare birds. The last stretch is quite steep. Would recommend hiring a guide if you are a first-timer.',
    date: 'June 5, 2023',
  },
];

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [visibleReviews, setVisibleReviews] = useState(2); // Show 2 reviews initially

  useEffect(() => {
    // In a real app, fetch reviews here. For now, use initialReviews.
    setReviews(initialReviews);
  }, []);

  const handleReviewSubmit = (newReview: Review) => {
    setReviews((prevReviews) => [newReview, ...prevReviews]);
    setShowReviewForm(false); // Optionally hide form after submission
    setVisibleReviews(prev => prev + 1); // Make the new review visible
  };

  const loadMoreReviews = () => {
    setVisibleReviews(prev => prev + 2);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Visitor Reviews</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from fellow adventurers about their Churdhar experiences.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <Button 
              onClick={() => setShowReviewForm(!showReviewForm)}
              variant="outline"
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-accent hover:border-accent/90"
            >
              <MessageSquarePlus className="mr-2 h-5 w-5" />
              {showReviewForm ? 'Cancel Review' : 'Write a Review'}
            </Button>
          </div>

          {showReviewForm && (
            <div className="mb-12 transition-all duration-500 ease-in-out">
              <ReviewForm onReviewSubmit={handleReviewSubmit} />
            </div>
          )}
          
          {reviews.length === 0 && !showReviewForm && (
            <p className="text-center text-muted-foreground">Be the first to write a review!</p>
          )}

          {reviews.length > 0 && (
            <div className="space-y-6">
              {reviews.slice(0, visibleReviews).map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}

          {visibleReviews < reviews.length && (
            <div className="text-center mt-10">
              <Button onClick={loadMoreReviews} variant="secondary">
                <ChevronDown className="mr-2 h-5 w-5" />
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
