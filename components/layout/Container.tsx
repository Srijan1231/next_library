import React from 'react'

 interface ContainerProps  { 
    children: React.ReactNode
 }
const Container = (props:ContainerProps) => {
  return (
    <>
     <div className='border border-b-4 border-zinc-800 absolute left-0 top-0 w-full p-3 text-opacity-7'>top</div>
     <div className='border border-l-4  border-zinc-800 absolute right-0 top-0 h-full p-3'>right</div>
     
     <main className=''>{props.children}</main>

   
     <div className='border  border-t-4  border-zinc-800 absolute right-0 bottom-0 w-full p-3' >bottom</div>
     <div className='border  border-r-4  border-zinc-800 absolute left-0 bottom-0 h-full p-3' >left</div>
    </>
  )
}

export default Container
