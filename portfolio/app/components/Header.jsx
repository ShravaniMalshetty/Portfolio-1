import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center
     mx-auto h-screen flex flex-col items-center 
     justify-center gap-4'>
        <motion.div 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.8, type:'spring', stiffness:100}}
        >
            <Image src="/assets/profile-img.png"  alt=" " width={200} height={200} className="rounded-full w-32"/>
        </motion.div>
        <motion.h3 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6, delay:0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Shravani Malshetty 👋🏻
            <Image src="/assets/hand-icon.png"  alt=" " width={2} height={2}  className="w-6"/></motion.h3>


        <motion.h1 
        initial={{y: -30 , opacity:0}}
        whileInView={{ y:0, opacity:1}}
        transition={{duration:0.8, delay:0.3}}
        className='text-3x; sm:text-4xl lg:text-[66px] font-Ovo'>
            I'm a Full Stack Developer</motion.h1>
            <motion.p
              initial={{opacity:0}}
              whileInView={{opacity:1}}
              transition={{duration:0.8, delay:0.7}}
             className=' max-w-2xl mx-auto font-Ovo'>
                As a Full Stack Developer, I specialize in both 
                front-end and back-end development, using a wide
                 range of technologies to create dynamic, scalable,
                  and responsive web applications. I am proficient in
                   working with databases, server-side languages, and user 
                interfaces to deliver seamless and efficient solutions.</motion.p>


                <div className='flex flex-col sm:flex-row items-row items-center gap-4 mt-4'>
                    <motion.a 
                    initial={{y:30, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.6, delay:1}}
                    href="#contact"
                    className='px-10 py-3 border border-white rounded-full bg-black
                    text-white flex items-center gap-2 dark:bg-transparent'
                    >Contact me
                    <Image src="/assets/right-arrow-white.png"  alt=" " width={20} height={20} className="w-4"/>
                    </motion.a>


                    {/* <a href="/sample-resume.pdf" 
                    initial={{y:30, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:0.6, delay:1}}download  
                    className='px-10 py-3 border rounded-full
                     border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My resume
                    <Image src="/assets/download-icon.png"  alt=" " width={20} height={20} className="w-4"/>
                    </a> */}
                </div>
    </div>
  )
}

export default Header