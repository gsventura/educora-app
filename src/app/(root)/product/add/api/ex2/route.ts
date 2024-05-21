import {
    Message as VercelChatMessage,
    StreamingTextResponse,
    createStreamDataTransformer
} from 'ai';
import { ChatOpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import { HttpResponseOutputParser } from 'langchain/output_parsers';

import { JSONLoader } from "langchain/document_loaders/fs/json";
import { RunnableSequence } from '@langchain/core/runnables'
import { formatDocumentsAsString } from 'langchain/util/document';
import { OpenAIEmbeddings } from "@langchain/openai";


const loader = new JSONLoader("/src/data/base-lp-enem.json");

export const dynamic = 'force-dynamic'

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
    return `${message.role}: ${message.content}`;
};

const TEMPLATE = `você é um assistente de professores de língua portuguesa. sua função é criar perguntas de vestibular.\n
você tem um contexto fornecido abaixo com questões de provas de várias edições do vestibular. as perguntas que você gera devem seguir o mesmo padrão de linguagem e estilo que as fornecidas no contexto.\n 
você deve seguir os passos abaixo para criar uma pergunta: \n
1 - escolha uma entrada da coluna 'supportText' do contexto para começar a nova questão\n
2 - identifique qual habilidade do aluno o statement original da pergunta pede: interpretação de texto, gramática, literatura etc.\n
3 - crie um novo enunciado (statement) com o mesmo propósito do statement original\n
4 - crie 5 alternativas novas, onde apenas uma é a correta.\n\n

você deve exibir para o usuário apenas a nova pergunta, sem mais nenhuma informação.
\n
==============================\n    
Contexto: {context}\n
==============================\n
Conversa atual: {chat_history}\n

user: {question}
assistant:`;


export async function POST(req: Request) {
    try {
        // Extract the `messages` from the body of the request

        const { messages } = await req.json();

        const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);

        const currentMessageContent = messages[messages.length - 1].content;

        const docs = await loader.load();

        const prompt = PromptTemplate.fromTemplate(TEMPLATE);
        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY!,
            model: 'gpt-4o-2024-05-13',
            temperature: 0.5,
            streaming: true,
            verbose: false,
        });

        /**
       * Chat models stream message chunks rather than bytes, so this
       * output parser handles serialization and encoding.
       */
        const parser = new HttpResponseOutputParser();


        const chain = RunnableSequence.from([
            {
                question: (input) => input.question,
                chat_history: (input) => input.chat_history,
                context: () => formatDocumentsAsString(docs),
            },
            prompt,
            model,
            parser,
        ]);

        // Convert the response into a friendly text-stream
        const stream = await chain.stream({
            chat_history: formattedPreviousMessages.join('\n'),
            question: currentMessageContent,
        });

        // Respond with the stream
        return new StreamingTextResponse(
            stream.pipeThrough(createStreamDataTransformer()),
        );
    } catch (e: any) {
        return Response.json({ error: e.message }, { status: e.status ?? 500 });
    }
}