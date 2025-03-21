import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f0f8ff] to-[#e6f0fa]">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                        ABOUT US
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">New York World NFT</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg mb-6">
                                Welcome to New York World NFT, where the future of creativity meets the heart of the world. At NYWNFT,
                                we bridge the gap between Blockchain and AI, offering a unique platform for artists, collectors, and
                                enthusiasts to generate, mint, and own extraordinary NFTs. Our mission is to unlock the limitless
                                potential of digital art and collectibles, empowering creators to bring their visions to life and
                                connect with a global audience.
                            </p>
                            <p className="text-lg mb-6">
                                Founded in 2024 in the vibrant city of New York, we are inspired by the city's dynamic energy and
                                diverse culture. Our marketplace features a curated selection of the latest and most unique NFTs,
                                ranging from abstract illustrations and pixel art to cutting-edge technology and anime. Whether you're
                                an artist or simply someone who wants to showcase creativity, NYWNFT is your gateway for digital art.
                            </p>
                            <p className="text-lg mb-6">
                                Since 2023, we have been exploring various projects in the crypto space, recognizing that many projects
                                have a similar agenda—create a coin and hope for community support. At NYWNFT, we take a different
                                approach. You don't have to be an artist to show how creative you can be. We believe in the people in
                                the project, pointing the way for them to become financially independent and proud of what they have
                                built.
                            </p>
                            <p className="text-lg">
                                Join us on this exciting journey as we explore the endless possibilities of NFTs and redefine the future
                                of creativity. Keep connected with NYWNFT, for the latest feature releases, NFT drops, and tips and
                                tricks for navigating the NFT landscape. Together, let's shape the future of art and technology.
                            </p>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                to="/"
                                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
                            >
                                Explore Marketplace
                            </Link>
                            <Link
                                to="/create"
                                className="px-8 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition duration-300"
                            >
                                Start Creating
                            </Link>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col gap-8">
                        <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
                            <img
                                src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1742563935/about_xsjmnq.jpg"
                        
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Vision Section */}
            <div className="bg-black text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition duration-300">
                            <div className="text-purple-400 text-4xl mb-4">01</div>
                            <h3 className="text-xl font-bold mb-4">Bridging Blockchain & AI</h3>
                            <p className="text-gray-300">
                                We combine the power of blockchain technology with artificial intelligence to create a seamless,
                                innovative platform for digital art creation and ownership.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition duration-300">
                            <div className="text-purple-400 text-4xl mb-4">02</div>
                            <h3 className="text-xl font-bold mb-4">Empowering Creators</h3>
                            <p className="text-gray-300">
                                Our platform provides tools and resources for artists and creators to mint, showcase, and sell their
                                digital creations to a global audience.
                            </p>
                        </div>
                        <div className="bg-gray-900 p-8 rounded-xl hover:bg-gray-800 transition duration-300">
                            <div className="text-purple-400 text-4xl mb-4">03</div>
                            <h3 className="text-xl font-bold mb-4">Building Community</h3>
                            <p className="text-gray-300">
                                We're creating more than a marketplace—we're building a community of passionate creators, collectors,
                                and enthusiasts who share our vision for the future of digital art.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* What Sets Us Apart */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets Us Apart</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        At NYWNFT, we're redefining the NFT landscape with our unique approach and innovative features.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">AI-Powered Creation</h3>
                                <p className="text-gray-600">
                                    Our platform integrates cutting-edge AI tools that help users generate unique digital art, even if
                                    they don't have traditional artistic skills.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Secure Blockchain Technology</h3>
                                <p className="text-gray-600">
                                    We leverage robust blockchain infrastructure to ensure secure, transparent transactions and verifiable
                                    ownership of digital assets.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Community-Focused Approach</h3>
                                <p className="text-gray-600">
                                    Unlike other projects that focus solely on token value, we prioritize building a sustainable ecosystem
                                    that benefits all participants.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Curated Marketplace</h3>
                                <p className="text-gray-600">
                                    We carefully curate our marketplace to showcase high-quality, diverse digital art across various
                                    styles and categories.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Financial Independence</h3>
                                <p className="text-gray-600">
                                    We're committed to helping our community members achieve financial independence through digital asset
                                    creation and ownership.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-purple-100 p-3 rounded-lg">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-purple-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Educational Resources</h3>
                                <p className="text-gray-600">
                                    We provide comprehensive resources to help newcomers navigate the NFT space, from creation to trading
                                    and collecting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Us CTA */}
            <div className="bg-black text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the NYWNFT Community</h2>
                    <p className="max-w-2xl mx-auto text-lg mb-8">
                        Be part of the revolution in digital art and ownership. Connect with fellow creators, collectors, and
                        enthusiasts who share your passion for NFTs and blockchain technology.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/join-community"
                            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition duration-300"
                        >
                            Join Community
                        </Link>
                        <Link
                            to="/whitepaper"
                            className="px-8 py-3 bg-transparent border-2 border-white font-medium rounded-full hover:bg-white hover:text-black transition duration-300"
                        >
                            Read Whitepaper
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage

