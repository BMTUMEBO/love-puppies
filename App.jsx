import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../src/commonResource/css/bootstrap.css'
import '../src/commonResource/css/mystyle.css'
import Header from '../Components/Header.jsx'
import Body1 from '../Components/Body1.jsx'
import Body2 from '../Components/Body2.jsx'
import Body3 from '../Components/Body3.jsx'
import Footer from '../Components/Footer.jsx'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Body1/>
   <Body2/>
   <Body3/>
   <Footer/>
    </>
  )
}

export default App
