import { useState } from "react";
import Swal from 'sweetalert2';
import "./FormCheckout.css"

export default function FormCheckout(props){
    const [formData, setFormData] = useState(
        { username: "", phone: "", email: ""}
    )

    function handleInputChange(event){
        const { value, name } = event.target
        const newFormData = {...formData}
        newFormData[name] = value;
        setFormData(newFormData)
    }

    function resetForm(){
        setFormData({ username: "", phone: "", email: ""})
        Swal.fire({
            icon: 'info',
            title: 'Formulario Limpio',
            text: 'Los campos del formulario han sido restablecidos.',
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            background: '#007bff',
                color: '#FFF',
                customClass: {
                    popup: 'borde-alerta-form' 
                }
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: '¡Formulario Enviado!',
            html: `Gracias ${formData.username}! Tu pedido será procesado.`,
            showConfirmButton: true,
            confirmButtonText: 'Ver Detalles',
            confirmButtonColor: '#FF2442',
            background: '#007bff',
                color: '#FFF',
                customClass: {
                    popup: 'borde-alerta-form' 
                }
        });

        props.handleCheckout(formData)
    }

    function handleNumberInputChange(event){
        console.log(event.key);
        ( ! [1,2,3,4,5,6,7,8,9,0].includes( Number(event.key))) && event.preventDefault() ;
        
    }
    
    return(
        <form onSubmit={ handleSubmit } className="checkout-form">
            <label>Nombre
                <input
                value={formData.username}
                onChange={handleInputChange}
                type="text"
                name="username" />
            </label>
            <label>Email
                <input
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                name="email" />
            </label>
            <label>Teléfono
                <input
                value={formData.phone}
                onChange={handleInputChange}
                onKeyDown={ handleNumberInputChange }
                type="tel"
                name="phone" />
            </label>
            <button type="submit">Enviar</button>
            <button type="button" onClick={resetForm}>Limpiar Form</button>
        </form>
    )
}