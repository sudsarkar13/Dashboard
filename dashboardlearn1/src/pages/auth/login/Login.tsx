/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Head from "next/head";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/pages/api/users/API";

const Login: React.FC = () => {
	const emailref = React.useRef<HTMLInputElement>(null);
	const passwordref = React.useRef<HTMLInputElement>(null);

	const mutation = useMutation({
		mutationFn: login,
		onSuccess: () => {
			// Handle success
			console.log("Login successfull");
		},
		// onError: (error) => {
		// 	// Handle error
		// },
	})

	const handleLoginSubmit = () => {
		const email = emailref.current?.value;
		const password = passwordref.current?.value;
		console.log("data", { email, password });

		if (!email || !password) {
			return alert("Please enter email and password");
		}
		mutation.mutate({ email, password });
		// Make api/server call to login user
	};

	return (
		<main>
			<Head>
				<title>Dashboard | Login</title>
			</Head>
			<div className='flex min-h-screen items-center justify-center'>
				<Card className='w-full max-w-sm'>
					<CardHeader>
						<CardTitle className='text-2xl'>Login</CardTitle>
						<CardDescription>
							Enter your email below to login to your account.
						</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Email</Label>
							<Input
								ref={emailref}
								id='email'
								type='email'
								placeholder='m@example.com'
								required
							/>
						</div>
						<div className='grid gap-2'>
							<Label htmlFor='password'>Password</Label>
							<Input ref={passwordref} id='password' type='password' required />
						</div>
					</CardContent>
					<CardFooter>
						<div className='w-full'>
							<Button onClick={handleLoginSubmit} className='w-full'>
								Sign in
							</Button>
							<div className='mt-4 text-center text-sm'>
								Don't have an account?{" "}
								<Link href='/auth/register' className='underline'>
									Register here
								</Link>
							</div>
						</div>
					</CardFooter>
				</Card>
			</div>
		</main>
	);
};

export default Login;
