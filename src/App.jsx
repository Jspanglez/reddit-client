import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import SideBar from './components/SideBar/SideBar'

function App() {
  return (
    <>
      <Header />
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <SideBar />
    </>
  )
}

export default App
