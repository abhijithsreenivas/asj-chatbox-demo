import {Sidebar} from '@/components/sidebar'
import {ChatInterface} from '@/components/chat-interface'
import {notFound} from 'next/navigation'
import {Message} from 'ai'

// Properly typed mock data
const chatData: Record<string, {title: string; messages: Message[]}> = {
	'1': {
		title: 'GEN AI Chat box powered by Vercel SDK',
		messages: [
			{id: '1', role: 'user', content: "What's vercel AI SDK"},
			{
				id: '2',
				role: 'assistant',
				content:
					'The AI SDK is the TypeScript toolkit designed to help developers build AI-powered applications and agents with React, Next.js, Vue, Svelte, Node.js, and more.'
			}
		]
	},
	'2': {
		title: 'AI Development Questions',
		messages: []
	}
}

export default function ChatPage({params}: {params: {chatId: string}}) {
	const {chatId} = params

	// Simple check if chat exists
	if (!chatData[chatId as keyof typeof chatData]) {
		notFound()
	}

	const chat = chatData[chatId as keyof typeof chatData]

	return (
		<div className="flex h-screen bg-white">
			<Sidebar activeChatId={chatId} />
			<ChatInterface initialMessages={chat.messages} title={chat.title} />
		</div>
	)
}
