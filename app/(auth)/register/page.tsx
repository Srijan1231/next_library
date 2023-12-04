'use client'
import AuthPage from "@/components/auth/AuthPage";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password:z.string().min(8,{
    message:'Password must be at 8 characters.'
  })
})
import { signIn } from "next-auth/react";

import Link from "next/link";
import {  useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";

export default function SignUp() {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email:"",
        password:"",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      axios.post('/api/register',values).catch((error)=>{
      toast.error(error.message)
      }).finally(()=>{
        router.back()
      })

      
    }
   
      
      
    const authenticationContent = (<>
    <div className="w-full lg:w-1/2 mb-2 lg:mb-0">
<Button  onClick={() => {
          signIn("google");
        }}className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300 cursor-pointer">
<FcGoogle />Sign Up with Google </Button>
</div>
<div className="w-full lg:w-1/2 ml-0 lg:ml-2">
<Button onClick={() => {
          signIn("github");
        }} className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-2 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300 cursor-pointer">
<FaGithub /> Sign Up with Github </Button>
</div>
    </>)
    const bodyContent = (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email"placeholder="Enter your email" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your Password" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </Form>
    </>
    )
    const footerContent = (
        <p>Already have an account? <Link href="/login" className="text-black hover:underline">Login here</Link>
</p>
    )
    return(<AuthPage heading="Sign Up" subheading="Please enter all your details"  authentication={authenticationContent} body={bodyContent} footer={footerContent}/>)
}


