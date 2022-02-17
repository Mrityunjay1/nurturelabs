import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {FaApple, FaArrowLeft, FaBars, FaFlag, FaHome} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'
const routes =[
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaHome />
    },

    {
        path: '/',
        name: 'Dashboard',
        icon: <FaHome />
    },
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaHome />
    },
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaHome />
    },
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaFlag />
    },
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaHome />
    },
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaFlag />
    },
    {
        path: '/',
        name: 'Dashboard',
        icon: <FaHome />
    }
]
const Sidebar = ({children}) => {
    const [open,setOpen] = useState(true)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <div className='main-container'> 
        <motion.div animate={{width: open ? "200px" : "60px"}} className='sidebar'>
            <div className="top_section">
                {open && <h1 className="logo">Nrture LAbs</h1>} 
                <div className="bars">
                    {!open ? <FaBars onClick={handleClick}  /> : <FaArrowLeft onClick={handleClick} />}
                </div>
            </div>
            <section className="routes">
                {routes.map((route) => {
                    return(
                        <Link to={route.path} key={route.name} className='link'>
                            <div className="icon">
                                {route.icon}
                            </div>
                            {open &&<div className="link_text">
                                {route.name}
                            </div> }
                        </Link>
                    )
                })}
            </section>
            {open &&<div style={{display:'flex',justifyContent:'space-evenly',marginRight:'10px'}}>
                <button style={{display:'flex', justifyContent:'space-around',alignItems:'center',width:'90px',height:'35px',background:'#353945',borderRadius:'10px'}}>
                    <FaApple style={{fontSize:'15px',background:'#3772FF',borderRadius:'25px',color:'white',margin:'10px'}} />
                    <p style={{color:'white',fontSize:'14px',paddingRight:'5px',fontFamily:'Inter',fontWeight:'600'}}>$0.90</p>
                </button>
                <button style={{display:'flex', justifyContent:'space-around',alignItems:'center',width:'90px',height:'35px',background:'#A3E3FF',borderRadius:'10px',boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
                    <p style={{fontSize:'14px',paddingRight:'5px',color:'#3772FF',fontFamily:'Inter',fontWeight:'600'}}>Buy $XYZ</p>
                </button>
            </div>}
            
        </motion.div>
            <main style={{flex : '1'}}>
                {children}
            </main>
    </div>
  )
}

export default Sidebar