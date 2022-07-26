import { useState, useRef } from 'react'
import TableBlockView from './blockComponents/tableBlock/TableBlockView';
import TextBlockView from "./blockComponents/textBlock/TextBlockView";
import TodoBlockView from './blockComponents/todoBlock/todoBlockView';

export default function BlockView() {
    const ref = useRef(null)

    const [currentItem, setCurrentItem] = useState(null)
    const [type, setType] = useState('text')
    const [properties, setProperties] = useState(['id', 'text', 'completed'])

    const [data, setData] = useState([ { id: crypto.randomUUID(), text: 'Task', completed: false } ])

    function handleOnChange(item) {
        const {type, id, text} = item

        if(type === 'text'){
            const temp = [...data]
            const editItem = temp.find(i => i.id === id)
            if(editItem) {
                editItem.text = text
                setData([...temp])
            }
        }

        if(type === 'todo'){
            const temp = [...data]
            const editItem = temp.find(i => i.id === id)
            if(editItem) {
                editItem.text = text ?? editItem.text
                editItem.completed = item.completed ?? editItem.completed
                setData([...temp])
            }
        }

        if(type === 'table'){
            const temp = [...data]
            let editItem = temp.find(i => i.id === id)
            if(editItem) {
                editItem = item.item //asignar todas las propiedades
                setData([...temp])
            }
        }
    }

    function handleOnCreate() {
        const newItem = {
            id: crypto.randomUUID(),
            text: 'New Task',
            completed: false
        }

        properties.forEach((prop) => {
            if(!newItem.hasOwnProperty(prop)) {
                newItem[prop] = ''
            }
        })

        const temp = [...data, newItem]
        setData([...temp])
        setCurrentItem(newItem)
    }

    function handleNewColumn(name) {
        updateProperties(name)
    }

    function updateProperties(name) {
        const newProperties = [...properties, name]

        const temp = [...data]

        for (let i = 0; i < temp.length; i++) {
            const item = temp[i]
            for (let j = 0; j < newProperties.length; j++) {
                const prop = newProperties[j]
                if(item.hasOwnProperty(prop)) {
                    console.log('Ya existe la propiedad', prop)
                }
                else {
                    item[prop] = 'Value'
                }
            }
        }
        setProperties([...newProperties])
        setData([...temp])
    }

    function TypeSelector() {
        return (
            <div className='options'>
                    <button onClick={() => setType('text')}>Text</button>
                    <button onClick={() => setType('todo')}>Todo</button>
                    <button onClick={() => setType('table')}>Table</button>
            </div>
        )
    }

    if(type === 'todo') {
        return (
            <div className='container'>
                <TypeSelector />
                <TodoBlockView
                    ref={ref}
                    focusId={currentItem?.id}
                    data={data}
                    onChange={handleOnChange}
                    onCreate={handleOnCreate}
                />
            </div>
        )
    }

    if(type === 'table') {
        return (
            <div className='container'>
                <TypeSelector />
                <TableBlockView
                    data={data}
                    columns={properties}
                    onChange={handleOnChange}
                    onCreate={handleOnCreate}
                    onCreateNewColumn={handleNewColumn}
                />
            </div>
        )
    }

    // Por defecto se muestra tipo texto
    return (
        <div className='container'>
            <TypeSelector />
            <TextBlockView
                ref={ref}
                data={data}
                focusId={currentItem?.id}
                onChange={handleOnChange}
                onCreate={handleOnCreate}
            />
        </div>
    )
}