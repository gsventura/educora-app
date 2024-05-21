import React from 'react'

const Header = ({ title,subtitle}: { title:string, subtitle?: string}) => {
  return (
    <>
        <h2 className='h1-semibold text-center'>{title}</h2>
        {subtitle && <p className='p-16-regular mt-4 text-center'>{subtitle}</p>}

    </>
  )
}

export default Header