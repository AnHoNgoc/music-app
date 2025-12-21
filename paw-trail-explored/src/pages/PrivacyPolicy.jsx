export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-green-800 leading-relaxed">
                        Welcome to Paw Trail Explored. Your privacy is important to us.
                        This Privacy Policy explains how we collect, use, and protect
                        information when you explore animal content, save favorites,
                        and read the latest animal-related news in our app.
                    </p>
                </section>

                {/* Information Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        1. Information We Collect
                    </h2>
                    <p className="text-green-800 leading-relaxed mb-2">
                        Paw Trail Explored does NOT collect personally identifiable information.
                        We may collect limited non-personal information such as:
                    </p>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Anonymous usage data (e.g., pages viewed, features used)</li>
                        <li>Device type, operating system, and app version</li>
                        <li>Crash reports and performance data</li>
                    </ul>
                </section>

                {/* Favorites & App Features */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        2. Favorites and App Data
                    </h2>
                    <p className="text-green-800 leading-relaxed">
                        Any animals you mark as favorites are stored locally on your device
                        or securely within the app environment. This data is not shared
                        with third parties and is used only to improve your personal experience.
                    </p>
                </section>

                {/* How We Use Information */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        3. How We Use Information
                    </h2>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Improve app content and usability</li>
                        <li>Enhance search and discovery features</li>
                        <li>Fix bugs and improve performance</li>
                        <li>Deliver a better learning experience about animals</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        4. Third-Party Services
                    </h2>
                    <p className="text-green-800 leading-relaxed mb-2">
                        Paw Trail Explored may use trusted third-party services for analytics
                        and performance monitoring. These services collect only anonymous,
                        technical information.
                    </p>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Analytics tools (e.g., Firebase Analytics)</li>
                        <li>Crash and error reporting services</li>
                    </ul>
                    <p className="text-green-800 mt-2">
                        We do not use advertising SDKs and do not sell or share user data
                        for marketing purposes.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        5. Data Security
                    </h2>
                    <p className="text-green-800 leading-relaxed">
                        We take reasonable measures to protect app-related data.
                        While no system is 100% secure, we continuously improve
                        our safeguards to protect user information.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        6. Your Rights
                    </h2>
                    <p className="text-green-800 leading-relaxed">
                        You can manage app data such as favorites directly within the app.
                        Since we do not collect personal information, there is no personal
                        data stored that requires access or deletion requests.
                    </p>
                </section>

                {/* Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        7. Policy Updates
                    </h2>
                    <p className="text-green-800 leading-relaxed">
                        We may update this Privacy Policy from time to time.
                        Any changes will be reflected on this page.
                        Continued use of the app means you accept the updated policy.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        8. Contact Us
                    </h2>
                    <p className="text-green-800 leading-relaxed">
                        If you have any questions about this Privacy Policy or Paw Trail Explored,
                        please contact us at:
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-green-600 underline ml-1"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}
