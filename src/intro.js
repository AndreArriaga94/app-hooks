const impura = () => new Date().toLocaleString()

console.log(impura())

const Micomponente = ({miProp}) => {
// const Micomponente = (props) => {
  // const {miProp} = props
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

const App = () => {
  return(
    <Micomponente miProp={'IAA'}></Micomponente>
  )
}

export default App