"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { StarRating } from '@/components/star-rating';
import { useToast } from '@/hooks/use-toast';
import type { Review } from '@/lib/types';

const reviewSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  rating: z.number().min(1, { message: "Please select a rating." }).max(5),
  comment: z.string().min(10, { message: "Comment must be at least 10 characters." }).max(500),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

interface ReviewFormProps {
  onReviewSubmit: (review: Review) => void;
}

export function ReviewForm({ onReviewSubmit }: ReviewFormProps) {
  const { toast } = useToast();
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: '',
      rating: 0,
      comment: '',
    },
  });

  function onSubmit(data: ReviewFormValues) {
    const newReview: Review = {
      id: Date.now().toString(), // Simple ID generation
      name: data.name,
      rating: data.rating,
      comment: data.comment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };
    onReviewSubmit(newReview);
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback.",
      variant: "default",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 border rounded-lg shadow-lg bg-card">
        <h3 className="text-xl font-semibold text-primary mb-4">Share Your Experience</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Rating</FormLabel>
              <FormControl>
                <StarRating rating={field.value} setRating={field.onChange} interactive={true} size={24} className="py-1" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Review</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your Churdhar experience..." rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </Form>
  );
}
