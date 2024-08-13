import { useState } from "react";
import Modal from "./Modal";

const ProductCard = ({ product }: { product: any }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowModal = (product: any) => {
    setSelectedProduct(product);
    setSelectedProduct;
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div className="relative">
      {showModal && (
        <Modal onClose={handleCloseModal} product={selectedProduct} />
      )}
      <div
        onClick={() => handleShowModal(product)}
        className="border rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-pink-700 mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
          <p className="text-lg font-bold text-red-600 mb-4">{product.price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
