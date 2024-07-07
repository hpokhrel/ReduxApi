import React, { useEffect } from "react";
import Product from "./components/Product";
import { fetchProducts } from "./redux/slices/product";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { isLoading, isError, products } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching products.</div>;
  }
  return (
    <>
      <div className="container mx-auto grid grid-cols-4 gap-4">
        {products?.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}

export default App;
