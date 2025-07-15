import React, { useState } from "react";
import { useParams } from "react-router-dom";

const hallImages = {
  a: [
    { src: "/hall-A/IMG-20250713-WA0007.jpg", label: "Hall A - Stage View" },
    { src: "/hall-A/IMG-20250713-WA0010.jpg", label: "Hall A - Stage View" },
    { src: "/hall-A/IMG-20250713-WA0011.jpg", label: "Hall A - Stage View" },
    { src: "/hall-A/IMG-20250713-WA0012.jpg", label: "Hall A - Stage View" },
    { src: "/hall-A/IMG-20250713-WA0017.jpg", label: "Hall A - Stage View" },
    { src: "/hall-A/IMG-20250713-WA0018.jpg", label: "Hall A - Stage View" },
    { src: "/real_images/IMG-20250709-WA0001.jpg", label: "Hall A - Stage View" },
    { src: "/real_images/IMG-20250709-WA0002.jpg", label: "Hall A - Seating" },
    { src: "/real_images/IMG-20250709-WA0003.jpg", label: "Hall A - Seating" },
    { src: "/real_images/IMG-20250709-WA0004.jpg", label: "Hall A - Seating" },
    { src: "/real_images/IMG-20250709-WA0005.jpg", label: "Hall A - Seating" },
  ],
  b: [
    { src: "/hall-B/IMG-20250714-WA0014.jpg", label: "Hall B - Decor" },
    { src: "/hall-B/IMG-20250714-WA0017.jpg", label: "Hall B - Dining Area" },
    { src: "/hall-B/Screenshot 2025-07-15 184739.png", label: "Hall B - Seating" },
    { src: "/hall-B/Screenshot 2025-07-15 184950.png", label: "Hall B - Seating" },
    { src: "/hall-B/Screenshot 2025-07-15 185052.png", label: "Hall B - Seating" },
  ],
};

function HallGallery() {
  const { hallId } = useParams();
  const images = hallImages[hallId?.toLowerCase()];
  const [selectedImg, setSelectedImg] = useState(null);

  if (!images) {
    return (
      <div className="p-8 text-center text-xl text-red-500">
        No gallery found for Hall {hallId?.toUpperCase()}
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
            className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg.src}
            alt={selectedImg.label}
            className="max-w-full max-h-full rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}

export default HallGallery;
