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
    <section className="py-16 bg-gray-100 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Popular Products
        </h2>
        <div className="px-12 relative"> {/* Added relative positioning */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
              el: '.products-pagination' // Changed pagination element class
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
            style={{ 
              paddingBottom: '3rem' // Add padding to make room for pagination
            }}
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
            <div className="products-pagination absolute bottom-0 w-full"></div>
          </Swiper>
        </div>
      </div>

      <style>
        {`
          .products-pagination {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 10;
            display: flex;
            justify-content: center;
            padding-top: 1rem;
          }
          .products-pagination .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px;
            background-color: #999;
            opacity: 0.5;
            border-radius: 50%;
            cursor: pointer;
          }
          .products-pagination .swiper-pagination-bullet-active {
            background-color: #f97316;
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default ProductsSection;
