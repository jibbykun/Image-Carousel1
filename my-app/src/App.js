import React from 'react';
import { useState, useEffect } from 'react';
import CatPicture from './Assets/Images/kitty-cat.jpeg';
import DogPicture from './Assets/Images/Dog-picture.jpeg';

const images = [
  { src: CatPicture, alt: 'Cat Picture' },
  { src: DogPicture, alt: 'Dog Picture' },
]

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatic carousel: Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 2000); // Change every 3 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Image Carousel</h1>
      <div style={{ position: 'relative', width: '300px', margin: 'auto' }}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          style={{ width: '100%', borderRadius: '10px' }}
        />
        {/* Prev Button */}
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          ‹
        </button>
        {/* Next Button */}
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '50%',
          }}
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default App;