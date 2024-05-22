'use client'

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { useChat } from 'ai/react';
import React from "react";


export interface ChatProps {}

export function ChatGenerateQuestions() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api:'api/ex2',
        onError: (e) => {
            console.log(e)
        }});

    return (
        <>
        <div className='flex min-h-screen items-center justify-center]'>
            <Card className='chat-block'>
              <CardTitle className='h3-bold text-center mb-10 mt-5'>Pergunte à Educora IA</CardTitle>
              <CardContent className='h-[500px]'>
              <ScrollArea className="h-full overflow-y-auto">
                {messages.map(message => {
                    return (
                        <div 
                            key={message.id} 
                            className='flex gap-3 text-slate-600 dark:text-[#F0F3FA] text-sm border border-gray-300 p-4 rounded-xl mb-5'>
                        {message.role === 'user' && (
                            <Avatar> 
                                <AvatarFallback>DF</ AvatarFallback> 
                                <AvatarImage src="https://i.ibb.co/RYWBFhh/user-logo.png" /> 
                            </Avatar>
                        )}
                        {message.role === 'assistant' && (
                            <Avatar> 
                                <AvatarFallback>DF</ AvatarFallback> 
                                <AvatarImage src="https://i.ibb.co/0XLsKj7/round-logo.png" />
                            </Avatar>
                        )}
                        
                         <p className='leading-relaxed'>
                         <span className='block font-bold text-slate-800 text-[#A64253] dark:text-[#A7DDDC]'>
                            {message.role === 'user' ? 'Usuário:' : 'Educora IA:'}</span>
                            {/* Formatar a resposta da API */}
                                {message.content.split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line.startsWith('**') && line.endsWith('**') ? (
                                         <strong>{line.slice(2, -2)}</strong>
                                         ) : (
                                           line
                                         )}
                                          <br />
                                         </React.Fragment>
                                ))}

                            </p>
                        </div>
                    )
                })}
                </ScrollArea>
              </CardContent>
              <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder='Crie uma questão de interpretação de texto'
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