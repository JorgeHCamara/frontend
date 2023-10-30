import { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  IconButton,
} from '@mui/material';
import { Product } from '../interfaces/Product';
import { getProducts } from '../services/ProductApi';
import { deleteProduct } from '../services/ProductApi';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortField) return 0;
    
    const key = sortField as keyof Product;
    
    const aValue = typeof a[key] === 'string' ? (a[key] as string).toLowerCase() : a[key];
    const bValue = typeof b[key] === 'string' ? (b[key] as string).toLowerCase() : b[key];
  
    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });
  

const handleSort = (field: keyof Product) => {
  if (sortField === field) {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortOrder('asc');
  }
};


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
              <TableCell onClick={() => handleSort('name')}>
                  Name
                  <IconButton size="small">
                    {sortField === 'name' && sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="inherit" /> : <ArrowDownwardIcon fontSize="inherit" />}
                  </IconButton>
              </TableCell>
              <TableCell onClick={() => handleSort('description')}>
                  Description
                  <IconButton size="small">
                    {sortField === 'description' && sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="inherit" /> : <ArrowDownwardIcon fontSize="inherit" />}
                  </IconButton>
              </TableCell>
              <TableCell onClick={() => handleSort('color')}>
                  Color
                  <IconButton size="small">
                    {sortField === 'color' && sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="inherit" /> : <ArrowDownwardIcon fontSize="inherit" />}
                  </IconButton>
              </TableCell>
              <TableCell onClick={() => handleSort('category')}>
                  Product Type
                  <IconButton size="small">
                    {sortField === 'category' && sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="inherit" /> : <ArrowDownwardIcon fontSize="inherit" />}
                  </IconButton>
              </TableCell>
              <TableCell onClick={() => handleSort('price')}>
                  Price
                  <IconButton size="small">
                    {sortField === 'price' && sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="inherit" /> : <ArrowDownwardIcon fontSize="inherit" />}
                  </IconButton>
              </TableCell>
              <TableCell onClick={() => handleSort('promotional_price')}>
                  Promotional Price
                  <IconButton size="small">
                    {sortField === 'promotional_price' && sortOrder === 'asc' ? <ArrowUpwardIcon fontSize="inherit" /> : <ArrowDownwardIcon fontSize="inherit" />}
                  </IconButton>
              </TableCell>
              <TableCell>#</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        {sortedProducts.map(product => (
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
