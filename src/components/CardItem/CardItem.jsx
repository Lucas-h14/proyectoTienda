import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart } from 'react-icons/fa';
import styles from './CardItem.module.css';

function CardItem({ image, name, price, oldPrice, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <button 
          className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <FaHeart />
        </button>
        {oldPrice && <span className={styles.discountBadge}>-{Math.round((1 - price/oldPrice) * 100)}%</span>}
      </div>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < Math.floor(rating) ? styles.filledStar : styles.emptyStar} 
            />
          ))}
          <span>({rating})</span>
        </div>
        
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>${price.toFixed(2)}</span>
          {oldPrice && <span className={styles.oldPrice}>${oldPrice.toFixed(2)}</span>}
        </div>
        
        <div className={styles.actions}>
          <button className={styles.addToCart}>
            <FaShoppingCart /> Añadir al carrito
          </button>
          <button className={styles.buyNow}>Comprar ahora</button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;