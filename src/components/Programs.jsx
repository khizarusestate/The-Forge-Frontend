import { motion } from "framer-motion"
export default function Programs(){
    const programs = ["One-Month Basic Program","One-Month Premium Program","One-Year Program"]
    const prices = ["$20","$30","$100"]
    const images = ["./Images/MonthlyPackage.png","./Images/MonthyPremium.png","./Images/OneYearPackage.png"]
    return(
        <section id="programs" className="md:h-screen h-[200vh] flex flex-col justify-center items-center gap-12.5 bg-black" style={{ fontFamily: "'Cinzel', serif"}}>
            <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:0.5}} transition={{duration:2}} className="text-white md:text-[40px] text-[30px] border-b-3 border-red-900" > Our Programs</motion.h1>
             <div className="flex justify-center md:flex-row flex-col items-center gap-12.5">
                {
                    programs.map((items,index)=>(
                      <div key={index} className="flex flex-col justify-center gap-5 items-center">
                         <motion.img initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.1}} transition={{duration:1}} src={images[index]} alt={items} className={`h-75 w-70 rounded-[40px] ${index===0?"drop-shadow-[0_0_20px_rgb(255,255,255)]":index===1?"drop-shadow-[0_0_20px_rgb(0,0,255)]":"drop-shadow-[0_0_20px_rgb(255,0,0)]"}`}/>
                         <div className="flex flex-col justify-center items-center">
                             <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true,amount:1}} transition={{duration:2}} className={`md:text-[20px] ${index===0?"text-white":index===1?"text-blue-900":"text-red-900"}`}>{items}</motion.p>
                             <motion.p className={`md:text-[25px] text-[20px] ${index===0?"text-white":index===1?"text-blue-900":"text-red-900"}`}>Only {prices[index]}</motion.p>
                         </div>
                     </div>
                    ))
                }
            </div>
        </section>
    )
}