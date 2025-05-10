import React from 'react'

function navigation() {
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

            const toggleMobileMenu = () => {
                setMobileMenuOpen(!mobileMenuOpen);
            };

            const closeMobileMenu = () => {
                setMobileMenuOpen(false);
            };

    return (
         <nav className="fixed w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-8">
                                    <a href="#home" className="nav-link text-white px-3 py-2 text-sm font-medium">Home</a>
                                    <a href="#about" className="nav-link text-white px-3 py-2 text-sm font-medium">About</a>
                                    <a href="#services" className="nav-link text-white px-3 py-2 text-sm font-medium">Services</a>
                                    <a href="#projects" className="nav-link text-white px-3 py-2 text-sm font-medium">Projects</a>
                                    <a href="#contact" className="nav-link text-white px-3 py-2 text-sm font-medium">Contact</a>
                                </div>
                            </div>
                            <div className="md:hidden">
                                <button 
                                    onClick={toggleMobileMenu}
                                    className="text-white focus:outline-none"
                                >
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`mobile-menu fixed inset-y-0 right-0 w-64 bg-gray-900 z-50 p-4 border-l border-gray-800 ${mobileMenuOpen ? 'open' : ''}`}>
                        <div className="flex justify-end">
                            <button 
                                onClick={closeMobileMenu}
                                className="text-white focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="mt-8 flex flex-col space-y-4">
                            <a href="#home" onClick={closeMobileMenu} className="nav-link text-white px-3 py-2 text-lg font-medium">Home</a>
                            <a href="#about" onClick={closeMobileMenu} className="nav-link text-white px-3 py-2 text-lg font-medium">About</a>
                            <a href="#services" onClick={closeMobileMenu} className="nav-link text-white px-3 py-2 text-lg font-medium">Services</a>
                            <a href="#projects" onClick={closeMobileMenu} className="nav-link text-white px-3 py-2 text-lg font-medium">Projects</a>
                            <a href="#contact" onClick={closeMobileMenu} className="nav-link text-white px-3 py-2 text-lg font-medium">Contact</a>
                        </div>
                    </div>
                </nav>
    );
}

export default navigation