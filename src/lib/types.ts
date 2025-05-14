
export interface RentalItem {
  id: string;
  name: string;
  type: 'Accommodation' | 'Gear';
  slug: string; // Added for routing to detail pages
  imageUrl: string;
  imageHint: string;
  description: string; // Short description for cards
  longDescription?: string; // Detailed description for product page
  price?: string; 
}

export interface Review {
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface BookingFormValues {
  bookingDate: Date;
  fullName: string;
  phoneNumber: string;
  rentalItemName?: string;
}
