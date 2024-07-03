import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate()
    return (
        <div className="flex min-h-screen">
            <div className="flex items-center justify-center w-1/2 p-12 space-y-6 bg-white">
                <div className="min-h-24">
                    <div className="flex items-center space-x-2">
                        <img
                            src="/placeholder.svg"
                            alt="Logo"
                            className="w-10 h-10"
                            width="40"
                            height="40"
                            style={{ aspectRatio: 40 / 40, objectFit: "cover" }}
                        />
                        <h1 className="text-2xl font-bold">Zaiproty</h1>
                    </div>
                    <h2 className="text-4xl font-bold my-2">Sign Up</h2>
                    <p className="my-6 text-sm text-muted-foreground">
                        Already an owner?{" "}
                        <Link to="/login" className="text-blue-600">
                            Login
                        </Link>
                    </p>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                First Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Last Name
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Contact Number
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                placeholder="Contact Number"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="password"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Confirm Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                type="password"
                                id="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <button onClick={() => navigate("/login")} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-600">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 bg-blue-500 text-white">
                <img
                    src="src/assets/login-1675345093.png"
                    alt="Logo"
                    style={{ aspectRatio: 80 / 80, objectFit: "cover" }}
                />
                <h2 className="text-3xl font-bold">You are signing in Zaiproty</h2>
                <p className="text-sm">You are signing in Zaiproty</p>
            </div>
        </div>
    )
}

export default Signup