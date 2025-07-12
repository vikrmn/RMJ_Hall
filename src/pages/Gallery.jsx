import React, { useState } from "react";

const images = [
  "/real_images/IMG-20250709-WA0001.jpg",
  "/real_images/IMG-20250709-WA0002.jpg",
  "/real_images/IMG-20250709-WA0003.jpg",
  "/real_images/IMG-20250709-WA0004.jpg",
  "/real_images/IMG-20250709-WA0005.jpg",
  "/real_images/banquet_hall_in_coimbatore_3.jpg",
];

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Gallery</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setSelectedImg(img)}
          />
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
