import React from 'react';

const CommunityStandards = () => {
    return (
        <div className="min-h-screen bg-black text-white">


            {/* Hero Section */}
            <section className="relative w-full h-64 md:h-96">
                <img
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80"
                    alt="NFT Community"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Community Standards</h1>
                    <p className="text-lg md:text-xl max-w-2xl">Creating a safe, inclusive and vibrant space for the New York World NFT community</p>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-4xl mx-auto py-16 px-4 md:px-8">
                <div className="mb-12">
                    <p className="text-lg mb-6">
                        At New York World NFT, we are committed to fostering a positive, respectful, and inclusive environment for all our users.
                        Our community standards are designed to ensure that everyone can enjoy a safe and welcoming experience on our platform.
                        By adhering to these guidelines, we can create a vibrant and supportive community together.
                    </p>
                </div>

                {/* Standards Sections */}
                <div className="space-y-16">
                    <StandardSection
                        title="Respect and Civility"
                        image="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80"
                        points={[
                            "Treat all members with kindness, respect, and empathy.",
                            "Engage in constructive and respectful discussions, even when you disagree.",
                            "Avoid personal attacks, harassment, or any form of discrimination based on race, ethnicity, gender, sexuality, religion, or other characteristics."
                        ]}
                    />

                    <StandardSection
                        title="Safety and Privacy"
                        image="/privacy_security.jpg"
                        points={[
                            "Protect your own privacy and the privacy of others.",
                            "Do not share personal information without consent.",
                            "Report any harmful or suspicious activity to our moderation team."
                        ]}
                        reversed
                    />

                    <StandardSection
                        title="Honesty and Integrity"
                        image="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80"
                        points={[
                            "Be truthful and authentic in your interactions.",
                            "Avoid spreading false information or engaging in deceptive practices.",
                            "Respect intellectual property rights and do not share copyrighted content without permission."
                        ]}
                    />

                    <StandardSection
                        title="Inclusivity and Diversity"
                        image="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80"
                        points={[
                            "Embrace and celebrate the diverse perspectives and experiences of our community members.",
                            "Avoid language or behavior that could make others feel unwelcome or marginalized.",
                            "Promote an inclusive environment where everyone can participate and contribute."
                        ]}
                        reversed
                    />

                    <StandardSection
                        title="Constructive Contributions"
                        image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                        points={[
                            "Share thoughtful, meaningful, and relevant content that adds value to the community.",
                            "Avoid spamming, trolling, or disruptive behavior.",
                            "Provide constructive feedback and support to fellow community members."
                        ]}
                    />

                    <StandardSection
                        title="Compliance and Enforcement"
                        image="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80"
                        points={[
                            "Adhere to our community guidelines and any applicable laws and regulations.",
                            "Understand that violations of these standards may result in warnings, temporary suspension, or permanent removal from the platform.",
                            "Cooperate with our moderation team to resolve any issues and maintain a positive community atmosphere."
                        ]}
                        reversed
                    />
                </div>
            </section>




        </div>
    );
};

// Standard Section Component
const StandardSection = ({ title, image, points, reversed }) => {
    return (
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8`}>
            <div className="md:w-1/3">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover rounded-lg"
                />
            </div>
            <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">{title}</h2>
                <ul className="space-y-3">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CommunityStandards;