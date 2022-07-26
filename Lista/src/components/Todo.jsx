import { useState } from "react"

export default function Todo({item, onUpdate, onDelete}) {
    const [isEdit, setIsEdit] = useState(false)

    function FormEdit() {
        const [newValue, setNewValue] = useState(item.title)

        function handleSubmit(e) {
            e.preventDefault()
        }

        function handleChange(e) {
            const value = e.target.value
            setNewValue(value)
        }

        function handleClick(e) {
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }

        return (
            <form onSubmit={handleSubmit}>
                <input className="edit-input" onChange={handleChange} type="text" value={newValue}/>
                <button onClick={handleClick}>update</button>
            </form>
        )
    }

    function TodoElement() {
        return (
            <div>
                <p>{item.title}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
                <button onClick={(e) => onDelete(item.id)}>Delete</button>
            </div>
        )
    }

    return (
        <div className="todo">
            {
            isEdit
            ? <FormEdit />
            : <TodoElement />
            }
        </div>
    )
}