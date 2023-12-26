import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useLogin();

  useEffect(() => {
    getProducts((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
        >
          <div className="flex flex-wrap gap-5 max-w-2xl mr-3">
            {products.length > 0 &&
              products.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              ))}
          </div>
          <div className="border border-gray-400 rounded-lg">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-4 mt-3">
              Shopping Cart
            </h1>
            <TableCart products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
