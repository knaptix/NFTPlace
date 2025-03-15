import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Swip = () => {
  // const nfts = [
  //   { id: 1, creator: "Felly Sweets", image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg", verified: true },
  //   { id: 2, creator: "Felly Sweets", image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg", verified: true },
  //   { id: 3, creator: "Felly Sweets", image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg", verified: true },
  //   { id: 4, creator: "Felly Sweets", image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg", verified: true },
  //   { id: 5, creator: "Felly Sweets", image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg", verified: true },
  //   { id: 6, creator: "Felly Sweets", image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg", verified: true },
  // ];
const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        console.log("Fetching data from API...");
        const response = await fetch(
          "https://nywnftbackend-production.up.railway.app/api/nft/get"
        );

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response Data:", result);

        if (result?.status === true && Array.isArray(result.data)) {
          console.log(`Found ${result.data.length} collections`);
          setCollections(result.data);
        } else {
          console.warn("API did not return expected data format:", result);
          setError("Invalid data format received from API");
          setCollections([]);
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError(`Failed to fetch collections: ${error.message}`);
        setCollections([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-screen">
        <p className="text-xl font-semibold">Loading collections...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen w-screen">
        <p className="text-xl font-semibold text-red-600">Error: {error}</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-4"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full py-10 bg-gray-50">
      <div className="max-w-8xl mx-auto px-3">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Explore Trending NFTs
        </h2>

        {/* Swiper with Larger Cards */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={15}

          slidesPerView={1.2} // Default for mobile
          breakpoints={{
            480: { slidesPerView: 2 },   // Small phones
            640: { slidesPerView: 3 },   // Tablets
            1024: { slidesPerView: 4 },  // Laptops
            1280: { slidesPerView: 3 },  // Large screens
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="relative w-full"
        >
             {collections.map((collection,index) => (

            <SwiperSlide key={index} className="w-auto mt-6">
              <div className="rounded-3xl overflow-hidden aspect-square relative shadow-lg max-w-[320px] sm:max-w-[350px] md:max-w-[400px] mx-auto">
                <img
                  src={collection.imageUrl}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-white text-lg font-semibold">{collection.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swip;
