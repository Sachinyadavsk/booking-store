import React from 'react'
import imgc from '../assets/image/contact-usr.jpg'

const Contact = () => {
    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-28">
                <h1 className="text-2xl font-semibold">
                    Contact Us Booking <span className="text-pink-400 duration-200">Store</span>
                </h1>
                <p className="mt-4">Have a question about our books, orders, or upcoming events? We’d love to hear from you! Reach out to our friendly team for inquiries, recommendations, or support. Whether you’re searching for your next great read or need help with your purchase, we’re here to assist you.
                    If you want, I can also make a more creative, cozy bookstore-style version that feels warmer and reader-friendly.</p>
                <img src={imgc} className="mt-5" alt="image" />
            </div>
        </div>
    )
}

export default Contact
