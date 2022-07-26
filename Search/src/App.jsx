import { useState } from "react"
import SearchBar from "./components/SearchBar"
import './App.css'

const people = [
  {
    id : 'people-01',
    title : 'Daniel Prieto'
  },
  {
    id : 'people-02',
    title : 'Sara Jimenez'
  },
  {
    id : 'people-03',
    title : 'Mireia Dancot'
  },
  {
    id : 'people-04',
    title : 'Paola Samanate'
  },
  {
    id : 'people-05',
    title : 'Natalia Ramirez'
  }
]

const calendar = [
  {
    id : 'calendar-01',
    title : 'Caminar'
  },
  {
    id : 'calendar-02',
    title : 'Ir de compras'
  },
  {
    id : 'calendar-03',
    title : 'Comer Salchipapa'
  },
  {
    id : 'calendar-04',
    title : 'Estudiar front'
  },
  {
    id : 'calendar-05',
    title : 'Leer libros'
  }
]

const emails = [
  {
    id : 'email-01',
    title : 'Solicitud clear'
  },
  {
    id : 'email-02',
    title : 'Oferta de trabajo'
  },
  {
    id : 'email-03',
    title : 'Aviso importante'
  },
  {
    id : 'email-04',
    title : 'Invitacion a evento'
  },
  {
    id : 'email-05',
    title : 'Comida gratis'
  }
]

function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails])
  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all')

  function handleClick(e){
    const op = e.target.name

    switch (op) {
      case 'all':
        setData([...people, ...calendar, ...emails])
        setCurrentOption('all')
        break;
      case 'people':
        setData([...people])
        setCurrentOption('people')
        break;
      case 'calendar':
        setData([...calendar])
        setCurrentOption('calendar')
        break;
      case 'emails':
        setData([...emails])
        setCurrentOption('emails')
        break;

      default:
    }
  }

  function handleOnItemSelected(item){
        setSelection(item)
  }

  return (
    <div className="app">
      <div className="buttons">
        <button onClick={handleClick} name='all'>All</button>
        <button onClick={handleClick} name='people'>People</button>
        <button onClick={handleClick} name='calendar'>Calendar</button>
        <button onClick={handleClick} name='emails'>Emails</button>
      </div>

      {selection ? <p className="selection">You select: {selection.title}</p> : ''}

      <SearchBar items={data} onItemSelected={handleOnItemSelected} />
    </div>
  )
}

export default App
