import Header from '@/components/shared/Header'
import React, { createContext, useContext, useState } from 'react';
import { transformationTypes } from '../../../../../../constants'
import { Chat } from '@/components/shared/Chat';

const AddTransformationTypePage = ({params: {type}}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  return (
    <>
    <Header 
    title={transformation.title}
    subtitle={transformation.subTitle} />

    <Chat />
    </>
  )
}

export default AddTransformationTypePage