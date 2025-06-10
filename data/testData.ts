import { CheckoutFormData, ProductDetails } from '../types/testData';


export const checkoutFormData: CheckoutFormData = {
  email: "test@gmail.com",
  firstName: "John",
  lastName: "Doe",
  company: "Test Company",
  streetAddress: "123 Test Street",
  city: "Austin",
  state: "Texas",
  zipCode: "73301",
  country: "United States",
  phone: "1234567890",
};

export const productDetails: ProductDetails = {
  searchQuery: "Tank",
  name: "Chloe Compete Tank",
  size: "XS",
  color: "Red",
  quantity: "2",
};

export enum ShippingMethods {
  FlatRate = "flatrate_flatrate",
  BestWay = "tablerate_bestway",
}
