import { useEffect, useState } from "react";
export default function Login({tab,setTab}){
    const inputs=["Email","Password"];
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [messege,setMessege] = useState("");
    const submitHandler = async(e)=>{
        e.preventDefault();
        const data = {email,password};
        setMessege("Please Wait...");
        try{const req = await fetch("https://the-forge-backand.vercel.app/auth/login",{ method:"POST",
                                                                       headers:{"Content-Type":"application/json"},
                                                                       body:JSON.stringify(data)})  
        if(req.status===404)
            setMessege("No User Found!")
        else if (req.status===401)
            setMessege("Authorization Failed!");
        else if(req.status===200)
           { 
               setMessege("Login Successfull!");
               setEmail("");
               setPassword("");
               const Token = await req.json();
               localStorage.setItem("Token",Token);
           }
        else if (req.status===500)
            setMessege("Server Error!")
        else
            setMessege("UnExpected Error!")
    }
    catch(err){setMessege("Server Error")}
    }
    return(
        <form onSubmit={(e)=>submitHandler(e)} className="flex md:h-[50vh] h-95 md:w-[40vw] w-87.5 absolute top-33 flex-col items-center justify-center gap-5 rounded-[40px] bg-[rgba(190,190,190,0.2)] backdrop-blur-[20px] z-20">
            <h1 className="text-[30px] text-white border-b-2 border-red-900">LOGIN</h1>
            {
                inputs.map((items,index)=>(
                    <input type={index===1?"password":"email"} placeholder={items} required value={index===0?email:password} onChange={index===0?(e)=>{setEmail(e.target.value)}:(e)=>{setPassword(e.target.value)}} className="h-10 md:w-100 w-75  text-white border-b-2 outline-none"/>
                ))
            }
            <button type="submit" className="h-12.5 w-50 text-[25px] text-red-800 rounded-[20px] bg-[rgb(192,192,192)] duration-100 hover:scale-110 hover:cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] active:scale-100">Login</button>
            <p className="text-[rgb(192,192,192)] md:text-[15px] text-[12px] duration-100 hover:scale-105 hover:cursor-pointer hover:text-shadow-[0_0_10px_rgb(255,255,255)] active:scale-100" onClick={()=>setTab("Signup")}>DON'T HAVE ANY ACCOUNT? CLICK HERE TO SIGNUP</p>
            <img src="./Images/Cross.png" alt="Close" className="absolute md:left-112 md:top-0.5 top-2.5 left-70 h-12 duration-100 hover:scale-120 hover:cursor-pointer active:scale-100" onClick={()=>setTab("")}/>
            <img src="./Images/eye.png" alt="ShowPassword" className="h-5 absolute md:top-71.25 md:left-105 top-46 left-75  duration-100 hover:scale-120 hover:cursor-pointer active:scale-100" onClick={()=>{setVisiblePass((prev)=>(!prev))}}/>
            <div className={`${messege===""?"hidden":"block"} h-37.5 md:w-112.5 w-75 absolute top-30 flex flex-col justify-center items-center gap-5 rounded-[30px] bg-[rgb(190,190,190)] z-20`}>
                <p className="text-[20px] text-red-800">{messege}</p>
                <button type="button" className={`${messege==="Please Wait..."?"hidden":"block"} h-10 w-30 text-[15px] text-red-900 rounded-[30px] bg-white duration-100 hover:scale-105 hover:cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] active:scale-100`} onClick={()=>messege==="Login Successfull!"?window.location.reload():setMessege("")} >OK</button>
            </div>
            <div className={`${messege===""?"hidden":"block"} absolute inset-0 rounded-[40px] bg-[rgba(0,0,0,0.3)] backdrop-blur-[3px]`}></div>
        </form>
    )

}
