export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-green-50 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-green-800 leading-relaxed">
                        Welcome to Ride Tracking App. Your privacy is very important to us.
                        This Privacy Policy explains how we collect, use, and protect your information
                        when you use our application. By using the app, you agree to this policy.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">1. Data Collection</h2>
                    <p className="text-green-800 leading-relaxed mb-2">
                        We may collect the following information while the app is in use:
                    </p>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Location data to show your position in real-time</li>
                        <li>Ride data such as route and distance, if history tracking is enabled</li>
                        <li>Device and log information for app performance and security</li>
                    </ul>
                </section>

                {/* Use of Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">2. How We Use Your Data</h2>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Display your real-time location on the map</li>
                        <li>Allow optional review of your own ride paths</li>
                        <li>Improve app performance and stability</li>
                        <li>Provide support and troubleshoot issues</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">3. Third-Party Services</h2>
                    <p className="text-green-800 leading-relaxed">
                        We may use trusted third-party services for:
                    </p>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Cloud storage for optional ride history</li>
                        <li>Error tracking</li>
                        <li>App performance analytics</li>
                    </ul>
                    <p className="text-green-800 mt-2">
                        We do not sell or share your personal or location information for marketing purposes.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">4. Data Security</h2>
                    <p className="text-green-800 leading-relaxed">
                        Location data is protected while in transit using secure technology.
                        No permanent storage of personal data occurs without your consent.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">5. Your Rights</h2>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Stop location sharing at any time by closing the app</li>
                        <li>Delete optional ride history stored locally or in cloud (if enabled)</li>
                        <li>Control visibility while using the app</li>
                    </ul>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">6. Contact Us</h2>
                    <p className="text-green-800 leading-relaxed">
                        For privacy-related questions, contact us at:
                        <a href="mailto:anhongoc1306@gmail.com" className="text-green-600 underline ml-1">
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}