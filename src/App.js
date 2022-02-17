import './App.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import BookWrapper from './components/BookWrapper'
import Registration from './components/Registration'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-dark">
      <BrowserRouter>
      <MyNavbar />
      <Welcome />
      <Routes>
      <Route path='/' element={<BookWrapper/>}/>
     <Route path='/register' element={ <Registration/>}/>
      </Routes>
      <MyFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
