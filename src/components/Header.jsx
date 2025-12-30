    export default function Header({setTab,tab}){
        const navLinks = ["HOME","SERVICES","PROGRAMS","CONTACT US"];
        const activeTabStyle = "text-red-900 bg-[rgb(190,190,190)] md:p-1.25 p-[2px] rounded-[10px] shadow-[0_0_20px_rgb(255,255,255)]"
        return(
            <section className="h-[10vh] w-screen flex justify-center md:gap-133 gap-25 z-50 fixed" style={{ fontFamily: "'Cinzel', serif"}}>
                <img src="./Images/Logo.png" alt="TheForgeLogo" className="md:h-12.5 h-7.5 mt-2.5"/>
                <ul className="md:h-12.5 h-7.5 md:w-150 w-60 flex justify-center items-center md:gap-8 gap-3 md:rounded-bl-[25px]  rounded-bl-[18px] bg-[rgba(190,190,190,0.3)] backdrop-blur-[20px]">
                   {
                    navLinks.map((items,index)=>(
                        <a key={index} href={index===0?"#home":index===1?"#services":index===2?"#programs":"#contact"}><p className={`text-[rgb(200,192,192)] md:text-[17px] text-[8px] duration-100 hover:scale-120 hover:cursor-pointer hover:text-shadow-[0_0_10px_rgb(255,255,255)] active:scale-100 ${tab==="Home"&&index===0?activeTabStyle:index===1&&tab==="Services"?activeTabStyle:index===2&&tab==="Programs"?activeTabStyle:index===3&&tab==="Contact"?activeTabStyle:""}`} onClick={()=>{setTab(index===0?"Home":index===1?"Services":index===2?"Programs":"Contact")}}>{items}</p></a>
                    ))
                   }
                </ul>
                
            </section>
    )
}