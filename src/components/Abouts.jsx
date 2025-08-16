import React from 'react'
import imgr from '../assets/image/reactjs.jpg'
import imgrn from '../assets/image/React-Native.png'

const Abouts = () => {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">About This <span className="text-pink-500">Course! :)</span></h1>
                    <p className="mt-12"> This course is designed for learners who want to master both React.js for the web and React Native for mobile development. By the end of this course, you’ll be able to build high-performance, cross-platform applications that run seamlessly on browsers, iOS, and Android.
                        React is the most popular JavaScript library for building dynamic and interactive user interfaces, while React Native takes those skills and extends them into the world of mobile app development. This course bridges both worlds, making you a versatile full-stack front-end developer.
                        Whether you are a beginner starting fresh, a JavaScript developer wanting to level up, or a professional aiming to expand into mobile apps, this course gives you hands-on, practical experience with real-world projects. </p>
                </div>
                <h1 className="text-xl md:text-4xl mt-4 hover:text-blue-600 duration-200 underline">Why Learn React and React Native?</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full order-2 md:order-1 md:w-1/2 mt-6">
                        <img src={imgr} className="w-[660px]" alt="" srcset="" />
                    </div>
                    <div className="w-full order-2 md:order-1 md:w-1/2 mt-6">
                        <img src={imgrn} className="w-[660px]" alt="" srcset="" />
                    </div>
                </div>
                <div className="card">
                    <p className="mt-12">In today’s digital world, every business and individual brand needs both a responsive website and a mobile app. Learning React alone makes you a strong web developer, but combining it with React Native makes you unstoppable—you can ship to the web, iOS, and Android with one unified skill set.
                        Companies like Facebook, Instagram, Uber, Airbnb, and Tesla rely on React or React Native, proving that mastering these technologies unlocks high-paying career opportunities and the ability to work on cutting-edge projects.</p>
                    <h4 className="font-semibold mt-2">1. React Fundamentals</h4>
                    <ul className="mt-2">
                        <li>Understanding JSX, components, and props</li>
                        <li>Managing component state with useState</li>
                        <li>Handling events and forms</li>
                        <li>Conditional rendering and lists</li>
                        <li>Working with React Router for navigation</li>
                        <li>Integrating APIs with fetch and axios</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default Abouts