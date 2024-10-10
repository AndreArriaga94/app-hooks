import { useState } from "react"

// reglas de los hooks:
//    idealmente al inicio de una funcion, no puede estar dentro de nada (loop, condiciones)
//    solo se llaman en 2 partes: componentes de react (funcion que devuelve jsx) o custom hooks
//    cuando se crea un custom hook siempre tiene que comensar con useNombre

// class App extends Component{
//   state = {contador: 0}
//   incrementar = () => {
//     this.setState({contador: this.state.contador +1})
//   }
//   render(){
//     return(
//       <div>
//         contador: {this.state.contador}
//         <button onClick={this.incrementar}>incrementar</button>
//       </div> 
//     )
//   }
// }

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  // variable, funcion que utiliza variable

  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  return(
    <div>
      Contador: {contador}
      <button onClick={incrementar}>incrementar</button>
    </div>
  )
}

export default App