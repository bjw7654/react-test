import { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';
interface CarouselProps {
  images: string[];
  link: string | null;
  title?: string | null;
  projectDetails?: string | null;
  flexDirection?: string | null;
}
const Carousel: React.FC<CarouselProps> = ({ images, link }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <a
        href={link ? link : undefined}
        target="_blank"
        rel="noopener noreferrer">
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.5s',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              style={{ width: '100%', flex: '0 0 100%' }}
            />
          ))}
        </div>
      </a>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          marginTop: '1rem',
          marginBottom: '1rem',
          textAlign: 'center',
        }}>
        {images.map((_, index) => (
          <FaCircle
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              cursor: 'pointer',
              margin: '0 5px',
              color: index === currentIndex ? '#0088A9' : 'gray', // Active circle is blue
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;