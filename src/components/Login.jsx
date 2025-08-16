import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h3 className="font-bold text-lg">Login!</h3>
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
                            <button className="bg-pink-500 text-white px-3 py-2 border rounded-md hover:bg-pink-700 duration-200 cursor-pointer">Login</button>
                            <p>Not registered? <span className="underline text-blue-400 cursor-pointer"><Link to="/signup">Signup</Link></span></p>
                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login