export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">
                    Privacy Policy
                </h1>
                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-red-800 leading-relaxed">
                        Welcome to our An Quiz Mini App. Your privacy is important to us.
                        This Privacy Policy explains what information we collect, how we use it,
                        and how we protect it. By using this app, you agree to the terms outlined below.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">1. Information We Collect</h2>
                    <p className="text-red-800 leading-relaxed mb-2">
                        Our quiz app is designed for simple educational use and does NOT collect personal data unless you choose to provide it.
                        The app may collect minimal non-personal information such as:
                    </p>
                    <ul className="list-disc list-inside text-red-800 space-y-1">
                        <li>Anonymous usage statistics (e.g., number of quizzes played)</li>
                        <li>Device information (model, OS version)</li>
                        <li>App performance and crash logs</li>
                    </ul>
                    <p className="text-red-800 mt-2">
                        We do not collect names, emails, phone numbers, or any sensitive personal information.
                    </p>
                </section>

                {/* Use of Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">2. How We Use Information</h2>
                    <p className="text-red-800 leading-relaxed">
                        Any collected information is used solely to:
                    </p>
                    <ul className="list-disc list-inside text-red-800 space-y-1">
                        <li>Improve app performance and fix technical issues</li>
                        <li>Enhance user experience</li>
                        <li>Ensure app stability and functionality</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">3. Third-Party Services</h2>
                    <p className="text-red-800 leading-relaxed mb-2">
                        Our app may use third-party services for analytics or crash reporting.
                        These services may collect anonymous technical data as described in their own privacy policies.
                    </p>
                    <ul className="list-disc list-inside text-red-800 space-y-1">
                        <li>Google Analytics / Firebase Analytics</li>
                        <li>Crashlytics (if enabled)</li>
                    </ul>
                    <p className="text-red-800 mt-2">
                        We do NOT use advertising networks and do NOT collect data for marketing purposes.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">4. Data Security</h2>
                    <p className="text-red-800 leading-relaxed">
                        We use reasonable technical measures to protect any information handled by the app.
                        However, no digital system is completely secure. We recommend keeping your device updated and protected.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">5. Your Rights</h2>
                    <p className="text-red-800 leading-relaxed">
                        Because our app does not collect personally identifiable information,
                        there is no personal data stored that needs to be accessed, edited, or deleted.
                        However, if you have questions, feel free to contact us.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">6. Contact Us</h2>
                    <p className="text-red-800 leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us at:
                        <a href="mailto:anhongoc1306@gmail.com" className="text-red-600 underline ml-1">
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}