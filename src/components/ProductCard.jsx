import { AiOutlineHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const { brand, model, price, image_url } = product;
  return (
    <div className="card bg-base-100 shadow-xl"  data-aos="fade-up" data-aos-duration="1000">
      <figure>
        <img className="h-56" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">
          {brand}
          <div className="badge badge-secondary">{model}</div>
        </h2>
        <p className="text-xs">
          Fashionable, comfortable, and high-performance footwear for any
          activity. Elevate your step with style and support.
        </p>
        <div className="flex flex-row justify-between items-center">
          <h5 className="font-semibold">Price: {price}</h5>
          <button className="badge text-xl hover:text-red-500">
            <AiOutlineHeart />
          </button>
        </div>
        <button className="badge badge-outline w-full h-6 hover:bg-sky-400 hover:border-transparent hover:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
