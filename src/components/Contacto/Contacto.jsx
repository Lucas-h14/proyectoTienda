import React, { useState } from 'react';
import styles from './Contacto.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = (name, value) => {
    let error = '';

    switch (name) {
      case 'nombre':
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(value)) {
          error = 'El nombre solo debe contener letras.';
        }
        break;
      case 'email':
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
          error = 'Email inválido.';
        }
        break;
      case 'telefono':
        if (!/^\d+$/.test(value)) {
          error = 'El teléfono solo debe contener números.';
        }
        break;
      case 'mensaje':
        if (value.trim().length < 10) {
          error = 'El mensaje debe tener al menos 10 caracteres.';
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validate(name, value);
  };

  const isFormValid = () => {
    return (
      formData.nombre &&
      formData.email &&
      formData.telefono &&
      formData.asunto &&
      formData.mensaje &&
      Object.values(errors).every((error) => !error)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }

    console.log('Formulario enviado:', formData);
    setSubmitStatus('success');
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
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

        <form onSubmit={handleSubmit} className={styles.contactoForm} noValidate>
          {['nombre', 'email', 'telefono', 'asunto', 'mensaje'].map((field) => (
            <div key={field} className={styles.formGroup}>
              <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              {field === 'mensaje' ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              )}
              {errors[field] && <p className={styles.error}>{errors[field]}</p>}
            </div>
          ))}

          <button type="submit" className={styles.submitButton} disabled={!isFormValid()}>
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
