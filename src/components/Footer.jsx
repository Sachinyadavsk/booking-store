import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center text-base-content p-10 rounded">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Book Store Sk</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer
