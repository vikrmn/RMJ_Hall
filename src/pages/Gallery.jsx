import React, { useState } from "react";

const images = [
  "/hall-A/IMG-20250713-WA0007.jpg",
  "/real_images/IMG-20250709-WA0001.jpg",
  "/hall-B/IMG-20250714-WA0017.jpg",
  "/hall-A/IMG-20250713-WA0010.jpg",
  "/real_images/IMG-20250709-WA0002.jpg",
  "/hall-B/Screenshot 2025-07-15 184739.png",
  "/hall-A/IMG-20250713-WA0011.jpg",
  "/real_images/IMG-20250709-WA0003.jpg",
  "/hall-B/Screenshot 2025-07-15 184950.png",
  "/hall-A/IMG-20250713-WA0012.jpg",
  "/real_images/IMG-20250709-WA0004.jpg",
  "/hall-A/IMG-20250713-WA0017.jpg",
  "/hall-B/Screenshot 2025-07-15 185052.png",
  "/real_images/IMG-20250709-WA0005.jpg",
  "/hall-B/IMG-20250714-WA0014.jpg",
  "/hall-A/IMG-20250713-WA0018.jpg"
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="h-64 w-full overflow-hidden rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>


      {/* Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImg(null)}
        >
          <img
            src={selectedImg}
            alt="Selected"
            className="max-w-full max-h-full rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
