import { motion } from "framer-motion";
export default function Services(){
    const servicesList = ["Training Programs","Fitness Classes","Nutrition & Diet Plans","Special Programs"];
    const WCU = ["☑️ Expert Coaches","☑️ State-of-the-art Equipment","☑️ Personalized Programs","☑️ Community & Motivation","☑️ Flexible Memberships"]
    const images = ["./Images/Staff.png","./Images/FC.png","./Images/Food.png","./Images/Programs.png"];
    const states = ["500+ Members","10+ Trainers","20+ Programs","10+ Year Experience"]
    return(
         <section id="services" className="flex flex-col justify-center items-center gap-12.5 bg-linear-to-b from-10% from-gray-800 to-black" style={{ fontFamily: "'Cinzel', serif"}}>
           <div className="flex flex-col justify-center items-center mt-25 gap-12.5"> 
             <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:2}} className="text-white md:text-[40px] text-[30px] border-b-[3px] border-red-900">What We Offer?</motion.p>
             <ul className="w-full flex md:flex-row flex-col justify-center md:gap-10 gap-15"> {
                servicesList.map((items,index)=>(
                    <li key={index} className="flex flex-col justify-center md:gap-5 items-center">
                        <motion.img initial={{y:50,opacity:0}} whileInView={{y:-20,opacity:1}} viewport={{once:true,amount:0.1}} transition={{duration:1}} src={images[index]} alt={servicesList[index]} className="md:h-50 h-37.5 w-62.5 md:border-b-10 border-b-6 border-red-900 rounded-[40px] shadow-[0_0_20px_rgb(255,255,255)]"/>
                        <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:1}} transition={{duration:2}} className="text-white md:text-[25px]">{items}</motion.h1>
                    </li>
                  ))
              }</ul>
            </div>
            <div className="md:h-[70vh] h-[30vh] flex flex-col justify-center items-center gap-[60px] overflow-hidden">
                <motion.p initial={{x:-300}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:0.6}} className="text-white md:text-[40px] text-[30px] border-b-[3px] border-red-900 ml-5">Why Choose Us?</motion.p>
                <ul className="flex justify-center items-center md:gap-[320px] gap-[58px] rounded-[50px]"> 
                    <li className="md:w-[450px]  flex flex-col ">
                        {
                            WCU.map((items,index)=>(
                           <motion.h1 initial={{x:-100}} whileInView={{x:0}} viewport={{once:true}} transition={index===0?{duration:0.6}:index===1?{duration:0.8}:index===2?{duration:1}:index===3?{duration:1.2}:{duration:1.4}} key={index} className="text-white md:text-[25px] text-[12px]">{items}</motion.h1>))
                        }
                    </li>
                    <motion.img initial={{x:100}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:1}} src="./Images/ServicesBg.png" alt="Services" className="md:h-75 md:w-125 h-[120px] w-[150px] border-red-900 md:rounded-l-[90px] rounded-l-[40px] shadow-[0_0_30px_rgb(255,255,255)]"/>
                </ul>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-7.5">
                 <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:0.7}} className="text-white md:text-[40px] text-[20px] border-b-[3px] border-red-900">More Reasons to Join Us</motion.p>
                <ul className="flex md:flex-row flex-col justify-center items-center md:gap-17.5 gap-1.25 "> {
                    states.map((items,index)=>(
                       <motion.h1 initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true,amount:0.3}} transition={{duration:1}} key={index} className="md:w-57.5 w-32.5 md:h-12.5 h-6.25 text-white md:text-[20px] text-[10px] text-center rounded-[15px] border-b-[5px] border-red-900  bg-[rgba(255,255,255,0.4)]">{items}</motion.h1>
                    ))
                }</ul>
            </div>    
        </section>

        
    )

}