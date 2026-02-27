"use client";

import { useMemo, useState } from "react";

import ConversationDetail, {
  type ConversationThread,
} from "../component/ConversationDetail";
import Inbox, { type ConversationPreview } from "../component/Inbox";

const conversationData: ConversationThread[] = [
  {
    id: 1,
    guestName: "Mia Johnson",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400&auto=format&fit=crop",
    property: "Modern Loft in Brooklyn",
    status: "Active reservation",
    messages: [
      {
        id: 1,
        sender: "guest",
        text: "Hi Seems, is early check-in possible around 1 PM?",
        time: "9:12 AM",
      },
      {
        id: 2,
        sender: "host",
        text: "Hi Mia, yes, 1 PM works. I will share the smart-lock code before arrival.",
        time: "9:18 AM",
      },
      {
        id: 3,
        sender: "guest",
        text: "Perfect, thanks. Also, do you have a laptop-friendly desk?",
        time: "9:21 AM",
      },
      {
        id: 4,
        sender: "host",
        text: "Yes, there is a dedicated workspace by the window with fast Wi-Fi.",
        time: "9:23 AM",
      },
    ],
  },
  {
    id: 2,
    guestName: "Liam Carter",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    property: "Lakefront Cottage",
    status: "Check-out tomorrow",
    messages: [
      {
        id: 1,
        sender: "guest",
        text: "The stay has been great. Could we do a late checkout at noon?",
        time: "Yesterday",
      },
      {
        id: 2,
        sender: "host",
        text: "Glad you enjoyed it. Noon checkout is fine for tomorrow.",
        time: "Yesterday",
      },
    ],
  },
  {
    id: 3,
    guestName: "Sophia Lee",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    property: "Cozy Garden House",
    status: "Inquiry",
    messages: [
      {
        id: 1,
        sender: "guest",
        text: "Hello, is parking available for two cars?",
        time: "2 days ago",
      },
    ],
  },
];

const buildPreviews = (threads: ConversationThread[]): ConversationPreview[] => {
  return threads.map((thread) => {
    const lastMessage = thread.messages[thread.messages.length - 1];
    return {
      id: thread.id,
      guestName: thread.guestName,
      property: thread.property,
      avatar: thread.avatar,
      lastMessage: lastMessage?.text ?? "",
      lastTime: lastMessage?.time ?? "",
      unread: thread.id === 3 ? 1 : 0,
    };
  });
};

export default function Conversation() {
  const [selectedConversationId, setSelectedConversationId] = useState<number>(
    conversationData[0].id
  );
  const [isMobileThreadOpen, setIsMobileThreadOpen] = useState(false);

  const conversationPreviews = useMemo(() => buildPreviews(conversationData), []);

  const selectedConversation =
    conversationData.find((thread) => thread.id === selectedConversationId) ??
    conversationData[0];

  const handleSelectConversation = (id: number) => {
    setSelectedConversationId(id);
    setIsMobileThreadOpen(true);
  };

  return (
    <main className="h-[100dvh] overflow-hidden bg-[#efeae2] pt-16 lg:min-h-screen lg:overflow-visible lg:bg-zinc-50 lg:pb-12 lg:pt-24">
      <div className="h-[calc(100dvh-4rem)] lg:hidden">
        {isMobileThreadOpen ? (
          <ConversationDetail
            conversation={selectedConversation}
            showBackButton
            onBack={() => setIsMobileThreadOpen(false)}
          />
        ) : (
          <div className="h-full overflow-y-auto">
            <Inbox
              conversations={conversationPreviews}
              selectedConversationId={selectedConversationId}
              onSelectConversation={handleSelectConversation}
            />
          </div>
        )}
      </div>

      <div className="mx-auto hidden max-w-6xl grid-cols-[340px_1fr] gap-5 px-4 sm:px-6 lg:grid">
        <Inbox
          conversations={conversationPreviews}
          selectedConversationId={selectedConversationId}
          onSelectConversation={setSelectedConversationId}
        />
        <ConversationDetail conversation={selectedConversation} />
      </div>
    </main>
  );
}
