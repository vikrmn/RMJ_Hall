import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";


const Images = [
  { src: "/hall-A/IMG-20250713-WA0010.jpg", label: "For Marriage Hall" },
  { src: "/hall-A/IMG-20250713-WA0012.jpg", label: "For Conference Hall" },
  { src: "hall-A/IMG-20250713-WA0017.jpg", label: "For Conference Hall" },
  { src: "/hall-B/Screenshot 2025-07-15 185052_cpy.png", label: "For Farewell Party Hall" },
  { src: "/hall-B/IMG-20250714-WA0017.jpg", label: "For Corporate Hall" },
];

const services = [
  "Family Ceremonies",
  "Conference Hall",
  "Corporate Meetings & Parties",
  "Farewell Parties",
  "Prayer Meetings",
  "For All Events",
];

function Home() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        
        <div className="max-w-6xl mx-auto mb-12">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
            showStatus={false}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            {Images.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img.src}
                  alt={img.label}
                  className="object-cover w-full h-[450px]"
                />
                {/* Top-left label */}
                <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm md:text-base font-medium shadow">
                  {img.label}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
        {/* Availability Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Hall Availability</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {["a", "b"].map((hall) => (
              <Link
                to={`/hall/${hall}`}
                key={hall}
                className="border border-gray-200 rounded-xl shadow p-6 text-left hover:shadow-md transition block"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  Hall {hall.toUpperCase()}
                </h3>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li>👥 <span className="font-medium">Capacity:</span> 100 Persons</li>
                  <li>🔊 <span className="font-medium">Speakers:</span> Available</li>
                  <li>📽️ <span className="font-medium">Projector:</span> Available</li>
                  <li>🚗 <span className="font-medium">Car Parking:</span> Available</li>
                </ul>
              </Link>
            ))}
          </div>
        </div>
        <br />

        <p className="text-lg sm:text-xl text-gray-600 italic mb-10">
          "Where Moments Become Memories"
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <CheckCircle className="text-green-600 mr-3" size={22} />
              <span className="text-lg font-medium text-gray-800">{item}</span>
            </div>
          ))}
        </div>
 
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">For Booking</h2>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-xl shadow space-y-4 text-lg text-gray-700">
            <div>
              📍 <span className="font-semibold">Location:</span> 330 , RMJ hall , VK Road , Peelamedu ,Coimbatore , Tamil Nadu - 620012
            </div>
            <div>
              📞 <span className="font-semibold">Phone:</span> +91 63 79 70 89 46
            </div>
            <div>
              ✉️ <span className="font-semibold">Email:</span> rmjhallcbe28@gmail.com
            </div>
          </div>
        </div>
        
        <div className="mt-10">
  <iframe
    title="RMJ Hall Location"
    src="https://www.google.com/maps?q=11.03425,77.00378&output=embed"
    width="100%"
    height="300"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow"
  ></iframe>
</div>

        
<a
  href="https://wa.me/916379708946?text=Hi!%20I%20want%20to%20book%20RMJ%20Hall.%20Can%20you%20share%20the%20details?"
  className="fixed bottom-6 right-6 group"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
>
  {/* Tooltip */}
  <div className="absolute right-20 bottom-1/2 translate-y-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
    I'm here, click me!
  </div>

  {/* Icon Button */}
  <div className="animate-bounce bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300">
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12.04 2.003a9.944 9.944 0 00-8.5 15.08l-1.09 3.9 4.03-1.06a9.96 9.96 0 0014.54-8.89 9.943 9.943 0 00-9.98-9.98zm0 18.018a8.04 8.04 0 01-4.26-1.2l-.31-.2-2.39.63.64-2.35-.2-.32a8.07 8.07 0 1113.69-6.19 8.04 8.04 0 01-6.2 9.63zm4.38-6.3c-.24-.12-1.4-.69-1.61-.77-.22-.08-.37-.12-.52.12-.15.24-.6.76-.74.91-.14.15-.27.17-.5.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.2-1.4-1.34-1.64-.14-.24-.02-.38.1-.5.11-.11.25-.27.37-.4.12-.14.15-.24.23-.4.08-.17.04-.3-.02-.42-.07-.12-.52-1.26-.72-1.73-.19-.47-.39-.4-.52-.41l-.45-.01c-.15 0-.4.06-.6.3s-.79.77-.79 1.87.82 2.17.94 2.32c.11.15 1.61 2.45 3.91 3.43.55.24.97.38 1.3.49.55.17 1.05.15 1.45.09.44-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.15-1.12-.06-.1-.22-.15-.46-.27z" />
    </svg>
  </div>
</a>


      </div>
    </div>

  );
}

export default Home;
