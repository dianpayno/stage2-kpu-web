
import React from "react";
import {
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { TbSquareLetterD } from "react-icons/tb";
import LoginModal from "../layout/LoginModal";
import { dataLogin } from "../../data";
import ButtonElement from "../login/ButtonElement";
import { useState } from "react";


function NavList() {
 const [hoveredItem, setHoveredItem] = useState(false);


 

    const TooltipProfile:any = {
        display: hoveredItem? "block" : "none",
        position:"absolute",
        width:"350px",
        top:"50px",
        right:"64px",
        color:"black",
        zIndex:"10000",
        
    }
     const overlay:any ={
      position: "fixed",
      top: "50px",
      left:"0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9",
     }

    const namaShort = dataLogin.username?.substring(0, 5)+"..."
    const adminshortName = "admin-" + dataLogin.username?.substring(0, 3)+"..."
    return (
      <>
      <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-9">
              <Link to={"/paslon"} className="flex items-center text-xs font-semibold uppercase hover:text-[#5C0303]">peserta pemilu</Link>
              <Link to={"/voting"} className="flex items-center text-xs font-semibold uppercase hover:text-[#5C0303]">voting</Link>
              {
                dataLogin.role === "admin"? <Link to={"/dashboard-admin"} className="flex items-center text-xs font-semibold uppercase hover:text-[#5C0303]">Dashboard</Link>
                
                : 
               null
                
              }
              
              { 
            dataLogin.isLogin?(
            <>
              <div className="flex items-center gap-1 z-50 hover:bg-[#F8F7F3] hover:text-black px-2 py-1 
              rounded-t-lg cursor-pointer transition ease-in-out duration-300"
             onMouseEnter={() => setHoveredItem(true)}
             onMouseLeave={hoveredItem ? () => setHoveredItem(false) : undefined}
              >  
                 { hoveredItem && <div style={overlay} onMouseEnter={() => setHoveredItem(false)}></div> }
              <div style={TooltipProfile} className="content bg-[#F8F7F3] rounded-b-lg rounded-tl-lg px-4 py-5">
                <div className="flex items-center gap-2 mb-5">
                <img className="w-[50px] rounded-full" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671165.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais" alt="kpu" />
                <div className="flex flex-col">
                <p className="text-sm font-bold capitalize">{dataLogin.username}</p>
                <p className="text-xs font-bold text-blue-gray-500 uppercase">{dataLogin.role}</p>
                </div>
                </div>
                <p className="text-xs uppercase font-semibold">pemilu presiden dumbways.id</p>
                <p className="text-xs font-semibold capitalize text-blue-gray-700">mari wujudkan pemilu 2024 dengan jujur dan berintegritas</p>
                <Link to={"/voting"}>
                <ButtonElement type="button" text="Logout" style="secondary"/>
                </Link>
                
                </div>


               
                <img className="w-[30px] rounded-full" src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671165.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=ais" alt="kpu" />
                {
                  dataLogin.role == "admin" ?(
                    <div>
                      <span className="text-xs capitalize">{adminshortName}</span>
                    </div>
                  ):(
                    <div>
                      <span className="text-xs capitalize">{namaShort}</span>
                    </div>
                  )
                }  
                </div>  
              
            
            </>
          ):(
            <LoginModal/>
          )
        }
      
      </ul>
     
      </>
    );
  }

    const Navbarmenu = () => {
        const [openNav, setOpenNav] = React.useState(false);
 
        const handleWindowResize = () =>
          window.innerWidth >= 960 && setOpenNav(false);
       
        React.useEffect(() => {
          window.addEventListener("resize", handleWindowResize);
       
          return () => {
            window.removeEventListener("resize", handleWindowResize);
          };
        }, []);

  return (
    <div className="w-full px-6 py-3 fixed top-0 bg-black z-10 text-white">
      <div className="flex items-center justify-between lg:px-10">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 uppercase flex items-center gap-2"    
        >
        <TbSquareLetterD/>
        
            <Link to={"/"}>
            <span className="text-sm ms-1">pemilu presiden dumbways.id</span>
            </Link>
        
        </Typography>
        
        <div className="hidden lg:block ">
        <NavList/>
       
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        
        <NavList />
    
      </Collapse>
    </div>
    
    
  )
}

export default Navbarmenu