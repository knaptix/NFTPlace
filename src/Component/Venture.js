import { Link } from "react-router-dom"

const Ventures = () => {
    const ventures = [
        {
            id: 1,
            title: "AI-Generated NFTs",
            description:
                "Our platform allows creators to generate, mint, and monetize unique NFTs using AI-driven tools. This makes it accessible for artists of all skill levels to create high-quality digital art.",
            image:
                "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Creator Tools",
            status: "Active",
        },
        {
            id: 2,
            title: "Blockchain Security",
            description:
                "We ensure the authenticity and ownership of each NFT by recording every transaction on the blockchain. This provides a transparent and secure marketplace for digital assets.",
            image:
                "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Technology",
            status: "Active",
        },
        {
            id: 3,
            title: "User-Friendly Tools",
            description:
                "NYWNFT offers intuitive tools that lower the technical barriers to entry, allowing anyone to transform their creative vision into blockchain-backed digital art.",
            image:
                "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Accessibility",
            status: "Active",
        },
        {
            id: 4,
            title: "Community Building",
            description:
                "Our platform is designed to support both emerging and established creators, fostering a vibrant and inclusive digital art ecosystem where everyone can thrive.",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Community",
            status: "Active",
        },
        {
            id: 5,
            title: "Presale Opportunities",
            description:
                "Our ongoing presale on Pinksale provides early adopters exclusive opportunities to be part of a vision redefining how digital art is created, owned, and collected.",
            image:
                "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Investment",
            status: "Active",
        },
        {
            id: 6,
            title: "Creator Empowerment",
            description:
                "We aim to democratize digital art by providing accessible tools and new monetization paths, enabling artists to generate revenue from their work.",
            image:
                "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Monetization",
            status: "Active",
        },
    ]

    // const partners = [
    //     {
    //         id: 1,
    //         name: "Pinksale",
    //         logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    //         type: "Presale Platform",
    //     },
    //     {
    //         id: 2,
    //         name: "Digital Arts Foundation",
    //         logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    //         type: "Non-Profit",
    //     },
    //     {
    //         id: 3,
    //         name: "Blockchain Innovators",
    //         logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    //         type: "Technology",
    //     },
    //     {
    //         id: 4,
    //         name: "Creator Collective",
    //         logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    //         type: "Artist Network",
    //     },
    // ]

    // const successStories = [
    //     {
    //         id: 1,
    //         title: "AI-Generated Masterpiece",
    //         description:
    //             "An emerging artist with limited technical skills used our AI tools to create a collection that sold out within hours of launch.",
    //         image:
    //             "https://images.unsplash.com/photo-1655720828018-edd2daec9349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //         results: "Collection sold out in 24 hours",
    //     },
    //     {
    //         id: 2,
    //         title: "From Concept to Collection",
    //         description:
    //             "A creative team used NYWNFT's user-friendly tools to transform their abstract concepts into a cohesive NFT collection without any coding knowledge.",
    //         image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //         results: "200% ROI in first month",
    //     },
    //     {
    //         id: 3,
    //         title: "Community-Driven Project",
    //         description:
    //             "A group of artists collaborated through our platform to create a community-owned NFT project that bridges cultural divides through digital art.",
    //         image:
    //             "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //         results: "Growing community of 10,000+",
    //     },
    // ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#f0f8ff] to-[#e6f0fa]">
            {/* Hero Section */}
            <div className="relative bg-black text-white">
                <div className="absolute inset-0 overflow-hidden opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                        alt="Ventures Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative container mx-auto px-4 py-24 md:py-32">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">NYWNFT Ventures</h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-8"></div>
                        <p className="text-xl md:text-2xl mb-8">
                            Revolutionizing the digital art landscape through the combined power of AI and blockchain technology.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {/* <Link
                                to="/ventures/presale"
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hover:opacity-90 transition duration-300"
                            >
                                Join Presale
                            </Link> */}
                            <Link
                                to="/create"
                                className="px-8 py-3 border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
                            >
                                Start Creating
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Approach Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        At NYWNFT, we're making waves in the digital art world by bridging the gap between Blockchain and AI,
                        offering a unique platform for artists, collectors, and enthusiasts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-purple-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4">AI-Powered Creation</h3>
                        <p className="text-gray-600">
                            We combine artificial intelligence with creative tools to make digital art creation accessible to
                            everyone, regardless of technical skill level.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-purple-600"
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
                        <h3 className="text-xl font-bold mb-4">Blockchain Security</h3>
                        <p className="text-gray-600">
                            Every transaction is recorded on the blockchain, ensuring the authenticity and ownership of each NFT in a
                            transparent and secure marketplace.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-purple-600"
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
                        <h3 className="text-xl font-bold mb-4">Inclusive Community</h3>
                        <p className="text-gray-600">
                            We support both emerging and established creators, fostering a vibrant and inclusive digital art ecosystem
                            where everyone can thrive.
                        </p>
                    </div>
                </div>
            </div>

            {/* Current Ventures Section */}
            <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Ventures</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            Explore our innovative initiatives that are redefining how digital art is created, owned, and collected.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ventures.map((venture) => (
                            <div
                                key={venture.id}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={venture.image || "/placeholder.svg"}
                                        alt={venture.title}
                                        className="w-full h-full object-cover transition duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                                            {venture.category}
                                        </span>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${venture.status === "Active"
                                                ? "bg-green-100 text-green-600"
                                                : venture.status === "Coming Soon"
                                                    ? "bg-blue-100 text-blue-600"
                                                    : "bg-yellow-100 text-yellow-600"
                                                }`}
                                        >
                                            {venture.status}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{venture.title}</h3>
                                    <p className="text-gray-600 mb-4">{venture.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Presale Section */}
            {/* <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 md:p-12 text-white flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Presale on Pinksale</h2>
                                <p className="text-lg mb-6">
                                    Our ongoing presale provides early adopters exclusive opportunities to be part of a vision redefining
                                    how digital art is created, owned, and collected.
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Early access to premium features</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Exclusive NFT drops for presale participants</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Community governance rights</span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 mr-2 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Reduced platform fees for early supporters</span>
                                </li>
                            </ul>
                            <Link
                                to="/ventures/presale"
                                className="inline-block px-8 py-3 bg-white text-purple-600 font-medium rounded-full hover:bg-gray-100 transition duration-300 text-center"
                            >
                                Join Presale Now
                            </Link>
                        </div>
                        <div className="hidden md:block relative">
                            <img
                                src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Presale"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-600/50 text-center"></div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Success Stories Section */}
            {/* <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            See how creators are using NYWNFT to bring their digital art visions to life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {successStories.map((story) => (
                            <div
                                key={story.id}
                                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={story.image || "/placeholder.svg"}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition duration-500 hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                                    <p className="text-gray-600 mb-4">{story.description}</p>
                                    <div className="bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                                        {story.results}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* How It Works Section */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        Our platform makes it easy for anyone to create, mint, and sell NFTs, regardless of technical expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-purple-600">1</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Create</h3>
                        <p className="text-gray-600">
                            Use our AI-powered tools to generate unique digital art or upload your own creations.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-purple-600">2</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Mint</h3>
                        <p className="text-gray-600">
                            Transform your digital art into NFTs with just a few clicks, secured by blockchain technology.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-purple-600">3</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">List</h3>
                        <p className="text-gray-600">
                            Showcase your NFTs in our marketplace, setting your own prices and royalty terms.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="text-2xl font-bold text-purple-600">4</span>
                        </div>
                        <h3 className="text-xl font-bold mb-4">Earn</h3>
                        <p className="text-gray-600">
                            Sell your NFTs and earn royalties on secondary sales, creating ongoing revenue streams.
                        </p>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            {/* <div className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partners</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                        <p className="max-w-3xl mx-auto text-lg text-gray-600">
                            We collaborate with leading organizations to drive innovation in the NFT ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {partners.map((partner) => (
                            <div
                                key={partner.id}
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center"
                            >
                                <img
                                    src={partner.logo || "/placeholder.svg"}
                                    alt={partner.name}
                                    className="w-24 h-24 object-cover rounded-full mb-4"
                                />
                                <h3 className="text-lg font-bold text-center mb-1">{partner.name}</h3>
                                <p className="text-gray-500 text-sm text-center">{partner.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

            {/* CTA Section */}
            <div className="bg-black text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Digital Art Revolution</h2>
                    <p className="max-w-2xl mx-auto text-lg mb-8">
                        Whether you're an artist looking to monetize your creativity or a collector seeking unique digital assets,
                        NYWNFT provides the tools and platform you need to succeed.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/create"
                            className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition duration-300"
                        >
                            Start Creating
                        </Link>
                        {/* <Link
                            to="/ventures/presale"
                            className="px-8 py-3 bg-transparent border-2 border-white font-medium rounded-full hover:bg-white hover:text-purple-600 transition duration-300"
                        >
                            Join Presale
                        </Link> */}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            {/* <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">Do I need artistic skills to create NFTs on NYWNFT?</h3>
                            <p className="text-gray-600">
                                No, our AI-powered tools make it possible for anyone to create high-quality digital art, regardless of
                                their artistic background or technical skills.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">How does NYWNFT ensure the security of my NFTs?</h3>
                            <p className="text-gray-600">
                                We record every transaction on the blockchain, providing a transparent and immutable record of ownership
                                and authenticity for each NFT created and traded on our platform.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">What are the benefits of joining the presale?</h3>
                            <p className="text-gray-600">
                                Presale participants gain early access to premium features, exclusive NFT drops, community governance
                                rights, and reduced platform fees, positioning them for success as the platform grows.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">How do I earn money from my NFTs?</h3>
                            <p className="text-gray-600">
                                You can earn by selling your NFTs directly in our marketplace and by setting royalty terms that provide
                                you with ongoing revenue from secondary sales of your work.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">What makes NYWNFT different from other NFT platforms?</h3>
                            <p className="text-gray-600">
                                NYWNFT uniquely combines AI-powered creation tools with blockchain security, making it accessible to
                                creators of all skill levels while maintaining the highest standards of authenticity and ownership
                                verification.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Ventures;

