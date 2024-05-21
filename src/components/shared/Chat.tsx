'use client'

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { useChat } from 'ai/react';


export interface ChatProps {}

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api:'api/ex2',
        onError: (e) => {
            console.log(e)
        }});

    return (
        <>
        <div className='flex min-h-screen items-center justify-center]'>
            <Card className='chat-block'>
              <CardTitle className='h3-bold text-center'>Pergunte à Educora IA</CardTitle>
              <CardContent className='h-[500px]'>
              <ScrollArea className="h-full overflow-y-auto">
                {messages.map(message => {
                    return (
                        <div
                            key={message.id} 
                            className='flex gap-3 text-slate-600 text-sm border border-gray-300 p-4 rounded-xl mb-5'>
                        {message.role === 'user' && (
                            <Avatar> 
                                <AvatarFallback>DF</ AvatarFallback> 
                                <AvatarImage src="https://github.com/diego3g.png" /> 
                            </Avatar>
                        )}
                        {message.role === 'assistant' && (
                            <Avatar> 
                                <AvatarFallback>DF</ AvatarFallback> 
                                <AvatarImage src="https://github.com/rocketseat.png" />
                            </Avatar>
                        )}
                        
                         <p className='leading-relaxed'>
                         <span className='block font-bold text-slate-800 text-[#A64253]'>
                            {message.role === 'user' ? 'Usuário:' : 'Educora IA:'}</span>
                            {message.content}
                            </p>
                        </div>
                    )
                })}
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder='Crie uma questão sobre a ditaduta militar no modelo ENEM'
                            value={input}
                            onChange={handleInputChange}/>
                    <Button type='submit' className='gap-3'>Enviar</Button>
                </form>
              </CardFooter>
              
            </Card>
          </div>
        </>
        
      )
}