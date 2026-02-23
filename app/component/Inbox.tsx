import React from 'react'
import Image from 'next/image'
const Inbox = () => {
    const messages = [
        {
            id: 1,
            message: 'Hello, how are you?',
            sender: 'John Doe',
        },
        {
            id: 2,
            message: 'I am good, thank you!',
            sender: 'Jane Doe',
        },
        {
            id: 3,
            message: 'What are you doing?',
            sender: 'John Doe',
        },
        {
            id: 4,
            message: 'I am doing nothing, you?',
            sender: 'Jane Doe',
        },
        {
            id: 5,
            message: 'I am doing nothing, you?',
            sender: 'John Doe',
        },
        {
            id: 6,
            message: 'I am doing nothing, you?',
            sender: 'Jane Doe',
        },
    ]
  return (
    <div>
        <h1 className='text-2xl font-bold'>Conversation Detail</h1>
        <div className='flex flex-col gap-2'>
                <div className='border border-zinc-200 rounded-2xl p-4 overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md col-span-1 flex flex-col '>
                    {messages.map((message) => (
                        <div key={message.id} className='flex flex-row gap-4 items-center  bg-zinc-100 rounded-2xl m-2 border border-zinc-200 overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
                            <div><Image src='/logo.png' alt='Property' width={30} height={30} className='rounded-2xl object-cover overflow-hidden'/></div>
                           <div className='flex flex-col gap-2 items-start justify-end'>
                           <div><p className='text-sm font-bold'>{message.sender}</p></div>
                           <div><p className='text-sm text-zinc-500'>{message.message}</p></div>
                           </div>
                            
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Inbox