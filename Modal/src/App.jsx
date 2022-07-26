import {openModal, openModalAccount} from './components/OpenModal'
import './App.css'

function App() {
  function handleOpenModal() {
    openModal()
  }

  function handleOpenModal2() {
    openModalAccount()
  }

  return (
    <div className="App">
      <button className='openModal' onClick={handleOpenModal}>Abrir Modal</button>
      <button className='closeModal' onClick={handleOpenModal2}>Abrir Modal</button>
    </div>
  )
}

export default App
