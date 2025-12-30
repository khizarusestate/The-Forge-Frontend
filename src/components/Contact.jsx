import { useState } from "react"
export default function Contact(){
    const [email,setEmail] = useState("");
    const [help,setHelp] = useState("");
    const [messege,setMessege] = useState("");
    const SMI = ["./Images/FacebookIcon.png","./Images/InstagramIcon.png","./Images/XIcon.png","./Images/YoutubeIcon.png"]
    const submitHandler = async (e)=>{
        e.preventDefault();
        const data = {email,help};
        setMessege("Please Wait...");
       try{ 
               const req = await fetch("Backand-Url here",{method:"POST",
                                                                        headers:{"Content-Type":"application/json"},
                                                                       body:JSON.stringify(data)
        })
        if (req.status===200)
           {
               setMessege("Your request was sent!")
               setEmail("");
               setHelp("");
            }
        if (req.status===500)
            setMessege("Server Error! Please try again later.");
          }
        catch(err){setMessege("Server Error! Please try again later.");
    }
    }
    return(
        <section id="contact" className="md:h-screen h-[70vh] w-full flex  flex-col items-center justify-center gap-17.5 bg-linear-to-b from-1% from-black to-gray-600 relative" style={{ fontFamily: "'Cinzel', serif"}}>
            <p className="text-white md:text-[30px] text-[25px] border-b-2 border-red-900">Get In Touch With Us</p>
            <div className=" flex md:flex-row flex-col items-center justify-center md:gap-62 gap-15">
               <form onSubmit={(e)=>submitHandler(e)} className="flex flex-col items-center gap-2.5 ">
                   <input type="email" placeholder="ENTER YOUR EMAIL" required value={email} className="md:h-10 h-7.5 md:w-75 w-37.5 text-white md:text-[15px] text-[10px] text-center rounded-[15px] bg-[rgba(192,192,192,0.5)] backdrop-blur-[5px] focus:outline-none placeholder:text-white" onChange={(e)=>setEmail(e.target.value)}/>
                   <textarea name="Contact"  placeholder="NEED ANY HELP?" required value={help} className="md:h-50 h-37.5 md:w-150 w-95 md:text-[15px] text-[10px] text-white text-center rounded-[15px] bg-[rgba(192,192,192,0.5)] backdrop-blur-[5px] focus:outline-none placeholder:text-white" onChange={(e)=>setHelp(e.target.value)}></textarea>
                   <button type="submit" className="h-10 w-30 text-[15px] text-red-900 rounded-[30px] bg-white duration-100 hover:scale-110 hover:cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] active:scale-100">SUBMIT</button>
                </form>
               <div className="flex flex-col justify-center md:gap-2.5 items-center text-[25px] text-[rgb(192,192,192)]">
                   <h1 className="md:text-[30px] text-[20px] text-white">OR CONTACT US ON</h1>
                   <div className="flex justify-center items-center gap-1.25">
                      <img src="./Images/WhatsappIcon.png" alt="WhatsappIcon" className="md:h-7.5 h-6.25"/>
                      <address><a href="tel:+923277522098" className="md:text-[20px] text-[15px] text-[rgb(192,192,192)]">+923277522098</a></address>
                   </div>
                   <div className="flex justify-center items-center gap-1.25">
                      <img src="./Images/EmailIcon.png" alt="EmailIcon" className="md:h-7.5 h-6.25"/>
                      <address><a href="mailto:servicestheforge@gmail.com" className="md:text-[20px] text-[15px] text-[rgb(192,192,192)]">servicestheforge@gmail.com</a></address>
                   </div>
               </div>
            </div>
             <div className={`${messege===""?"hidden":"block"} h-37.5 md:w-112.5 w-75 absolute top-30 flex flex-col justify-center items-center gap-5 rounded-[30px] bg-[rgb(190,190,190)] z-20`}>
                <p className="text-[20px] text-red-800">{messege}</p>
                <button type="button" className={`${messege==="Please Wait..."?"hidden":"block"} h-10 w-30 text-[15px] text-red-900 rounded-[30px] bg-white duration-100 hover:scale-110 hover:cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] active:scale-100`} onClick={()=>{setMessege("")}}>OK</button>
             </div>
            <div className={`${messege!==""?"block":"hidden"} h-full w-full absolute inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[10px]`}></div>
        </section>
    )
}