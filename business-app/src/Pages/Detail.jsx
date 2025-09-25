import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../Components/Loading";

function Detail() {
  const API_KEY = process.env.API_KEY;

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const options = {
          method: "GET",
          url: `https://api.yelp.com/v3/businesses/${id}`,
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        };

        try {
          const response = await axios.request(options);
          console.log(response.data);
          setSelectedBusiness(response.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center min-h-screen text-gray-500">
        <div className="mx-auto max-w-6xl">
          {loading ? (
            <Loading css="text-2xl mt-36" />
          ) : (
            <div className="mt-5">
              {selectedBusiness && (
                <div className="bg-white">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    appendDots={(dots) => (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          width: "100%",
                        }}
                      >
                        <ul
                          style={{
                            margin: "0",
                            padding: "0",
                            textAlign: "center",
                          }}
                        >
                          {dots}
                        </ul>
                      </div>
                    )}
                  >
                    {selectedBusiness.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="mx-auto h-96 w-[80rem] rounded-2xl object-cover"
                      />
                    ))}
                  </Slider>

                  <div className="flex flex-col gap-1 text-sm">
                    <p className="line-clamp-1 mt-8 mb-3 text-5xl font-semibold text-gray-800">
                      {selectedBusiness.name}
                    </p>

                    <hr />

                    <div className="flex gap-3 mt-3 mb-2 text-lg">
                      <div className="flex gap-0">
                        {Array.from(
                          { length: selectedBusiness.rating },
                          (_, index) => (
                            <svg
                              key={index}
                              className="text-yellow-400 mt-1"
                              xmlns="http://www.w3.org/2000/svg"
                              height="16"
                              width="18"
                              viewBox="0 0 576 512"
                              fill="currentColor"
                            >
                              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                          )
                        )}
                        <p className="ml-2">{selectedBusiness.rating}</p>
                      </div>

                      <div className="flex gap-2">
                        <svg
                          className="text-blue-600 mt-1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="20"
                          viewBox="0 0 384 512"
                          fill="currentColor"
                        >
                          <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                        </svg>
                        <p className="line-clamp-1">
                          {selectedBusiness.review_count} review
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <svg
                          className="text-green-600 mt-1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="18"
                          viewBox="0 0 576 512"
                          fill="currentColor"
                        >
                          <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
                        </svg>
                        <p>{selectedBusiness.price}</p>
                      </div>

                      <div className="flex gap-2">
                        <svg
                          className="text-red-600 mt-1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="20"
                          viewBox="0 0 384 512"
                          fill="currentColor"
                        >
                          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>
                        <p className="line-clamp-1">
                          {selectedBusiness.location.city}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <svg
                          className="text-blue-600 mt-1.5"
                          xmlns="http://www.w3.org/2000/svg"
                          height="16"
                          width="20"
                          viewBox="0 0 384 512"
                          fill="currentColor"
                        >
                          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>
                        <p className="line-clamp-1">{selectedBusiness.phone}</p>
                      </div>
                    </div>

                    <div className="flex text-lg gap-2">
                      <p className="flex items-center">Top Tags:</p>
                      {selectedBusiness.categories.map((category, index) => (
                        <p
                          key={index}
                          className="p-1 px-3 text-base border border-gray-600 rounded-full"
                        >
                          {category.title}
                        </p>
                      ))}
                    </div>

                    <div className="flex gap-10">
                      <div className="text-lg mt-5 flex gap-2 flex-col">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Accusantium quae officiis sequi illo at
                          molestiae debitis non et asperiores. Impedit eos
                          laboriosam provident consectetur aperiam vitae
                          pariatur rerum velit illum odit veniam fuga debitis
                          exercitationem minus officiis ducimus eligendi
                          voluptas corporis, repellat hic? Libero, repudiandae
                          enim quos harum, sed, odio a ipsum mollitia
                          consectetur exercitationem quae sequi. Animi vel
                          voluptatem inventore tempore.
                        </p>
                        <p>
                          Quia praesentium recusandae distinctio omnis dolore,
                          mollitia laboriosam saepe. Delectus suscipit adipisci
                          consectetur provident laudantium tempora porro, nisi
                          aut iure nam deleniti cumque officiis voluptas neque,
                          labore tempore aliquid fugit odio! Libero consequuntur
                          exercitationem enim dignissimos odit, in doloremque id
                          corporis dolor sequi voluptate sapiente velit, hic
                          nihil numquam quibusdam officia quia qui dolorum vero
                          distinctio quaerat totam.
                        </p>
                      </div>

                      <div className="mt-5">
                        <iframe
                          src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.496405115677!2d${selectedBusiness.coordinates.longitude}!3d${selectedBusiness.coordinates.latitude}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzQwJzAwJzEyLjciTiA3M8KwMTUnMzMuMCJF!5e0!3m2!1sen!2sid!4v1694432297737!5m2!1sen!2sid`}
                          width="400"
                          height="400"
                          style={{ border: "0" }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
