import React from 'react'
import Link from 'next/link'
import { li, p } from 'motion/react-client'
const Categories = () => {
    const categories = [{
        id:1,
        name:"beach"
        
    },{id:2,name:'mountain'},{id:3,name:'forest'}]
  return (
    <>
    <div className='flex flex-row gap-2 bg-grey overflow-x-auto py-[100px]'>
    <ul className=' flex gap-2 w-full'>
        {categories.map((catogory)=>(
           <li key={catogory.id} className='rounded-2xl hover:cursor-pointer hover:bg-gray-300 p-1'>
                <Link href={catogory.name} className="transition hover:text-zinc-950">
                  {catogory.name}
                </Link>
              </li>
        ))}
    </ul>
    </div>
    </>
  )
}

export default Categories