import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import LogIn from './pages/LogIn'

/* <Router> är en context som måste ligga runt allt annat för att det ska fungera
<Routes> visar vilken sida som ska visas, <Route /> är ett self closing element som dirigerar
till sidan. path='/about' dirigerar till sidan about. element={} kan du lägga i vad som helst, man brukar ha en pages sida 
som man hänvisar till(page components), exempel: element={<Home />}
path='*' är ett wildcard som leder en till en specifik sida om fel url skrivs in
*/

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/details/:id' element={<ProductDetails />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </div>
    </Router>
    )
}

export default App
