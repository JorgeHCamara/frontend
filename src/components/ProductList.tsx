import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { Product } from '../interfaces/Product';
import { getProducts } from '../services/ProductApi';
import { deleteProduct } from '../services/ProductApi';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id: number) => {
    try {
      const response = await deleteProduct(id);
  
      if (response.success) {
        setProducts(products.filter(product => product.id !== id));
      } else {
        console.error('Failed to delete product.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const mathFloor = (num: number): number => {
    return Math.floor(num * 100) / 100;
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Color</TableCell>
          <TableCell>Product Type</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Promotional Price</TableCell>
          <TableCell>#</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map(product => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>{product.color}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>${(product.price).toFixed(2)}</TableCell>
            <TableCell>${mathFloor(product.promotional_price).toFixed(2)}</TableCell>
            <TableCell>
              <Button variant="outlined" color="warning" onClick={() => handleDeleteProduct(product.id)}>
                Delete
              </Button>
          </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductList;
