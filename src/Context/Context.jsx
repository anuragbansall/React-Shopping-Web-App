import React, { createContext, useEffect, useState } from 'react';
import InitialProductData from './InitialProductData';

export const ProductDetailsContext = createContext();

function Context({ children }) {
  const initialProductData = InitialProductData;

  const storedProductData = JSON.parse(localStorage.getItem('productData')) || initialProductData;

  const [productData, setProductData] = useState(storedProductData);

  useEffect(() => {
    localStorage.setItem('productData', JSON.stringify(productData));
  }, [productData]);

  return (
    <ProductDetailsContext.Provider value={[productData, setProductData]}>
      {children}
    </ProductDetailsContext.Provider>
  );
}

export default Context;
