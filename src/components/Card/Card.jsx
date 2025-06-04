import React from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './Card.module.css';

const products = [
  {
    id: 1,
    image: "/images/balon.jpg",
    name: "Balón de Fútbol Professional",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.5
  },
  {
    id: 2,
    image: "/images/boley.jpg",
    name: "Balón de Voleibol",
    price: 39.99,
    oldPrice: 49.99,
    rating: 4.2
  },
  {
    id: 3,
    image: "/images/guayos.jpg",
    name: "Guayos de Fútbol",
    price: 89.99,
    oldPrice: 109.99,
    rating: 4.7
  },
  {
    id: 4,
    image: "/images/raqueta.jpg",
    name: "Raqueta de Tenis",
    price: 129.99,
    oldPrice: 149.99,
    rating: 4.8
  },
    {
    id: 5,
    image: "/images/guantes.jpg",
    name: "guantes de boxeo",
    price: 10.99,
    oldPrice: 50.99,
    rating: 4.8
  }
];

function Card() {
  return (
    <div className={styles.container}>
      {products.map(product => (
        <CardItem 
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          oldPrice={product.oldPrice}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default Card;