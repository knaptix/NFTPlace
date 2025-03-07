"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const partnershipCategories = [
    {
        id: "blockchain",
        title: "Blockchain Technology Providers",
        description:
            "NYWNFT collaborates with leading blockchain technology companies to ensure the security and authenticity of each NFT, providing a transparent and secure marketplace for digital assets.",
        image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
        partners: [
            { name: "Ethereum Foundation", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Polygon Network", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Chainlink", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Solana", logo: "/placeholder.svg?height=80&width=80" },
        ],
    },
    {
        id: "ai",
        title: "AI Development Firms",
        description:
            "By partnering with AI firms, NYWNFT develops and refines the AI-driven tools used for generating NFTs, making high-quality digital art accessible to artists of all skill levels.",
        image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2832&auto=format&fit=crop",
        partners: [
            { name: "OpenAI", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Stability AI", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Anthropic", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Midjourney", logo: "/placeholder.svg?height=80&width=80" },
        ],
    },
    {
        id: "marketing",
        title: "Marketing and PR Agencies",
        description:
            "To promote the platform and reach a wider audience, NYWNFT works with marketing and public relations agencies that have extensive experience in the digital currency market and traditional financial markets.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop",
        partners: [
            { name: "Digital Frontier PR", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Blockchain Media Group", logo: "/placeholder.svg?height=80&width=80" },
            { name: "NFT Promoters", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Crypto Marketing Alliance", logo: "/placeholder.svg?height=80&width=80" },
        ],
    },
    {
        id: "legal",
        title: "Legal and Compliance Advisors",
        description:
            "Ensuring compliance with regulations and protecting intellectual property, NYWNFT engages experts in the fields of blockchain, finance, and law as advisors.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2940&auto=format&fit=crop",
        partners: [
            { name: "Blockchain Legal Partners", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Digital Asset Compliance", logo: "/placeholder.svg?height=80&width=80" },
            { name: "NFT Law Group", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Crypto Regulatory Advisors", logo: "/placeholder.svg?height=80&width=80" },
        ],
    },
    {
        id: "payment",
        title: "Payment Processors",
        description:
            "To facilitate transactions on the platform, NYWNFT partners with trusted payment processing companies, ensuring smooth and secure financial operations.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2940&auto=format&fit=crop",
        partners: [
            { name: "Stripe", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Coinbase Commerce", logo: "/placeholder.svg?height=80&width=80" },
            { name: "Circle", logo: "/placeholder.svg?height=80&width=80" },
            { name: "PayPal Crypto", logo: "/placeholder.svg?height=80&width=80" },
        ],
    },
]

const Partnerships = () => {
    const [activeCategory, setActiveCategory] = useState(partnershipCategories[0].id)
    const [isIntersecting, setIsIntersecting] = useState({})

    useEffect(() => {
        const observers = {}

        partnershipCategories.forEach((category) => {
            const element = document.getElementById(category.id)
            if (element) {
                const observer = new IntersectionObserver(
                    ([entry]) => {
                        setIsIntersecting((prev) => ({
                            ...prev,
                            [category.id]: entry.isIntersecting,
                        }))

                        if (entry.isIntersecting) {
                            setActiveCategory(category.id)
                        }
                    },
                    { threshold: 0.5 },
                )

                observer.observe(element)
                observers[category.id] = observer
            }
        })

        return () => {
            Object.values(observers).forEach((observer) => {
                observer.disconnect()
            })
        }
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
        setActiveCategory(id)
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#1f2937] text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">NYWNFT Partnerships</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mb-10">
                        Collaborating with industry leaders to build the future of digital art and ownership in the New York World.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="mailto:nywnftinfo@nywnft.com" className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition">
                            Become a Partner
                        </Link>

                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="sticky top-0 bg-white z-10 shadow-md">
                <div className="container mx-auto px-6">
                    <div className="flex overflow-x-auto py-4 scrollbar-hide">
                        <div className="flex space-x-6">
                            {partnershipCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => scrollToSection(category.id)}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? "bg-black text-white" : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {category.title}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Partnership Categories */}
            <div className="container mx-auto px-6 py-16">
                {partnershipCategories.map((category, index) => (
                    <div
                        id={category.id}
                        key={category.id}
                        className={`mb-24 scroll-mt-20 ${isIntersecting[category.id] ? "opacity-100" : "opacity-90"
                            } transition-opacity duration-500`}
                    >
                        <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10`}>
                            <div className="md:w-1/2">
                                <img
                                    src={category.image || "/placeholder.svg"}
                                    alt={category.title}
                                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                                <p className="text-gray-700 mb-8">{category.description}</p>
                                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {category.partners.map((partner, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div className="bg-gray-100 p-4 rounded-full mb-2">
                                                <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="w-16 h-16" />
                                            </div>
                                            <p className="text-sm font-medium text-center">{partner.name}</p>
                                        </div>
                                    ))}
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="bg-black text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Partnering with NYWNFT?</h2>
                    <p className="text-xl max-w-2xl mx-auto mb-10">
                        Join our ecosystem of partners and help shape the future of digital art and NFTs in the New York World.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        {/* <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition">
                            Apply for Partnership
                        </button> */}
                        <Link to="mailto:nywnftinfo@nywnft.com" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:bg-opacity-10 transition">
                            Contact Our Team
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnerships

