import { getAllProducts, products } from "@/data/products";
import ProductCard from "../ProductCard";

const Products = () => {
  //   const products = getAllProducts();
  return (
    <div className="container">
      <h1 className="text-5xl font-bold my-10"> All Products</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
