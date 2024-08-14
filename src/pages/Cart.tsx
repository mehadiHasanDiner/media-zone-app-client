import CartDetails from "@/components/CartDetails";
import OrderSummary from "@/components/OrderSummary";
import { getAllProducts } from "@/data/products";
import { useAppSelector } from "@/redux/hooks";

const Cart = () => {
  // const products = getAllProducts()
  const products = useAppSelector((store) => store.cart.products);
  return (
    <div className="flex lg:flex-row flex-col-reverse justify-center lg:space-x-40">
      <div className="space-y-5 lg:mt-0 mt-5">
        {products.length ? (
          products.map((product: any) => (
            <CartDetails key={product.id} product={product} />
          ))
        ) : (
          <p className="text-2xl text-red-500">No product found</p>
        )}
      </div>
      <OrderSummary />
    </div>
  );
};

export default Cart;
