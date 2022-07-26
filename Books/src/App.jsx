import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Index from './pages'
import Create from './pages/Create'
import View from './pages/View'
import Store from './store/Store'
import './App.css'

function App() {

  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="create" element={<Create />}/>
          <Route path="view/:bookId" element={<View />}/>
        </Routes>
      </BrowserRouter>
    </Store>
  )
}

export default App
