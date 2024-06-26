import React, { useEffect } from 'react';
import ProductsList from '../components/ProductsList/ProductsList';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/slices/productsSlice';
import { productById } from '../store/slices/productsSlice';
import { useParams } from 'react-router-dom';
import ProductsFilters from '../components/ProductsFilters/ProductsFilters';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';

export const ProductByCategory = () => {
  const allProducts = useSelector((state) => state.product.allProducts);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productById(id));
  }, [allProducts, dispatch]);

  return (
    <>
      <BreadCrumbs />
      <h2 style={{ margin: '30px 0px', color: 'var(--color-text)' }}>
        Product
      </h2>
      <ProductsFilters />
      <ProductsList filterDiscounted={false} randomize={false} />
    </>
  );
};
