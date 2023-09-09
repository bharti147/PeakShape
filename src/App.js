import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import './styles/App.scss';
import './styles/header.scss';
import Contact from './components/Contact'
import Services from './components/Services'
import './styles/mediaQuery.scss'
import './styles/footer.scss'

const App = () => {
  return (
    <div className='App'>
    <Router>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/services" element={<Services/>}></Route>
            {/* <Route path="/contact" element={<Services/>}></Route> */}
        </Routes>
        <Footer/>
    </Router>
      
    </div>
  )
}

export default App
