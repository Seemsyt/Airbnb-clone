'use client'
import React from 'react'
import Link from 'next/link'
import {motion} from 'motion/react'
const Categories = () => {
    const categories = [{
        id:1,
        name:"Beach"
        
    },{id:2,name:'Mountain'},{id:3,name:'Forest'},{id:4,name:"lake"},{id:5,name:"Desert"},{id:6,name:"City"},{id:7,name:"Snowfall"}]
  return (
    <>
    <div className='flex flex-col gap-2 bg-grey  m-4 border-b '>
        <h1 className=' font-semibold text-xl'>Categories </h1>
    <ul className=' flex gap-2 p-1 scroll-m-0 w-full overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [scrollbar-width:none]'>
        {categories.map((catogory)=>(
           <motion.li initial={{x:100}} animate={{x:0}} transition={{duration:0.4}} whileHover={{scale:1.2,}} whileTap={{scale:1.2}} key={catogory.id} className='rounded-2xl hover:cursor-pointers font-medium p-1'>
                <Link href={catogory.name} className="transition hover:text-zinc-950">
                  {catogory.name}
                </Link>
              </motion.li>
        ))}
    </ul>
  
    </div>
    </>
  )
}

export default Categories
