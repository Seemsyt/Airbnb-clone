import React from 'react'
import Image from 'next/image'
const ConversationDetail = () => {
    const conversation = {
        id: 1,
        name: 'John Doe',
        image: 'https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop',
        messages: [
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
        ],
    }
  return (
    <div>
        <h1 className='text-2xl font-bold'>Conversation Detail</h1>
        <div className='flex flex-col gap-2'>
            <div className='border border-zinc-200 rounded-2xl p-4 overflow-hidden shadow-sm transition hover:-translate-y-1 hover:shadow-md col-span-2'>
                <div className='flex flex-row gap-2'>
                    <div><Image src='/logo.png' alt='Property' width={100} height={100} className='rounded-2xl object-cover overflow-hidden'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConversationDetail