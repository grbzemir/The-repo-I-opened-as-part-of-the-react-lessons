import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {

    console.log("Her zaman calisir")

  })

  useEffect(() => {

    console.log("Sadece ilk render edildiğinde calisir")

  }, [])
  //Veritabanından ürünleri getir ve listele.
  //2. parametre olduğu için virgül alındı sadece bir kez çalışır


  useEffect(() => {

    console.log("İlk render edildiğinde ve firstName  veya LastName stati degistiğinde calisir")

  }, [firstName, lastName])

  // useEffect(() => {

  //   console.log("İlk render edildiğinde ve lastName degistiğinde calisir")

  // }, [lastName])




  return (
    <>
      <div><button onClick={() => setFirstName("Enes")}>Adi Değiştir</button></div>
      <div><button onClick={() => setLastName("Bayram")}>Soyismi Değiştir</button></div>
    </>
  )
}

export default App
