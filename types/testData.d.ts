export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

export interface ProductDetails {
  searchQuery: string;
  name: string;
  size: string;
  color: string;
  quantity: string;
}
