import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaPlus, FaMinus } from 'react-icons/fa';
import styles from './CardItem.module.css';

function CardItem({ image, name, price, oldPrice, rating }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => quantity > 1 && setQuantity(prev => prev - 1);

  return (
    <div className={styles.card}>
      {/* Encabezado con imagen y favoritos */}
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.image} />
        <button 
          className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
          onClick={() => setIsFavorite(!isFavorite)}
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <FaHeart />
        </button>
        {oldPrice && (
          <span className={styles.discountBadge}>
            -{Math.round((1 - price/oldPrice) * 100)}%
          </span>
        )}
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className={styles.cardBody}>
        <h3 className={styles.productName}>{name}</h3>
        
        {/* Rating */}
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={i < Math.floor(rating) ? styles.filledStar : styles.emptyStar} 
            />
          ))}
          <span className={styles.ratingValue}>({rating})</span>
        </div>

        {/* Precios */}
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>${price.toFixed(2)}</span>
          {oldPrice && (
            <span className={styles.oldPrice}>${oldPrice.toFixed(2)}</span>
          )}
        </div>

        {/* Contador de cantidad */}
        <div className={styles.quantitySection}>
  <span className={styles.quantityLabel}>Cantidad:</span>
  <div className={styles.quantityControls}>
    <button 
      className={styles.quantityButtonMinus}
      onClick={handleDecrement}
      disabled={quantity <= 1}
      aria-label="Reducir cantidad"
    >
      <FaMinus size={12} />
    </button>
    <span className={styles.quantity}>{quantity}</span>
    <button 
      className={styles.quantityButtonPlus}
      onClick={handleIncrement}
      aria-label="Aumentar cantidad"
    >
      <FaPlus size={12} />
    </button>
  </div>
</div>

        {/* Botones de acción */}
        <div className={styles.actionButtons}>
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