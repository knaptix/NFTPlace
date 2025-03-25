import React from 'react';  

const Community = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative w-full h-96 md:h-[600px]">
                <img
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80"
                    alt="NFT Community"
                    className="w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6">Community Standards</h1>
                    <p className="text-xl md:text-3xl max-w-4xl">
                        Creating a safe, inclusive, and vibrant space for the New York World NFT community.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="w-full mx-auto py-24 px-8 md:px-16">
                <p className="text-xl md:text-2xl text-center max-w-5xl mx-auto mb-16">
                    At New York World NFT, we are committed to fostering a positive, respectful, and inclusive environment.
                    Our community standards ensure a safe and welcoming experience for all members.
                </p>

                {/* Standards Sections */}
                <div className="space-y-24">
                    {standards.map((standard, index) => (
                        <StandardSection key={index} {...standard} reversed={index % 2 !== 0} />
                    ))}
                </div>
            </section>
        </div>
    );
};

const StandardSection = ({ title, image, points, reversed }) => {
    return (
        <div className={`flex flex-col md:flex-row ${reversed ? 'md:flex-row-reverse' : ''} gap-16 items-center`}>
            <div className="w-full md:w-1/2">
                <img src={image} alt={title} className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold mb-8 text-blue-400">{title}</h2>
                <ul className="space-y-5">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-start text-xl">
                            <span className="text-blue-400 text-4xl mr-4">•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const standards = [
    {
        title: "Respect and Civility",
        image: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80",
        points: [
            "Treat all members with kindness, respect, and empathy.",
            "Engage in constructive discussions, even when you disagree.",
            "Avoid personal attacks, harassment, or discrimination."
        ]
    },
    {
        title: "Safety and Privacy",
        image: "https://imgs.search.brave.com/MvOWcxe27QWuC4CINU9_vSUaNiZ02ElTal0_qbFILvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/dXNpbmVzcy1jb3Jw/b3JhdGUtcHJvdGVj/dGlvbi1zYWZldHkt/c2VjdXJpdHktY29u/Y2VwdF81Mzg3Ni02/NDk2NC5qcGc_c2Vt/dD1haXNfaHlicmlk",
        points: [
            "Protect your own and others' privacy.",
            "Do not share personal information without consent.",
            "Report any harmful or suspicious activity."
        ]
    },
    {
        title: "Honesty and Integrity",
        image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80",
        points: [
            "Be truthful and authentic.",
            "Avoid spreading false information.",
            "Respect intellectual property rights."
        ]
    },
    {
        title: "Inclusivity and Diversity",
        image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
        points: [
            "Celebrate diverse perspectives and experiences.",
            "Avoid language or behavior that makes others feel unwelcome.",
            "Promote an inclusive environment."
        ]
    },
    {
        title: "Constructive Contributions",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
        points: [
            "Share meaningful and relevant content.",
            "Avoid spamming, trolling, or disruptive behavior.",
            "Provide constructive feedback to others."
        ]
    },
    {
        title: "Compliance and Enforcement",
        image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&q=80",
        points: [
            "Follow community guidelines and laws.",
            "Violations may result in warnings, suspension, or removal.",
            "Cooperate with moderators to resolve issues."
        ]
    }
];

export default Community;
