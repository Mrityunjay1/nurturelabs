import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {FaArrowLeft, FaBars, FaHome} from 'react-icons/fa'
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
]
const Sidebar = ({children}) => {
    const [open,setOpen] = useState(false)

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
            
        </motion.div>
            <main style={{flex : '1'}}>
                {children}
            </main>
    </div>
  )
}

export default Sidebar