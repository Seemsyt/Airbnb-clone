import React from 'react'
import ConversationDetail from '../component/ConversationDetail'
import Inbox from '../component/Inbox'

const Conversation = () => {
  return (
    <div className='flex min-h-screen'>
         <div className="w-[20%] border-r overflow-y-auto"><Inbox></Inbox></div>
       <div className='w-[50%] border-r overflow-y-auto'>
        <ConversationDetail />
       </div>
    </div>
  )
}

export default Conversation
