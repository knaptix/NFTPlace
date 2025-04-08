import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Swip = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        console.log("Fetching data from API...");
        const response = await fetch(
          "https://nywnftbackend-1.onrender.com/api/nft/get"
        );

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response Data:", result);

        if (result?.status === true && Array.isArray(result.data)) {
          console.log(`Found ${result.data.length} collections`);
          // Filter collections and slice from index 35
          const filteredCollections = result.data;
          const selectedCollections = filteredCollections.slice(32);
          setCollections(selectedCollections);
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
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center">
          Explore Trending NFTs
        </h2>

        {/* Swiper - Centered and Responsive */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={15}
          slidesPerView={1} // Ensures centering on small screens
          centeredSlides={true}
          breakpoints={{
            480: { slidesPerView: 1.2, centeredSlides: true },
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 3, centeredSlides: false },
            1280: { slidesPerView: 6, centeredSlides: false },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="relative w-full"
        >
          {collections.map((collection, index) => (
            <SwiperSlide key={index} className="w-auto mt-6">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg mx-auto max-w-[280px] sm:max-w-[320px] md:max-w-[380px]">
                <img
                  src={collection.imageUrl}
                  alt={collection.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                  <span className="text-white text-base sm:text-lg font-semibold">
                    {collection.name}
                  </span>
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
