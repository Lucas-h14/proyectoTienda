import React, { useState } from 'react';
import styles from './Contacto.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    setSubmitStatus('success');
    setFormData({ nombre: '', email: '', mensaje: '' });
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <div className={styles.contactoContainer}>
      <div className={styles.contactoHeader}>
        <h2>Contáctanos</h2>
        <p>¿Tienes preguntas? Escríbenos y te responderemos pronto.</p>
      </div>

      <div className={styles.contactoContent}>
        <div className={styles.contactoInfo}>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h3>Email</h3>
              <p>contacto@tiendadeportiva.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <div>
              <h3>Teléfono</h3>
              <p>+123 456 7890</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <div>
              <h3>Dirección</h3>
              <p>Calle Deportiva 123, Ciudad</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactoForm}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            <FaPaperPlane /> Enviar Mensaje
          </button>

          {submitStatus === 'success' && (
            <div className={styles.successMessage}>
              ¡Mensaje enviado con éxito!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contacto;