"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import LoadingDots from "@/components/loading-dots";

type FormValues = {
    email: string;
    password: string;
}

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();

    const doLogin = async (data: FormValues) => {
        // user will be redirected to the callbackUrl if login is successful
        await signIn("credentials", {
            redirect: true,
            email: data.email,
            password: data.password,
            callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/app`
        });
    }
    return (
        <form
            onSubmit={handleSubmit(doLogin)}
            className="space-y-2" action="#" method="POST">


            <div>
                <label htmlFor="email-address" className="text-sm mb-1">
                    Email address
                </label>
                <input
                    id="email-address"
                    {...register("email", { required: true })}
                    type="email"
                    autoComplete="off"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                    placeholder="Email address"
                />
                {errors.email && <div className="text-xs text-red-600">{errors.email.message}</div>}
            </div>
            <div>
                <label htmlFor="password" className="text-sm mb-1">
                    Password
                </label>
                <input
                    id="password"
                    {...register("password", { required: true })}
                    type="password"
                    autoComplete="off"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                />
                {errors.password && <div className="text-xs text-red-600">{errors.password.message}</div>}
            </div>
            <div className="pt-4">

                <button
                    disabled={isSubmitting}
                    className={`${isSubmitting
                        ? "cursor-not-allowed border-gray-200 bg-gray-100"
                        : "border-black bg-black text-white hover:bg-white hover:text-black"
                        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
                >
                    {isSubmitting ? (
                        <LoadingDots color="#808080" />
                    ) : (
                        <span>Sign In</span>
                    )}
                </button>
            </div>
            <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link href="/auth/register" className="font-semibold text-gray-800">
                    Sign up
                </Link>{" "}
                for free.
            </p>
        </form>
    )
}