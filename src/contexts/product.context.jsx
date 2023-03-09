import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  const value = { products };
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();

      setProducts(categoryMap);
    };
    getCategoriesMap();
  }, []);
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
