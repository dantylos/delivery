export interface FormData {
  category: string | null;
  vehicle: string | null;
  phone: string;
  email: string;
  agreed: boolean;
}

export interface CardOption {
  id: string;
  label: string;
  image: string;
}

export const CATEGORY_OPTIONS: CardOption[] = [
  { id: 'food', label: 'Food', image: '/images/food.jpg' },
  { id: 'shoes', label: 'Shoes', image: '/images/shoes.jpg' },
  { id: 'clothes', label: 'Clothes', image: '/images/clothes.jpg' },
  { id: 'accessories', label: 'Accessories', image: '/images/accessories.jpg' },
];

export const VEHICLE_OPTIONS: CardOption[] = [
  { id: 'car', label: 'Car', image: '/images/car.jpg' },
  { id: 'van', label: 'Van', image: '/images/van.jpg' },
  { id: 'scooter', label: 'Scooter', image: '/images/scooter.jpg' },
  { id: 'bicycle', label: 'Bicycle', image: '/images/bicycle.jpg' },
];

export const INITIAL_FORM_DATA: FormData = {
  category: null,
  vehicle: null,
  phone: '',
  email: '',
  agreed: false,
};
