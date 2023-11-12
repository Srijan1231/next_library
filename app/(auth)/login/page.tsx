'use client'
import AuthPage from "@/components/auth/AuthPage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { signIn } from "next-auth/react";

import Link from "next/link";
import {  useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Login() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FieldValues>({
        defaultValues: {
          email: "",
          password: "",
        },
      });
      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        
    
        signIn("credentials", {
          ...data,
    
          redirect: false,
        }).then((callback) => {
         
          if (callback?.ok) {
            toast.success("Logged In");
            router.refresh();
            
          }
          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      };
    const authenticationContent = (<>
    <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
<Button  className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300 cursor-pointer">
   Sign Up with Google </Button>
</div>
<div className="w-full lg:w-1/2 ml-0 lg:ml-2">
<Button  className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300 cursor-pointer">
  Sign Up with Github </Button>
</div>
    </>)
    const bodyContent = (
    <><div>
    <label  className="block text-sm font-medium text-gray-700">Email</label>
    <Input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
    </div>
    <div>
    <label  className="block text-sm font-medium text-gray-700">Password</label>
    <Input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
    </div>
    <div>
    <Button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 cursor-pointer">Sign Up</Button>
    </div></>
    )
    const footerContent = (
        <p>Already have an account? <Link href="#" className="text-black hover:underline">Login here</Link>
</p>
    )
    return(<AuthPage heading="Sign In" subheading="Welcome back"  authentication={authenticationContent} body={bodyContent} footer={footerContent}/>)
}
