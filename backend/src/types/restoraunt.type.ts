export interface CreateRestaurantData {
  name: string;
  address?: string;
  phone?: string;
  owner: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
}
