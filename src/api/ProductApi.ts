import axios from 'axios';

const BASE_URL = 'http://localhost:5000/products';

export const getProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data.products;
};

export const addProduct = async (productData: {
  name: string;
  description: string;
  color: string;
  category: string;
  price: number;
  promotional_price: number;
}) => {
  const response = await axios.post(`${BASE_URL}/add`, productData);
  return response.data;
};
