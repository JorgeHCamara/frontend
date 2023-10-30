import React, { useState } from 'react';
import { addProduct } from '../../api/ProductApi';
import { getDiscount, DiscountCategories } from '../../services/DiscountService'; // Adjust the path based on your project structure
import { Button, TextField, Container, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    color: '',
    category: '' as DiscountCategories,
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
  
    if (name === 'price') {
      updatedValue = parseFloat(value);
    }
  
    setProductData(prevData => {
      const updatedData = { ...prevData, [name]: updatedValue };
  
      if (name === 'price' && typeof updatedValue === 'number') {
        const discount = getDiscount(updatedData.category);
        updatedData.promotional_price = updatedValue * (1 - discount / 100);
      }
  
      return updatedData;
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;

    setProductData(prevData => {
      const updatedData = { ...prevData, [name]: value };
      const discount = getDiscount(value as DiscountCategories);
      updatedData.promotional_price = updatedData.price * (1 - discount / 100);
      return updatedData;
    });
};

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="name"
          label="Name"
          value={productData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="description"
          label="Description"
          value={productData.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          name="color"
          label="Color"
          value={productData.color}
          onChange={handleChange}
        />
        <InputLabel>
          Product Type
        </InputLabel>
        <Select
          fullWidth
          name="category"
          value={productData.category}
          onChange={handleSelectChange}
        >
          <MenuItem value="Appliances">Appliances</MenuItem>
          <MenuItem value="Furniture">Furniture</MenuItem>
          <MenuItem value="Refrigerators">Refrigerators</MenuItem>
          <MenuItem value="Smartphones">Smartphones</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
        </Select>
        <TextField
          fullWidth
          margin="normal"
          type="number"
          name="price"
          label="Price"
          value={productData.price}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Add Product
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;
