import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  //App compenentinde productName adında bir state tanımlayın ve başlangıç değeri olarak "Buzdolabı" değerini atayın.
  const productName = "Buzdolabi";




  {/* <Product productName="Ayakkabi" price={3200} /> */ }

  {/* <hr /> */ }

  {/* <Product productName="Pantolon" price={900} /> */ }

  {/* <hr /> */ }

  {/* Product compenentine atadiğimiz yer */ }
  {/* <Product productName={productName} price={1500} /> */ }

  return (

    <div>

      <Container >

        <Product productName="Telefon" price={33200} />
        <Product productName="Ayakkabi" price={3200} />
        <Product productName="Pantolon" price={900} />
        <Product productName={productName} price={1500} />

      </Container>

    </div>
  )
}

export default App
