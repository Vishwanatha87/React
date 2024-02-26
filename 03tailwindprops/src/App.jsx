import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-red-400 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card Device="Macbook" myarr={[1,2,3]}/> 
      {/* pass array as objects or inside */}
      <Card/>
    </>
  )
}

export default App
