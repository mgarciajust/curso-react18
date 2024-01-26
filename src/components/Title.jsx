import React from 'react';

//Componente Title llamado desde App.jsx
//Aquí defino la estructura del componente
//Le puedo pasar parámetros para personalizarlo

const Title = ({text = "Texto default"}) => {
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
};

export default Title;