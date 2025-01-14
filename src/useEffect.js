import { useState, useEffect, Component } from 'react'

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  // variable, funcion que utiliza variable

  const incrementar = () => {
    setContador(contador + 1)
  }

  return [contador, incrementar]
}

// const Interval = (contador) => {
//   useEffect(() => {
//     const i = setInterval(()=>console.log(contador),1000)
//     return () =>  clearInterval(i)
//   },[contador])

//   return(
//     <p>Intervalo</p>
//   )
// }

class Interval extends Component{
  intervalo = '' 
  componentDidMount() {
    this.intervalo = setInterval(()=>console.log(this.props.contador), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalo)
  }
  render() {
    return(
      <p>Intervalo</p>
    )
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0)
  useEffect(() => {
    document.title = contador
  }, [contador]) // cada vez que cambie el parametro
  // }) cuando se renderiza siempre se ejecuta con cualquier cambio
  // }, []) solo una vez
  return(
    <div>
      Contador: {contador}
      <button onClick={incrementar}>incrementar</button>
      <Interval contador={contador}></Interval>
    </div>
  )
}

export default App