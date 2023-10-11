import { useState } from 'react'
import './App.css'

function App() {
const [toDos, setToDos] = useState([])

const [inputValue, setInputValue] = useState("")
function handleOnChange(e){
setInputValue(e.target.value)
console.log(inputValue)
}
  return ( 

    <>   
    <ul>
    {toDos.map((tarefa, index) => <li key={index}>{tarefa}</li>)}
    </ul>
    <input onChange={handleOnChange} value={inputValue} type="text" />
    <button onClick={() => setToDos([...toDos, inputValue])}>Adicionar tarefa</button>
    </>
  
  )
}

export default App
