import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Programs from './components/Programs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useState,useEffect } from 'react'
export default function App(){
  const [tab,setTab] = useState("Home");
  const [loginDetecter,setLoginDetecter] = useState(false);
  useEffect(()=>{
    const data = localStorage.getItem("Token");
    data?setLoginDetecter(true):setLoginDetecter(false);
  },[])
  return(<>
    <Header setTab={setTab} tab={tab}/>
    <Home tab={tab} setTab={setTab} loginDetecter={loginDetecter}/>
    <Services/>
    <Programs/>
    <Contact tab={tab}/>
    <Footer/>
    </>
  )
}