import { useState } from "react"
import { useMediaQuery } from "../utils/useMediaQuery"
import {motion} from 'framer-motion'
import React from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"


const navMotion = {
    visible: {
      opacity: 1,
  
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  }
  const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const links = [
    {id:0, name:'books', href:'/books'},
    {id:1, name:'travel', href:'/travel'},
    {id:2, name:'fp', href:'/'},
    {id:3, name:'games', href:'/games'},
    {id:4, name:'funsies', href:'/funsies',
      options: [
        {label: 'TCG', href:'/funsies/tcg'},
        {label: 'TCG', href:'/funsies/tcg'},
        {label: 'TCG', href:'/funsies/tcg'},
      ]
    
    },
  ]

export default function Nav(){
    const [toggled, setToggled] = useState(false);
    const [dropDown, setDropDown] = useState(false);
  
    const handleMouseEnter = () =>{
      setDropDown(true);
    }
    const handleMouseLeave = () =>{
      setDropDown(false);
    }

    const handleOnClick = () => {
      if (!matches) setDropDown(!dropDown)
    }
    const matches = useMediaQuery('(min-width: 1280px)')
    return(
        <nav className="container relative mx-8 pt-5 flex justify-center items-center gap-5 lg:pt-12 pb-6 font-medium md:mx-16 lg:mx-32 lg:mb-16">
            <svg
            className="hidden bottom-0 absolute lg:block"
            width={'250'}
            height={4}
            viewBox='0 0 250 4'
            fill='none'
            >
                <path d='M2 2L428 2' stroke='#282828'></path>

            </svg>
            {matches  ? (
                <div className="flex gap-5">
           
            {links.map((link)=> (
                <a
                key={link.id}
                href = {link.href}
                className={`font-robotoMono ${link.id === 2 ? 'font-vujahdayScript': ''}`}

                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                {link.name}
                {/* subcategory drop down menu */}
            {link.options && dropDown && (
              <div className="absolute bg-transparent shadow-xl z-50">
              
            {link.options.map((option, index) => (
              <a
                key = {index}
                href= {option.href}
                className="block relative z-20 p-20"
              >
              {option.label}
              </a>
            ))}
            
            </div>
          )}
                </a>

            ))}

            
          </div>

        ) : (
            
            <div onClick={()=>setToggled(!toggled)} className="space-y-1.5 z-50 cursor-pointer">
                <motion.span animate={{rotateZ:toggled ? 45:0, y:toggled ? 8:0}} className="block h-0.5 w-8 bg-black"></motion.span>
                <motion.span animate={{width:toggled ? 0:24}} className="block  h-0.5 w-6 bg-black"></motion.span>
                <motion.span animate={{rotateZ:toggled ? -45:0, y:toggled ? -8:0, width:toggled ? 32:16}} className="block  h-0.5 w-4 bg-black"></motion.span>
            </div>
            )}
            {toggled && !matches && (
                <div className="fixed flex bg-white w-full h-full flex-col top-0 left-0 items-center justify-center z-40">
                    {links.map((link)=> (
                        <a 
                        key={link.id}
                        href={link.href}
                        className={`font-robotoMono ${link.id === 2 ? 'font-vujahdayScript': ''}`}>
                          {link.name}
                        </a>
                    ))}
                </div>
            )}
            
        </nav>
    )
}