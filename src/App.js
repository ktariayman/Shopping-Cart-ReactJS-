import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import Details from './components/Details'
import {DataProvider} from './components/DataProvider'
import Cart from './components/Cart'

function App() {
  return (
    <DataProvider>

    <div className="App">
      <Router>
        <Header />

        <section>
          <Routes>
              <Route path="products" element ={<Products />} />
              <Route path="products/:id" element ={<Details />} />
              <Route path="cart" element={ <Cart /> } />

          </Routes>
        </section>
      </Router>
      </div>
      </DataProvider>
  );
}

export default App;
