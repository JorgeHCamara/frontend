import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Product } from '../interfaces/Product';
import { getProducts } from '../api/api';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Description</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Promotional Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map(product => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>${product.promotional_price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductList;
