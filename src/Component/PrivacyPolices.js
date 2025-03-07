const PrivacyPolices = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-gray-600">Effective Date: 12/25/2024</p>
                </div>

                {/* Introduction */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p className="text-gray-700 mb-4">
                        Welcome to New York World NFT (NYWNFT). We are committed to protecting your privacy and ensuring that your
                        personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we
                        collect, use, and protect your information when you visit our website, nywnft.com.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                    <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>
                            <span className="font-medium">Personal Information:</span> This includes your name, email address, phone
                            number, and any other information you provide when you register on our site, subscribe to our newsletter,
                            or contact us.
                        </li>
                        <li>
                            <span className="font-medium">Usage Data:</span> We collect information about how you interact with our
                            website, such as your IP address, browser type, pages visited, and the time and date of your visit.
                        </li>
                        <li>
                            <span className="font-medium">Cookies and Tracking Technologies:</span> We use cookies and similar
                            tracking technologies to enhance your experience on our website. Cookies are small data files stored on
                            your device that help us understand how you use our site and improve its functionality.
                        </li>
                    </ul>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>
                            <span className="font-medium">To Provide and Improve Our Services:</span> We use your information to
                            operate and maintain our website, process transactions, and improve our services.
                        </li>
                        <li>
                            <span className="font-medium">To Communicate with You:</span> We may use your contact information to send
                            you updates, newsletters, and promotional materials. You can opt-out of these communications at any time.
                        </li>
                        <li>
                            <span className="font-medium">To Analyze and Understand Usage:</span> We use usage data to analyze trends,
                            monitor the effectiveness of our website, and gather demographic information.
                        </li>
                    </ul>
                </section>

                {/* How We Protect Your Information */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">How We Protect Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        We implement a variety of security measures to protect your personal information from unauthorized access,
                        use, or disclosure. These measures include encryption, secure servers, and regular security assessments.
                    </p>
                </section>

                {/* Sharing Your Information */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        We do not sell, trade, or otherwise transfer your personal information to outside parties, except in the
                        following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>
                            <span className="font-medium">Service Providers:</span> We may share your information with trusted
                            third-party service providers who assist us in operating our website and providing our services.
                        </li>
                        <li>
                            <span className="font-medium">Legal Requirements:</span> We may disclose your information if required by
                            law or in response to a valid legal request.
                        </li>
                    </ul>
                </section>

                {/* Your Rights and Choices */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
                    <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>
                            <span className="font-medium">Access and Correction:</span> You can request access to your personal
                            information and ask us to correct any inaccuracies.
                        </li>
                        <li>
                            <span className="font-medium">Deletion:</span> You can request that we delete your personal information,
                            subject to certain legal obligations.
                        </li>
                        <li>
                            <span className="font-medium">Opt-Out:</span> You can opt-out of receiving promotional communications from
                            us at any time by following the unsubscribe instructions in our emails.
                        </li>
                    </ul>
                </section>

                {/* Changes to This Privacy Policy */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-gray-700 mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the
                        effective date will be updated accordingly. We encourage you to review this policy periodically to stay
                        informed about how we are protecting your information.
                    </p>
                </section>

                {/* Contact Us */}
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:nywnftinfo@nywnft.com" className="text-blue-600 hover:underline">
                            nywnftinfo@nywnft.com
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolices;

