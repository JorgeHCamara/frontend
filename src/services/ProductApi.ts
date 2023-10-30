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
  window.alert('The product has been added.')
  return response.data;
};

export const deleteProduct = async (productId: number) => {
  const response = await axios.delete(`${BASE_URL}/delete/${productId}`);
  window.alert('The product has been deleted.')
  return response.data;
};