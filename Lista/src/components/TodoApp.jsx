import { useState } from "react"
import Todo from "./Todo"

export default function TodoApp() {
    const [title, setTilte] = useState('')
    const [todos, setTodos] = useState([])

    function handleChange(e) {
        const value = e.target.value
        setTilte(value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newTodo = {
            id : crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [...todos]
        temp.unshift(newTodo)
        setTodos(temp)

        setTilte('')
    }

    function handleUpdate(id, value){
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value
        setTodos(temp)
    }

    function handleDelete(id){
        const temp = todos.filter(items => items.id !== id)
        setTodos(temp)
    }

    return <div className='todo-app'>
        <h1>Todo List App</h1>

        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} className="input" type="text" value={title} placeholder='Your task'/>
            <input onClick={handleSubmit} className="button-create" type="submit" value="Create"/>
        </form>

        <div className="todos">
            {
                todos.map(item => (
                    <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))
            }
        </div>
    </div>
}