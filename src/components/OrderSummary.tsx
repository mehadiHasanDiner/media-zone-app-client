import { clearCart } from "@/redux/featuers/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { CreditCard, Trash2 } from "lucide-react";

const OrderSummary = () => {
  const dispatch = useAppDispatch();

  const { tax, taxRate, totalPrice, grandTotal, selectedItems } =
    useAppSelector((store) => store.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="lg:w-80 w-full bg-primary bg-opacity-35 rounded">
      <div className="px-6 py-4 space-y-10">
        <h1 className="text-3xl font-bold">Order Summary</h1>
        <p className="text-sm text-black mt-2">
          Selected Item: {selectedItems}
        </p>
        <p className="text-sm text-black mt-2">
          Total Price : ${totalPrice.toFixed(2)}
        </p>
        <p className="text-sm text-black mt-2">
          Tax ({taxRate * 100}%) : ${tax.toFixed(3)}
        </p>
        <h3 className="text-xl font-semibold text-black mt-4">
          Grand Total : ${grandTotal.toFixed(3)}
        </h3>
        <div className="px-4 pb-6">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClearCart();
            }}
            className="bg-red-500 p-3 text-white mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
          >
            <span>Clear Cart</span>
            <Trash2 className="inline" width={15} height={15} />
          </button>

          <button
            onClick={(e) => e.stopPropagation()}
            className="bg-green-500 p-3 text-white mt-2 rounded-md w-full text-xs flex justify-between items-center mb-4"
          >
            <span>Proceed Checkout</span>
            <CreditCard className="inline" width={15} height={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
