import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
// Importa un ícono de carrito (puedes usar react-icons o una imagen)
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link to="/" className={styles.link}>Inicio</Link>
          <Link to="/contacto" className={styles.link}>Contacto</Link>
        </div>
        <div className={styles.navRight}>
          <Link to="/carrito" className={styles.cartLink}>
            <FaShoppingCart className={styles.cartIcon} />
            <span className={styles.cartCount}>0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;