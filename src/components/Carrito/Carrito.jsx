import React from 'react';
import styles from './Carrito.module.css';

function Carrito() {
  return (
    <div className={styles.carrito}>
      <h2>Tu Carrito de Compras</h2>
      <p>Aquí aparecerán los productos que agregues</p>
      {/* Aquí iría la lista de productos */}
    </div>
  );
}

export default Carrito;