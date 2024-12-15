import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cities = [
    "Delhi NCR",
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Pune",
    "Delhi",
    "Gurgaon",
    "Noida",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Lucknow",
    "Jaipur",
    "Chandigarh",
    "Coimbatore",
    "Faridabad",
    "Ghaziabad",
    "Indore",
    "Kochi",
  ];

  return (
    <footer className="relative bg-[#2D0A43] text-white pt-12 pb-6 px-4 md:px-6 lg:px-8 text-left">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://spn-sta.spinny.com/spinny-web/static-images/assets/images/components/Footer/assets/city-line-desktop.svg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">ABOUT</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {[
                "CarSeller Assured",
                "Who we are",
                "Blog - Yellow Drive",
                "FAQ's",
                "How It Works",
                "Inspection Process",
                "Customer Reviews",
                "Used Car Loan",
                "CarSeller Partners",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">WORK WITH US</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {[
                "Work With Us",
                "Car Hub Locations",
                "Popular Cars Overview",
                "Trade With Us",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
                "Sitemap",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <h3 className="font-semibold text-lg mb-4">BUY USED CAR IN</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {cities.map((city) => (
                <a
                  key={city}
                  href="#"
                  className="text-sm text-gray-300 hover:text-white"
                >
                  {city}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" className="hover:text-gray-300">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>

          <p className="text-sm text-gray-300 text-center sm:text-left">
            © 2024 Valuedrive Technologies Private Limited. All rights reserved.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="tel:727-727-7275"
            className="bg-red-500 text-white px-6 py-3 rounded-md text-center hover:bg-red-600 transition-colors"
          >
            727-727-7275
          </a>
          <a
            href="#"
            className="border border-purple-400 text-white px-6 py-3 rounded-md text-center hover:bg-purple-900 transition-colors"
          >
            Get Instant Quotes
          </a>
          <a
            href="#"
            className="border border-purple-400 text-white px-6 py-3 rounded-md text-center hover:bg-purple-900 transition-colors"
          >
            Browse Cars
          </a>
        </div>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white text-purple-900 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-opacity"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
