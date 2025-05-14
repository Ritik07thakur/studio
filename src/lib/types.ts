export interface RentalItem {
  id: string;
  name: string;
  type: 'Accommodation' | 'Gear';
  imageUrl: string;
  imageHint: string;
  description: string;
  price?: string; 
}

export interface Review {
  id: string;
  name: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}
