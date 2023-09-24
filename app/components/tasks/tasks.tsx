'use client'
import axios from "axios"
import { useEffect, useState } from "react"

export default function Tasks() {
  const [inputText, setInputText] = useState('')
  const [tasks, setTasks] = useState<any[]>([])

  async function fetchTasks() {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users/1/todos')
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  function addNewTask(task: string) {
    if (task === '') {
      return
    }

    const curretTasks = [...tasks]

    curretTasks.push({ id: curretTasks.length + 1, title: task, userId: 1 })

    setTasks(curretTasks)
  }

  return (
    <div className="w-max h-max flex flex-col gap-6 p-4 bg-slate-800">
      <h1 className="text-3xl font-nunito text-white">Lista de tarefas</h1>
      <ul className="flex flex-col gap-2">
        {tasks.map(task => <li className="text-white" key={task.id}>{task.title}</li>)}
      </ul>
      <div className="w-full flex flex-col gap-2">
        <input onChange={(e) => setInputText(e.target.value)} className="border rounded-sm outline-none border-violet-600 bg-slate-700 text-white px-2 py-1" type="text" placeholder="Nova tarefa" />
        <button onClick={() => addNewTask(inputText)} className="bg-violet-600 hover:bg-violet-700 text-white py-2 ">Adicionar</button>
      </div>
    </div>
  )
}