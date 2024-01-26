import React from 'react';

//Componente Button llamado desde App.jsx
//Aquí defino la estructura del componente
//Le puedo pasar parámetros para personalizarlo

const Button = ({
    //Parámetros que le paso + sus valores default
    text = "Click", 
    onClick = () => alert("Pechito")
}) => {
        return (
            //Estructura del botón
            <button onClick={onClick}>
                {text}
            </button>
        )
};

export default Button;