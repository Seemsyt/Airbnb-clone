import Image from "next/image";

export type ConversationPreview = {
  id: number;
  guestName: string;
  property: string;
  lastMessage: string;
  lastTime: string;
  unread?: number;
  avatar: string;
};

type InboxProps = {
  conversations: ConversationPreview[];
  selectedConversationId: number;
  onSelectConversation: (id: number) => void;
};

const Inbox = ({
  conversations,
  selectedConversationId,
  onSelectConversation,
}: InboxProps) => {
  return (
    <aside className="h-full rounded-none bg-white p-0 shadow-sm lg:rounded-3xl lg:border lg:border-zinc-200 lg:p-4">
      <div className="bg-[#075e54] px-4 py-4 text-white lg:mb-4 lg:rounded-2xl lg:bg-zinc-100 lg:px-3 lg:py-3 lg:text-zinc-900">
        <h1 className="text-xl font-semibold">Messages</h1>
        <p className="text-sm text-white/80 lg:text-zinc-500">Recent guest conversations</p>
      </div>

      <div className="space-y-0 lg:space-y-2">
        {conversations.map((conversation) => {
          const isActive = conversation.id === selectedConversationId;

          return (
            <button
              key={conversation.id}
              type="button"
              onClick={() => onSelectConversation(conversation.id)}
              className={`w-full border-b border-zinc-100 p-3 text-left transition lg:rounded-2xl lg:border ${
                isActive
                  ? "bg-[#f0f2f5] lg:border-zinc-900 lg:bg-zinc-100"
                  : "bg-white hover:bg-zinc-50 lg:border-zinc-200 lg:hover:border-zinc-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={conversation.avatar}
                  alt={conversation.guestName}
                  width={42}
                  height={42}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-semibold text-zinc-900">
                      {conversation.guestName}
                    </p>
                    <p className="shrink-0 text-xs text-zinc-500">{conversation.lastTime}</p>
                  </div>
                  <p className="truncate text-xs text-zinc-500">{conversation.property}</p>
                  <p className="mt-1 truncate text-sm text-zinc-600">{conversation.lastMessage}</p>
                </div>
                {conversation.unread ? (
                  <span className="rounded-full bg-[#25d366] px-2 py-0.5 text-xs font-semibold text-zinc-900">
                    {conversation.unread}
                  </span>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default Inbox;
