import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Content from './components/content.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
function App() {
  const jokes=[
    "I told my suitcase that there will be no vacations this year… now it's full of emotional baggage.",
    "Parallel lines have so much in common—it's a shame they'll never meet.",
    "I used to play piano by ear, but now I use my hands.",
    "I asked the librarian if the library had any books on paranoia… she whispered, They're right behind you.",
    "I told my wife she should embrace her mistakes… she gave me a hug.",
    "My friend said he didn't understand cloning—I told him, That makes two of us.",
    "I started a band called 999 Megabytes… we still haven't got a gig.",
    "I tried to catch fog yesterday… but I mist.",
    "I told my dog I needed some space… now he won't stop barking at the stars.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
  ];
  function fetchJoke(){
    let ind=Math.floor(Math.random()*9);
    return jokes[ind]
  }
  return (
    <>
      <Header titleName="This is a prop title"></Header>
      <Content getJoke={fetchJoke}></Content>
      <Footer></Footer>
    </>
  )
}

export default App
