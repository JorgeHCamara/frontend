import React, { useState } from 'react';
import { addProduct } from '../../api/ProductApi';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    color: '',
    category: '',
    price: 0,
    promotional_price: 0
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await addProduct(productData);
      if (response && response.success) {
        console.log('Product added successfully!');
      } else {
        console.error('Failed to add product.', response.message);
      }
    } catch (error) {
      console.error('An error occurred while adding the product.', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let updatedValue: string | number = value;

    if (name === 'price' || name === 'promotional_price') {
        updatedValue = parseFloat(value);
    }

    setProductData(prevData => ({ ...prevData, [name]: updatedValue }));
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={productData.name}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Description"
          value={productData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="color"
          placeholder="Color"
          value={productData.color}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={productData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={productData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="promotional_price"
          placeholder="Promotional Price"
          value={productData.promotional_price}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
