"use client";

import React from "react";

// import AuthForm from "@/components/forms/AuthForm";
import { SignInSchema } from "@/lib/validations";

const SignIn = () => {
    return (
        // <AuthForm
        //     formType="SIGN_IN"
        //     schema={SignInSchema}
        //     defaultValues={{ email: "", password: "" }}
        //     onSubmit={(data) => Promise.resolve({ success: true, data })}
        // />
        <div>Sign In</div>
    );
};

export default SignIn;

// "use client"
//
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { signInSchema } from "@/lib/auth"
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
// export default function SignInPage() {
//     const form = useForm<z.infer<typeof signInSchema>>({
//         resolver: zodResolver(signInSchema),
//         defaultValues: { email: "", password: "" },
//     })
//
//     async function onSubmit(values: z.infer<typeof signInSchema>) {
//         // Integrate with your auth (NextAuth, Supabase, etc.)
//         console.log("Sign in:", values)
//     }
//
//     return (
//         <div className="max-w-sm mx-auto pt-20">
//             <h1 className="text-2xl font-semibold mb-6">Sign In</h1>
//
//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
//                         Sign In
//                     </Button>
//                 </form>
//             </Form>
//         </div>
//     )
// }
