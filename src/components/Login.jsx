import React, { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };
    return (
        <div className="flex min-h-screen">
            <div className="flex items-center justify-center w-1/2 p-12 space-y-6 bg-white">
                <div className="max-w-6xl">
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
                    <h2 className="text-4xl font-bold my-2">Sign in</h2>
                    <p className="my-6 text-sm text-muted-foreground">
                        New owner?{" "}
                        <Link to="/signup" className="text-blue-600">
                            Sign Up
                        </Link>
                    </p>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <button
                                    type="button"
                                    role="checkbox"
                                    aria-checked="false"
                                    data-state="unchecked"
                                    value="on"
                                    className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                    id="remember"
                                ></button>
                                <input
                                    type="checkbox"
                                    aria-hidden="true"
                                    style={{ transform: "translateX(-100)", position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 }}
                                    tabIndex="-1"
                                    value="on"
                                />
                                <label htmlFor="remember" className="text-sm">
                                    Remember Me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-blue-600">
                                Forgot Password?
                            </a>
                        </div>
                        <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-blue-600">
                            Sign In
                        </button>
                    </form>
                    <div className="p-4 my-4 bg-gray-100 rounded-md">
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="font-bold">Admin:</span>
                                <span>admin@gmail.com | 123456</span>
                                <div
                                    className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
                                    data-v0-t="badge">
                                    Addon
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Owner:</span>
                                <span>owner@gmail.com | 123456</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Tenant:</span>
                                <span>tenant@gmail.com | 123456</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Maintainer:</span>
                                <span>maintainer@gmail.com | 123456</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 bg-blue-500 text-white">
                <img
                    src="src/assets/login-1675345093.png"
                    alt="Logo"
                    className="max-w-100 h-auto"
                    style={{ aspectRatio: 80 / 80, objectFit: "cover" }}
                />
                <h2 className="text-3xl font-bold">You are signing in Zaiproty</h2>
                <p className="text-sm">You are signing in Zaiproty</p>
            </div>
        </div>
    )
}

export default Login