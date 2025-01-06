import React, { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

const Testimonials = () => {
  useEffect(() => {
    const slider = new KeenSlider("#keen-slider", {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: {
            origin: "auto",
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    });

    const prevButtons = [
      document.getElementById("keen-slider-previous"),
      document.getElementById("keen-slider-previous-desktop"),
    ];

    const nextButtons = [
      document.getElementById("keen-slider-next"),
      document.getElementById("keen-slider-next-desktop"),
    ];

    prevButtons.forEach((btn) => btn?.addEventListener("click", slider.prev));
    nextButtons.forEach((btn) => btn?.addEventListener("click", slider.next));

    return () => {
      slider.destroy();
      prevButtons.forEach((btn) =>
        btn?.removeEventListener("click", slider.prev)
      );
      nextButtons.forEach((btn) =>
        btn?.removeEventListener("click", slider.next)
      );
    };
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:py-16 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don&apos;t just take our word for it...
            </h2>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-orange-400 p-3 text-orange-400 transition hover:bg-orange-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-orange-400 p-3 text-orange-400 transition hover:bg-orange-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              {[1, 2].map((i) => (
                <div key={i} className="keen-slider__slide">
                  <blockquote className="flex flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <svg
                            key={j}
                            className="size-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0..." />
                          </svg>
                        ))}
                      </div>
                      <div className="mt-4">
                        <p className="text-2xl font-bold text-orange-400 sm:text-3xl">
                          Awesome Testimonial {i}
                        </p>
                        <p className="mt-4 text-gray-700">
                          Here is an amazing review that speaks volumes about our work!
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      &mdash; Customer {i}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
