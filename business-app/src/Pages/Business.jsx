import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import businessImg from "/business.png";
import Search from "../Components/Search";
import Pagination from "../Components/Pagination";
import Loading from "../Components/Loading";
import Card from "../Layouts/Card";

function Business() {
  const API_KEY = process.env.API_KEY;

  const [businesses, setBusinesses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchBusinesses = async () => {
      const options = {
        method: "GET",
        url: "https://api.yelp.com/v3/businesses/search",
        params: {
          location: "NYC",
          sort_by: "best_match",
          limit: "20",
          offset: (currentPage - 1) * 20,
          term: searchTerm,
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setBusinesses(response.data.businesses);
        setTotalPages(Math.ceil(response.data.total / 20));
      } catch (error) {
        console.error(error);
      }
    };

    fetchBusinesses();
  }, [currentPage, searchTerm]);

  return (
    <>
      <Navbar />
      <img src={businessImg} alt="image" className="w-full" />
      <div className="flex justify-center min-h-screen">
        <div className="mx-auto mt-8 max-w-7xl">
          <h3 className="flex justify-start ml-[2.75rem] text-3xl font-bold text-gray-800">
            Business
          </h3>
          <Search
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
          <div className="mt-5 flex max-w-6xl flex-wrap justify-center gap-6">
            {businesses.map((business) => (
              <div key={business.id} className="w-[15.5rem]">
                <Card
                  id={business.id}
                  image_url={business.image_url}
                  name={business.name}
                  categories={business.categories}
                  phone={business.phone}
                  price={business.price}
                  rating={business.rating}
                  location={business.location.city}
                />
              </div>
            ))}
            {businesses.length === 0 && <Loading />}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Business;
