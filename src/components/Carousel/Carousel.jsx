import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const images = [
  {
    src: "/images/lebron.jpg",
    alt: "LeBron James",
    caption: "El rey de la cancha confía en nosotros"
  },
  {
    src: "/images/messi.jpg",
    alt: "Lionel Messi",
    caption: "La magia se viste con nuestro equipamiento"
  },
  {
    src: "/images/cristiano.jpg",
    alt: "Cristiano Ronaldo",
    caption: "Excelencia deportiva, calidad premium"
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.slide}>
              <img 
                src={image.src} 
                alt={image.alt} 
                className={styles.image}
              />
              <div className={styles.caption}>
                <h2>LOS MEJORES DEPORTISTAS COMPRAN EN NUESTRA TIENDA</h2>
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;