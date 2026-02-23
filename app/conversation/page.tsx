import React from 'react'
import ConversationDetail from '../component/ConversationDetail'
import Inbox from '../component/Inbox'

const Conversation = () => {
  return (
    <div className='mx-auto w-full max-w-6xl px-4 my-9 py-9 sm:px-6 text-black flex flex-row gap-4 min-h-[50vh]'>
        <Inbox />
       <div className='w-full'>
        <ConversationDetail />
       </div>
    </div>
  )
}

export default Conversation
