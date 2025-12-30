import Signup from "./Signup"
import Login from "./Login"
import { motion } from "framer-motion"
import { useState,useEffect } from "react";
export default function Home({tab,setTab,loginDetecter}){
    const [UI,setUI] = useState(false);
    useEffect(()=>{
       const intervel =  setTimeout(()=>setUI(true),1000)
       return ()=> clearTimeout(intervel)
    },[])
    const mainLines = ["WEAKNESS IS CHOICE","STRENGTH IS COMMITMENT"];
    return(
        <section  id="home" className="flex justify-center relative bg-linear-to-b from-80% from-black to-gray-800  z-10" style={{ fontFamily: "'Cinzel', serif"}}>
            <div  className="h-[90vh] flex flex-col justify-center items-center border-b-[30%] gap-2.5">
                <motion.p  initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="md:text-[40px] text-[20px] text-white z-20">WELCOME TO</motion.p>
                <motion.img initial={{opacity:0}} animate={{opacity:1}}  viewport={{once:true}} transition={{duration:1, ease:"linear"}} src="./Images/Logo.png" alt="The Forge" className="md:h-max h-25 z-20"/>
                <motion.p initial={{opacity:0}} animate={UI?{opacity:1}:{opacity:0}} transition={{duration:1}} className="md:text-[20px] text-white z-20">where dedication meets transformation.</motion.p>
                 {
                    !loginDetecter&&(
                        <motion.button initial={{opacity:0}} animate={UI?{opacity:1}:{opacity:0}} viewport={{once:true}} transition={{duration:1,ease:"linear"}} className="md:h-12.5 h-6.25 md:w-75 w-45 md:text-[20px] text-[13px] rounded-[20px] text-red-900 bg-[rgb(170,170,170)] duration-100 hover:scale-105 hover:cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] active:scale-100 z-20" onClick={()=>(setTab("Login"))} >Click Here to join us</motion.button>
                    )
                }
                <div className="absolute h-full w-full inset-0 border-7 border-b-red-900 rounded-b-[30%] bg-[rgba(0,0,0,0.5)] z-10"></div>
                <div className="absolute h-[90vh] w-full inset-0 rounded-b-[30%] -z-10" style={{ backgroundImage: "url('/images/Homebg.png')" }}></div>
            </div>
             <div className={`${tab==="Login"||tab==="Signup"?"block":"hidden"} absolute h-full w-full rounded-b-[30%] inset-0 backdrop-blur-[10px] z-10`}></div>
            {tab==="Login"&&(<Login setTab={setTab}/>)}
            {tab==="Signup"&&(<Signup setTab={setTab}/>)}
        
        </section>
    )

}
