import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import boatAirdopes from "../assets/boat-airdopes-181-tr.jpg";
import iPhone from "../assets/R.jpeg";
import zFold from "../assets/Galaxy_Z_Fold3-1536x1449.jpg";
import skullCandy from "../assets/OIP.jpeg";

const ProductsSection = () => {
  const products = [
    {
      image: boatAirdopes,
      name: "Boat Airdopes",
      price: "From Rs. 799",
      description: "A tour of the city and its...",
    },
    {
      image: iPhone,
      name: "iPhone 16 Pro",
      price: "From Rs. 1,14,000",
      description: "The real magic is here where...",
    },
    {
      image: zFold,
      name: "Samsung Z Fold",
      price: "From Rs. 98,000",
      description: "The real magic is here where...",
    },
    {
      image: skullCandy,
      name: "Skull Candy Headphone",
      price: "From Rs. 999",
      description: "The real magic is here where...",
    },
    {
        image: boatAirdopes,
        name: "Boat Airdopes",
        price: "From Rs. 799",
        description: "The real magic is here where...",
      },
      {
        image: iPhone,
        name: "iPhone 16 Pro",
        price: "From Rs. 1,14,000",
        description: "The real magic is here where...",
      },
      {
        image: zFold,
        name: "Samsung Z Fold",
        price: "From Rs. 98,000",
        description: "The real magic is here where...",
      },
      {
        image: skullCandy,
        name: "Skull Candy Headphone",
        price: "From Rs. 999",
        description: "The real magic is here where...",
      },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Popular Products
        </h2>
        <div className="px-12"> {/* Increased padding for arrow spacing */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination'
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-14" // Added bottom padding for pagination dots
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  description={product.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div> {/* Pagination container */}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
