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
  { id: 'food', label: 'Food', image: `${import.meta.env.BASE_URL}images/food.jpg` },
  { id: 'shoes', label: 'Shoes', image: `${import.meta.env.BASE_URL}images/shoes.jpg` },
  { id: 'clothes', label: 'Clothes', image: `${import.meta.env.BASE_URL}images/clothes.jpg` },
  { id: 'accessories', label: 'Accessories', image: `${import.meta.env.BASE_URL}images/accessories.jpg` },
];

export const VEHICLE_OPTIONS: CardOption[] = [
  { id: 'car', label: 'Car', image: `${import.meta.env.BASE_URL}images/car.jpg` },
  { id: 'van', label: 'Van', image: `${import.meta.env.BASE_URL}images/van.jpg` },
  { id: 'scooter', label: 'Scooter', image: `${import.meta.env.BASE_URL}images/scooter.jpg` },
  { id: 'bicycle', label: 'Bicycle', image: `${import.meta.env.BASE_URL}images/bicycle.jpg` },
];

export const INITIAL_FORM_DATA: FormData = {
  category: null,
  vehicle: null,
  phone: '',
  email: '',
  agreed: false,
};
