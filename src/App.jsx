import { useState, useEffect } from 'react'
import './App.scss'
import Button from './components/Button'
import Title from './components/Title'

function App() {

  {/*Ejemplo de HOOKS (useState y useEffect) -> Permite tener estados
     -> useState te permite pasarle variables de estado (dinámico) a los componentes */}
  const [count, setCount] = useState(0)
  console.log(count)

  {/*-> useEffect ejecuta código cuando:
        - 1 vez fijo, cuando se carga la página (el componente) 
        - Cada vez que cambia estado de la varibale en []
      Cada vez que count cambia, se ejecuta useEffect
      Aquí se hacen los FETCH y las llamas a las APIs*/}
  useEffect(() => {
    console.log("UseEffect working everytime count changes")

  }, [count])
  

  return (
    
      <div className='App'>

          {/*Ejemplos de COMPONENTES*/}
          {/*Llamadas al componente Title + argumentos
             PROPS -> Pasarle valores personalizados al componente*/}
          <Title text="Texto 1"/>
          <Title text="Texto 2"/>
          <Title/>

          {/*Llamadas al componente Button + argumentos*/}
          <Button 
            onClick={ () => alert("Primer botón")} 
            text="See more" 
          />
          <Button 
            text="polilla"/>
          <Button/>

          {/*Ejemplo HOOKS
             Podemos hacer setCount(count +1)
             pero es mejor hacer prev para asegurarnos que
             siempre tenemos el último estado*/}
          <Button 
            onClick= { () => setCount(prev => prev + 1) }
            text = "Add clicks"
          />
          {/*UseState te permite pasarle variables a los componentes */}
          <Title
            text = {`Number of clicks: ${count}`}
          />

      </div>

  )
}

export default App
