import { useState } from "react";
export default function Signup({tab,setTab}){
    const inputs=["FirstName","SurName","Email","Password","Date Of Birth"];
    const [firstName,setfirstName] = useState("");
    const [surName,setsurName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [date,setDob] = useState("");
    const [messege,setMessege] = useState("");
    const [visiblePass,setVisiblePass] = useState(false);
    const inputsHandler = (index,value)=>{
        index===0?setfirstName(value):
        index===1?setsurName(value):
        index===2?setEmail(value):
        index===3?setPassword(value):
        setDob(value);
    }
   const submitHandler = async(e)=>{
    e.preventDefault();
    const data = {firstName,surName,email,password,date};
    setMessege("Creating Account...");
    try{const req = await fetch("https://the-forge-backand.vercel.app/auth/signup",{method:"POST",
                                                              headers:{"Content-Type":"application/json"},
                                                              body:JSON.stringify(data)})
    if(req.status===409)
        setMessege("User Already Exist!");
    else if(req.status===201)
        {
            setMessege("User Registered Successfully!");
            setfirstName("")
            setsurName("");
            setEmail("");
            setPassword("");
            setDob("");
        }
    else
        setMessege("Unexpected Error");}
    catch(err){setMessege("Server Error");}
};

    return(
        <form onSubmit={(e)=>submitHandler(e)} className="flex md:h-[80vh] h-[60vh] md:w-[40vw] w-87.5 absolute md:top-12.5 top-25 flex-col items-center justify-center gap-4 rounded-[40px] bg-[rgba(190,190,190,0.2)] backdrop-blur-[10px] z-20">
            <h1 className=" md:text-[30px] text-[20px] text-white ">CREATE YOUR ACCOUNT</h1>
            {
                inputs.map((items,index)=>(
                    <input key={index} type={index===2?"email":index===3&&visiblePass?"password":index===4?"date":"text"} required placeholder={items} value={index===0?firstName:index===1?surName:index===2?email:index===3?password:date} onChange={(e)=>inputsHandler(index,e.target.value)} className="h-10 md:w-100 w-75 text-center text-white border-b-2 outline-none"/>
                ))
            }
            <button type="submit" className="h-12.5 w-50 text-red-800 rounded-[20px] bg-[rgb(192,192,192)] duration-100 hover:scale-105 hover:cursor-pointer active:scale-100 hover:shadow-[0_0_10px_rgb(255,255,255)]">SUBMIT</button>
            <p className="text-[rgb(192,192,192)] md:text-[15px] text-[11px] duration-100 hover:scale-105 hover:cursor-pointer hover:text-shadow-[0_0_20px_rgb(255,255,255)] active:scale-100" onClick={()=>setTab("Login")}>ALREADY HAVE AN ACCOUNT? CLICK HERE TO LOGIN</p>
            <img src="./Images/Cross.png" alt="Close" className="h-12 absolute md:left-112 left-75 top-2.5 duration-100 hover:scale-120 hover:cursor-pointer active:scale-100" onClick={()=>setTab("")}/>
            <img src="./Images/eye.png" alt="ShowPassword" className="h-5 absolute md:top-71.25 md:left-105 top-67.5 left-75  duration-100 hover:scale-120 hover:cursor-pointer active:scale-100" onClick={()=>{setVisiblePass((prev)=>(!prev))}}/>
            <div className={`${messege===""?"hidden":"block"} h-37.5 md:w-112.5 w-75 absolute top-50 flex flex-col justify-center items-center gap-5 rounded-[30px] bg-[rgb(190,190,190)] z-40`}>
                <p className="text-[20px] text-red-800">{messege}</p>
                <button type="button" className={`${messege==="Creating Account..."?"hidden":"block"} h-10 w-30 text-[15px] text-red-900 rounded-[30px] bg-white duration-100 hover:scale-105 hover:cursor-pointer hover:shadow-[0_0_10px_rgb(255,255,255)] active:scale-100`} onClick={()=>messege==="User Registered Successfully!"?setTab("Login"):setMessege("")}>OK</button>
            </div>
            <div className={`${messege===""?"hidden":"block"} absolute inset-0 rounded-[40px] bg-[rgba(0,0,0,0.3)]`}></div>
        </form>
    )

}
