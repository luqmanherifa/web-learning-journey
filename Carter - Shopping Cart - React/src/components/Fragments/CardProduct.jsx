import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="max-w-xs bg-white border border-gray-400 rounded-lg">
      <div className="p-5">{children}</div>
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <div className="w-full h-52 overflow-hidden">
        <img
          className="rounded-t-lg w-full h-full object-cover"
          src={image}
          alt="product"
        />
      </div>
    </Link>
  );
};

const Body = (props) => {
  const { children, name } = props;
  return (
    <div>
      <a href="#">
        <h5 className="mt-3 mb-3 text-base font-bold tracking-tight text-gray-900 h-12 line-clamp-2">
          {name}
        </h5>
      </a>
      <p className="mb-4 text-sm font-normal text-gray-700 line-clamp-3">
        {children}
      </p>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between">
      <span className="text-lg font-bold text-black flex items-center">
        ${" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button
        href="#"
        classname="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Buy
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
