export interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  owner?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}
