import userEvent from "@testing-library/user-event"
import { useRef } from "react"

const App = () => {
  const ref = useRef()
  const inputRef = useRef()

  const click = () => {
    console.log(ref.current.clientHeight)
    ref.current.innerHTML = 'PR no se hace'
  }

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App