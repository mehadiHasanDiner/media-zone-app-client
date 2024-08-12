
const Banner = () => {
    return (
      <div className="mt-3 bg-gradient-to-b from-pink-700 to-pink-800 text-white py-16 px-4 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Welcome to Media Zone
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-lg">
            Your gateway to quality products and excellent service.
          </p>
          <a
            href="/products"
            className="bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300 shadow-lg"
          >
            Shop Now
          </a>
        </div>
      </div>
    );
};

export default Banner;