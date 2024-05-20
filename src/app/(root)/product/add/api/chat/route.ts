import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText, LangChainStream } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-3.5-turbo-16k'),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}