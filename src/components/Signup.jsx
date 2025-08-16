import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Navber from './Navbar'
import Footer from './Footer'
const Signup = () => {
    return (
        <>
            <Navber />
            <div className="flex h-screen items-center justify-center">
                <div className="w-[400px]">
                    <div className="border-[2px] shadow-sm p-5 rounded-md">
                        <form method="dialog">
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className="mt-4 space-y-2">
                                <span>Full Name</span>
                                <br />
                                <input type="name" name="name" id="name" placeholder="Enter the name" className="w-80 py-1 px-3 border rounded-md outline-none" />
                            </div>

                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input type="email" name="email" id="email" placeholder="Enter the email" className="w-80 py-1 px-3 border rounded-md outline-none" />
                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input type="password" name="password" id="password" placeholder="Enter the password" className="py-1 w-80 px-3 border rounded-md outline-none" />
                            </div>
                            {/* {button} */}
                            <div className="flex justify-around mt-4">
                                <button className="bg-pink-500 text-white px-3 py-2 border rounded-md hover:bg-pink-700 duration-200 cursor-pointer">Signup</button>
                                <p>Have account?
                                    <button
                                        className="underline text-blue-400 cursor-pointer"
                                        onClick={() => document.getElementById('my_modal_3').showModal()}>
                                        Login</button>
                                    <Login />
                                </p>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup