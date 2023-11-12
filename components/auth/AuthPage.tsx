'use client'


import Image from "next/image";
import { Button } from "../ui/button";
import library from "@/app/asset/image/lib.jpg"
interface AuthPageProps{
   heading: string
   subheading:string
   authentication?: React.ReactElement
   body?:React.ReactElement
   footer?:React.ReactElement
}

const AuthPage:React.FC<AuthPageProps> = ({heading,subheading,authentication,body,footer}) => {
  return (
    // <!-- component -->
<div className="flex h-screen">
  {/* <!-- Left Pane --> */}
  <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
    <div className="max-w-md text-center">
      <Image src={library} width={500} height={500} alt="library"/>
    </div>
  </div>
  {/* <!-- Right Pane --> */}
  <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
    <div className="max-w-md w-full p-6">
      <h1 className="text-3xl font-semibold mb-6 text-black text-center">{heading}</h1>
      <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">{subheading} </h1>
      <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
        {authentication}
      </div>
      <div className="mt-4 text-sm text-gray-600 text-center">
        <p>or with email</p>
      </div>
      <div  className="space-y-4">
        {/* <!-- Your form elements go here --> */}
        
        {body}
      </div>
      <div className="mt-4 text-sm text-gray-600 text-center">
        {footer}
       
      </div>
    </div>
  </div>
</div>
  )
}

export default AuthPage
