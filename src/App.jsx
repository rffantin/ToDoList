import "./app.css";
import React, { useState } from "react";
import { Title } from "./styles";

export default function App() {
  const [toDos, setToDos] = useState([]);
  const [valorDeBusca, setValorDeBusca] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [nextId, setNextId] = useState(1);
  const [render, setRender] = useState([]);

  function handleOnChange(e) {
    setInputValue(e.target.value);
  }

  function handleCheckBox(id) {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, checkboxStatus: !toDo.checkboxStatus } : toDo
    );
    setToDos(updatedToDos);
    setRender(updatedToDos);
  }

  function handleEditButton(id) {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, editOn: !toDo.editOn } : toDo
    );
    setToDos(updatedToDos);
    setRender(updatedToDos);
  }

  function handleEditInput(id, e) {
    const updatedToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, text: e.target.value } : toDo
    );
    setToDos(updatedToDos);
    setRender(updatedToDos);
  }

  function handleAddTask() {
    const trimmedInputValue = inputValue.trim();

    if (trimmedInputValue !== "") {
      const newTask = { id: nextId, text: trimmedInputValue, checkboxStatus: false, editOn: false };
      setToDos([...toDos, newTask]);
      setRender([...toDos, newTask]);
      setNextId(nextId + 1);
      setInputValue("");
    } else {
      alert("Favor inserir uma tarefa válida.");
    }
  }

  function handleBuscarTarefa() {
    const result = toDos.filter((toDo) => toDo.text === valorDeBusca);
    setRender(result.length < 1 ? toDos : result);
  }

  return (
    <div>

      <Title>Lista de Tarefas</Title>

      <input onChange={handleOnChange} value={inputValue} type="text" />

      <button onClick={handleAddTask}>Adicionar tarefa</button>
      <input type="text" onChange={(e) => setValorDeBusca(e.target.value)} value={valorDeBusca} />

      <button onClick={handleBuscarTarefa}>Buscar</button>

      <ul>
        {render.map((tarefa) => (

          
          <li
            style={tarefa.checkboxStatus ? { textDecoration: "line-through" } : {}}
            key={tarefa.id}
          >
            <input
              type="checkbox"
              value={tarefa.checkboxStatus}
              checked={tarefa.checkboxStatus}
              onChange={() => handleCheckBox(tarefa.id)}
            />
            {tarefa.editOn ? (
              <input type="text" value={tarefa.text} onChange={(e) => handleEditInput(tarefa.id, e)} />
            ) : (
              <p>{tarefa.text}</p>
            )}
            <button onClick={() => handleEditButton(tarefa.id)}>
              {tarefa.editOn ? "Salvar tarefa" : "Editar tarefa"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}