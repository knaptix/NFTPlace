import React from "react";
import FooterBanner from "../assets/FooterBanner.jpg";

const Footer = () => {
  return (
    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src={FooterBanner} 
          alt="Footer Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-base uppercase tracking-wide text-orange-500">Call us</span>
              <a
                href="#"
                className="block text-2xl font-medium text-gray-900 hover:text-orange-500 sm:text-3xl"
              >
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-gray-700">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              {[
                { label: "Facebook", iconPath: "M22 ...", link: "#" },
                { label: "Instagram", iconPath: "M12.315 ...", link: "#" },
                { label: "Twitter", iconPath: "M8.29 ...", link: "#" },
                { label: "GitHub", iconPath: "M12 ...", link: "#" },
                { label: "Dribbble", iconPath: "M12 ...", link: "#" },
              ].map(({ label, iconPath, link }, idx) => (
                <li key={idx}>
                  <a
                    href={link}
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    <span className="sr-only">{label}</span>
                    <svg
                      className="size-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                title: "Services",
                links: [
                  { name: "Product Comparison", link: "#" },
                  { name: "Products Review", link: "#" },
                  { name: "Quality Product Buying", link: "#" },
                  { name: "Support 24/7", link: "#" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", link: "#" },
                  { name: "Meet the Team", link: "#" },
                ],
              },
            ].map(({ title, links }, idx) => (
              <div key={idx}>
                <p className="font-medium text-orange-500">{title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {links.map(({ name, link }, idx) => (
                    <li key={idx}>
                      <a href={link} className="text-gray-700 transition hover:text-orange-500">
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              {[
                { name: "Terms & Conditions", link: "#" },
                { name: "Privacy Policy", link: "#" },
                { name: "Cookies", link: "#" },
              ].map(({ name, link }, idx) => (
                <li key={idx}>
                  <a href={link} className="text-gray-500 transition hover:text-orange-500">
                    {name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2024. E-commWebsite. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
