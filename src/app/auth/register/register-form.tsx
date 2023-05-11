"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import LoadingDots from "@/components/loading-dots";

type FormValues = {
    name: string;
    email: string;
    password: string;
}

export default function RegisterForm() {

    const { register, setError, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();

    const doRegister = async (data: FormValues) => {

        // Todo: change to use nextjs 13.4 server actions instead of api route

        const res = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify(data),
        })

        if (res.status === 200) {
            await signIn("credentials", {
                redirect: true,
                email: data.email,
                password: data.password,
                callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/app`
            });
        } else {
            const { fieldErrors, formErrors } = await res.json();

            Object.keys(fieldErrors).forEach((field) => {
                // @ts-ignore
                setError(field, { type: 'server', message: fieldErrors[field] });
            });

            // Todo: show toast: Failed to create account. Please try again.
        }
    }

    return (
        <form
        autoComplete="off"
            onSubmit={handleSubmit(doRegister)}
            className="space-y-2" action="#" method="POST"
        >
            {/*  following fake fields are a workaround for chrome autofill filling the email, password on the registration apge  */}
            <input className="hidden"  type="email" name="_email" />
            <input  className="hidden" type="password" name="_password" />
            {/*  end fake fields  */}
            <div>
                <label htmlFor="email-address" className="text-sm mb-1">
                    Name
                </label>
                <input
                    id="name"
                    {...register("name", { required: true })}
                    type="text"
                    autoComplete="reg_name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                    placeholder="Your Name"
                />
                {errors.name && <div className="text-xs text-red-600">{errors.name.message}</div>}
            </div>
            <div>
                <label htmlFor="email-address" className="text-sm mb-1">
                    Email address
                </label>
                <input
                    id="email-address"
                    {...register("email", { required: true })}
                    type="email"
                    autoComplete="new-email"
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
                    autoComplete="new-password"
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
                        <span>Sign Up</span>
                    )}
                </button>
            </div>
            <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/login" className="font-semibold text-gray-800">
                    Sign In
                </Link>.
            </p>
        </form>
    );
}