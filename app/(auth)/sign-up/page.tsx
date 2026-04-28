"use client";

import React from "react";

// import AuthForm from "@/components/forms/AuthForm";
import {SignUpSchema} from "@/lib/validations";

const SignUp = () => {
    return (
        // <AuthForm
        //     formType="SIGN_UP"
        //     schema={SignUpSchema}
        //     defaultValues={{email: "", password: "", name: "", username: ""}}
        //     onSubmit={(data) => Promise.resolve({success: true, data})}
        // />
        <div>Sign up</div>
    );
};

export default SignUp;

// "use client"
//
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { signUpSchema } from "@/lib/auth"
// import {
//     Form,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormControl,
//     FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
//
// export default function SignUpPage() {
//     const form = useForm<z.infer<typeof signUpSchema>>({
//         resolver: zodResolver(signUpSchema),
//         defaultValues: {
//             email: "",
//             password: "",
//             name: "",
//         },
//     })
//
//     async function onSubmit(values: z.infer<typeof signUpSchema>) {
//         console.log("Sign up:", values)
//         // Connect to your auth backend
//     }
//
//     return (
//         <div className="max-w-sm mx-auto pt-20">
//             <h1 className="text-2xl font-semibold mb-6">Create Account</h1>
//
//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
//                     <FormField
//                         control={form.control}
//                         name="name"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Name</FormLabel>
//                                 <FormControl>
//                                     <Input {...field} placeholder="Your name" />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//
//                     <FormField
//                         control={form.control}
//                         name="email"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Email</FormLabel>
//                                 <FormControl>
//                                     <Input {...field} type="email" placeholder="you@example.com" />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//
//                     <FormField
//                         control={form.control}
//                         name="password"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Password</FormLabel>
//                                 <FormControl>
//                                     <Input {...field} type="password" />
//                                 </FormControl>
//                                 <FormMessage />
//                             </FormItem>
//                         )}
//                     />
//
//                     <Button type="submit" className="w-full">
//                         Sign Up
//                     </Button>
//                 </form>
//             </Form>
//         </div>
//     )
// }
