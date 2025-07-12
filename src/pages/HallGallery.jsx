import React from "react";
import { useParams } from "react-router-dom";

// ✅ You can later fetch this dynamically
const hallImages = {
  a: [
    { src: "/real_images/IMG-20250709-WA0001.jpg", label: "Hall A - Stage View" },
    { src: "/real_images/IMG-20250709-WA0002.jpg", label: "Hall A - Seating" },
    { src: "/real_images/IMG-20250709-WA0003.jpg", label: "Hall A - Seating" },
    { src: "/real_images/IMG-20250709-WA0004.jpg", label: "Hall A - Seating" },
    { src: "/real_images/IMG-20250709-WA0005.jpg", label: "Hall A - Seating" },
  ],
  b: [
    { src: "/hall-B/WhatsApp Image 2025-06-30 at 14.01.27_cd096619.jpg", label: "Hall B - Decor" },
    { src: "/hall-B/WhatsApp Image 2025-06-30 at 14.01.28_0af8412c.jpg", label: "Hall B - Dining Area" },
    { src: "/hall-B/WhatsApp Image 2025-06-30 at 14.01.28_83c72793.jpg", label: "Hall A - Seating" },
    { src: "/hall-B/WhatsApp Image 2025-06-30 at 14.01.28_384bd4c3.jpg", label: "Hall A - Seating" },
    { src: "/hall-B/WhatsApp Image 2025-06-30 at 14.01.28_ead01d03.jpg", label: "Hall A - Seating" },
  ],
};

function HallGallery() {
  const { hallId } = useParams();
  const images = hallImages[hallId.toLowerCase()];

  if (!images) {
    return (
      <div className="p-8 text-center text-xl text-red-500">
        No gallery found for Hall {hallId.toUpperCase()}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Hall {hallId.toUpperCase()} Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HallGallery;