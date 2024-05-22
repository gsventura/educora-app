import Header from '@/components/shared/Header'
import React, { createContext, useContext, useState } from 'react';
import { transformationTypes } from '../../../../../../constants'
import { ChatGenerateQuestions } from '@/components/shared/ChatGenerateQuestions';

const AddTransformationTypePage = ({params: {type}}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
    <Header 
    title={transformation.title}
    subtitle={transformation.subTitle} />
  {transformation.type === 'generatequestions' && <ChatGenerateQuestions />}
    </>
    
  )

}

export default AddTransformationTypePage