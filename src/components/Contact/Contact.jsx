import { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        setEnviado(true);

        setTimeout(() => {
            setFormData({ nombre: '', email: '', mensaje: '' });
            setEnviado(false);
        }, 3000);
    };

    if (loading) {
        return <h2>Cargando información de contacto...</h2>;
    }

    return (
        <section className="contact-container">
            <h2>Contacto</h2>
            <p>¿Tenés alguna consulta? ¡Escribinos!</p>

            <div className="contact-content">
                <div className="contact-info">
                    <h3>Información de contacto</h3>
                    <p><strong>Dirección:</strong> Av. Ejemplo 1234, Buenos Aires</p>
                    <p><strong>Teléfono:</strong> +54 11 1234-5678</p>
                    <p><strong>Email:</strong> info@papelyTinta.com</p>
                    <p><strong>Horario:</strong> Lunes a Viernes de 9:00 a 18:00hs</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            rows="5"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Enviar mensaje
                    </button>

                    {enviado && (
                        <p className="success-message">
                            ¡Mensaje enviado con éxito! Te responderemos pronto.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;