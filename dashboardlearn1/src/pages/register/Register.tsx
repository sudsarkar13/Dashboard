import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register: React.FC = () => {
	return (
		<main>
			<Head>
				<title>Dashboard | Register User</title>
			</Head>
			<div className="flex min-h-screen items-center justify-center">
				<Card className='w-full mx-auto max-w-sm'>
					<CardHeader>
						<CardTitle className='text-xl'>Sign Up</CardTitle>
						<CardDescription>
							Enter your information to create an account
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='grid gap-4'>
							<div className='grid gap-4'>
									<Label htmlFor='first-name'>Name</Label>
									<Input id='first-name' placeholder='Max Thunderstorm' required />
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='mail@example.com'
									required
								/>
							</div>
							<div className='grid gap-2'>
								<Label htmlFor='password'>Password</Label>
								<Input id='password' type='password' placeholder="Write strong password" required />
							</div>
							<Button type='submit' className='w-full'>
								Create an account
							</Button>
						</div>
						<div className='mt-4 text-center text-sm'>
							Already have an account?{" "}
							<Link href='/login' className='underline'>
								Sign in
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	);
};

export default Register;
