import "./index.css"
import { useState } from "react"
function App() {
  const [input, setInput] = useState("Hello")
  const [tasks, setTasks] = useState([
    { id: 2, task: "my second task" },
    { id: 1, task: "my first task" },
  ])

  function addTask() {
    if (input === "") {
      return // Do nothing if input is empty
    }
    let newTask = input

    setTasks((prevTask) => [
      { task: newTask, id: prevTask.length + 1 },
      ...prevTask,
    ])
  }
  function handleChange(e) {
    setInput(e.target.value)
  }
  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }
  return (
    <div className=" h-auto mt-16 flex flex-col justify-center items-center ">
      <div className="flex gap-3 mb-7">
        <input
          type="text"
          className="outline-black outline-1 outline-double rounded p-2 w-1/2"
          value={input}
          onChange={handleChange}
        />
        <button
          onClick={addTask}
          className="rounded bg-slate-500 p-2 text-white  w-1/2"
        >
          add Task
        </button>
      </div>
      <div className="w-full">
        <h5>{input}</h5>
        <div>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between mb-3 ">
              <strong>{task.id}</strong> <i>{task.task} </i>
              <button
                className="mx-3 p-3 bg-red-600 text-white rounded"
                onClick={() => handleDelete(task.id)}
              >
                delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
