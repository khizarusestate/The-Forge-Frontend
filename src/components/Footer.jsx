export default function Footer(){
    const footerLinks = ["./Images/FacebookIcon.png","./Images/InstagramIcon.png","./Images/XIcon.png","./Images/YoutubeIcon.png"];
    return(
        <section className="h-[20vh] flex flex-col justify-end gap-5 items-center bg-linear-to-b from-50% from-gray-600 to-black" style={{ fontFamily: "'Cinzel', serif"}}>
            <h1 className="text-[25px] text-white">Follow us on</h1>
            <ul>
                <li className="flex gap-12.5">
                {
                   footerLinks.map((items,index)=>(
                       <img src={items} className="h-7.5 w-7.5"/>
                   ))
               }
                </li>
            </ul>
            <p className="text-[12px] text-white">&copy; 2025 The Forge Official. All Right Reserved</p>
        </section>
    )
}