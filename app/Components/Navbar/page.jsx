import React, { useEffect ,useRef} from "react";
import Link from "next/link";
import NavImage from "../../../public/Allimages/Footer/Home1.png";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {

const navLinks= [

  {title:"Home" ,path:"/"},
  {title:"Services" ,path:"/Services"},
  {title:"Soluations" ,path:"/Soluations"},
  {title:"Projects" ,path:"/Projects"},
  {title:"About Us" ,path:"/AboutUs"},
  {title:"Contact Us" ,path:"/ContactUs"},
 ]

 let pathname = usePathname()
 let navContet=useRef(null)
 let barsIcon=useRef(null)
 let close_x=useRef(null)

 function showSidebar(){
navContet.current.style.translate='0%'
close_x.current.style.display="block"
barsIcon.current.style.display="none"


 }
 function hideSidebar(){
navContet.current.style.translate='100%'
close_x.current.style.display="none"
barsIcon.current.style.display="block"

 }

useEffect(()=> {

  // console.log(barsIcon.current);

})

  return (
    <nav
      className={`fixed-top flex items-center justify-between container ${styles.nav} `}
      style={{ backgroundColor: "rgba(1, 14, 40, 1)" }}
    >
      <div>
        {" "}
        <Image src={NavImage} alt="navbar image" />{" "}
      </div>
     
     <div ref={navContet} className= {`flex justify-between ${styles.navContent}`}  >
          <ul className= {`${styles.navContent_ul} m-0 p-0 flex  `}>
          {navLinks.map((link,index)=>    <li key={index} className={`mx-3 ${link.title==='Services'?'relative':""}  ${styles.navContent_ul_li}`}>

                        <Link href={link.path}  className={`${styles.navLink} text-[#a4a8b2] no-underline   ${pathname===link.path?styles.active:""}`} > {link.title} </Link>{" "}  
                        {link.title==='Services'? <ul className=" w-56 py-4 rounded-lg px-3" style={{position:"absolute",left:"0",top:"35px",background:"#ffffff1a",zIndex:"5" }} > 
                        
                        <li className="my-2 py-1 px-3 rounded-md " style={{background:"var( --main_fontColor)"}}  ><Link  className="text-white no-underline  " style={{boxSizing:"unset"}} href={'/Ai'} >Artificial Intelligence</Link></li>
                        <li className="my-2 py-1 px-3 rounded-md " style={{background:"var( --main_fontColor)"}}  > <Link  className="text-white no-underline  " style={{boxSizing:"unset"}} href={'/MainSoftWareDev'} >SoftWare Dev...</Link> </li>
                        <li className="my-2 py-1 px-3 rounded-md " style={{background:"var( --main_fontColor)"}}  > <Link  className="text-white no-underline  " style={{boxSizing:"unset"}} href={'/MainSmartHome'} >Smart Home</Link> </li>
                        
                         </ul>:""}
                        
                        </li> )  }
                
          
            </ul>

     
              <div className={` mx-2 flex items-center justify-center ${styles.mainIconsNav1}`}>
                {" "}
                <i className="fa-solid fa-earth-americas ps-3 text-white fa-xl"> </i>{" "}
                <span className={`ps-2 text-[18px]  text-white ${styles.AR}`} >AR</span>
              </div>

                <div className={`${styles.ToggleIcon}`}  style={{display:"none"}} >

                      <i ref={barsIcon} className={`fa-solid fa-bars text-white fa-2xl ${styles.barsIcon}`} onClick={showSidebar} ></i>
                      <i ref={close_x} className={`${styles.x_close} fa-regular fa-circle-xmark text-white fa-2xl`} onClick={hideSidebar}  style={{display:"none"}} ></i>

                </div>

     </div>

     <div className={` mx-2 flex items-center justify-center ${styles.mainIconsNav2}`}>
                {" "}
                <i className="fa-solid fa-earth-americas ps-3 text-white fa-xl"> </i>{" "}
                <span className={`ps-2 text-[18px]  text-white ${styles.AR}`} >AR</span>
              </div>
    
    </nav>
  );
}
