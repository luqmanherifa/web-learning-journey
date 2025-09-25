import { Link } from "react-router-dom";

const Card = ({
  id,
  image_url,
  name,
  categories,
  phone,
  price,
  rating,
  location,
}) => {
  return (
    <Link to={`/business/${id}`}>
      <div className="rounded-2xl border border-gray-300 bg-white p-2 hover:bg-yellow-50">
        <img
          className="mx-auto h-48 w-[14.3rem] rounded-xl object-cover"
          src={image_url}
          alt=""
        />
        <div className="flex flex-col gap-1 p-3 text-sm">
          <p className="line-clamp-1 text-base font-semibold">{name}</p>
          <div className="flex">
            {categories.slice(0, 2).map((category, index) => (
              <p key={index} className="line-clamp-1">
                {index > 0 ? ", " : ""}
                {category.title}
              </p>
            ))}
          </div>
          <p>{phone}</p>
          <div className="flex gap-2 mt-0.5">
            <div className="flex gap-1">
              <svg
                className="text-green-600 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="18"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
              </svg>
              <p>{price}</p>
            </div>
            <p>•</p>
            <div className="flex gap-1">
              <svg
                className="text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="18"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <p>{rating}</p>
            </div>
            <p>•</p>
            <div className="flex gap-1">
              <svg
                className="text-red-600 mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="12"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p className="line-clamp-1">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
