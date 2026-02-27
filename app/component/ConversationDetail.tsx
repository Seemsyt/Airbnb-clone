import Image from "next/image";
import { ArrowLeft, Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export type ChatMessage = {
  id: number;
  sender: "guest" | "host";
  text: string;
  time: string;
};

export type ConversationThread = {
  id: number;
  guestName: string;
  avatar: string;
  property: string;
  status: string;
  messages: ChatMessage[];
};

type ConversationDetailProps = {
  conversation: ConversationThread;
  showBackButton?: boolean;
  onBack?: () => void;
};

const ConversationDetail = ({
  conversation,
  showBackButton = false,
  onBack,
}: ConversationDetailProps) => {
  return (
    <section className="flex h-full min-h-[72vh] flex-col overflow-hidden rounded-none border-zinc-200 bg-[#efeae2] shadow-sm lg:rounded-3xl lg:border">
      <header className="flex items-center justify-between bg-[#075e54] px-4 py-3 text-white lg:rounded-t-3xl">
        <div className="flex min-w-0 items-center gap-3">
          {showBackButton ? (
            <button
              type="button"
              onClick={onBack}
              className="rounded-md p-1 text-white/90 transition hover:bg-white/10 lg:hidden"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          ) : null}
          <Image
            src={conversation.avatar}
            alt={conversation.guestName}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{conversation.guestName}</p>
            <p className="truncate text-xs text-white/80">{conversation.property}</p>
          </div>
        </div>
        <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
          {conversation.status}
        </span>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto p-4 lg:p-5">
        {conversation.messages.map((message) => {
          const fromHost = message.sender === "host";

          return (
            <div key={message.id} className={`flex ${fromHost ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[82%] rounded-xl px-4 py-2.5 text-sm shadow-sm ${
                  fromHost
                    ? "bg-[#d9fdd3] text-zinc-800"
                    : "border border-zinc-200 bg-white text-zinc-700"
                }`}
              >
                <p>{message.text}</p>
                <p className="mt-1 text-[11px] text-zinc-500">{message.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sticky bottom-0 bg-[#f0f2f5] p-3 lg:rounded-b-3xl">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full bg-white p-2 text-zinc-500 transition hover:text-zinc-700"
          >
            <Paperclip className="h-4 w-4" />
          </button>
          <input
            type="text"
            placeholder="Write a message..."
            className="flex-1 rounded-full bg-white px-4 py-2 text-sm outline-none placeholder:text-zinc-400"
          />
          <Button size="icon" className="h-10 w-10 rounded-full bg-[#25d366] text-zinc-900 hover:bg-[#1fbe5a]">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConversationDetail;
