export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to Spika Voice. Your privacy is very important to us. This Privacy Policy explains
                        how we handle data when you record your voice, convert it to text, save, edit, delete,
                        or share content within the app, as well as how the app uses your device’s microphone.
                    </p>
                </section>

                {/* Microphone Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Microphone Access
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        Spika Voice requires access to your device’s microphone only when you record your voice.
                        This allows the app to convert your spoken words into text.
                        We do not access your microphone without your explicit action.
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Recording is initiated only when you tap the record button.</li>
                        <li>No audio is transmitted to external servers; all processing can occur locally on your device.</li>
                        <li>Microphone access is temporary and stops automatically when recording ends.</li>
                    </ul>
                </section>

                {/* Information Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Information We Collect
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        Spika Voice does NOT collect personally identifiable information. We may collect limited
                        non-personal, anonymous data such as:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>App usage patterns (e.g., features used, text saved)</li>
                        <li>Device type, operating system, and app version</li>
                        <li>Crash reports and performance data</li>
                    </ul>
                </section>

                {/* Local Storage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Local Storage of Text
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        All text generated from your recordings is stored locally on your device. This data is not
                        uploaded or shared with any third party. You have full control over editing, deleting, or
                        sharing your text.
                    </p>
                </section>

                {/* How We Use Information */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. How We Use Information
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Improve app performance and reliability</li>
                        <li>Fix bugs and optimize user experience</li>
                        <li>Enhance voice-to-text conversion accuracy</li>
                        <li>Ensure smooth operation of app features</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Third-Party Services
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        Spika Voice does not use any third-party services for analytics, crash reporting, or advertising.
                        All processing happens locally on your device, ensuring your data remains private and under your control.
                    </p>
                    <p className="text-blue-800 mt-2">
                        No personal data is collected, sold, or shared with any external parties for marketing purposes.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Data Security
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We take reasonable measures to protect your app data. While no system is 100% secure,
                        we continuously work to safeguard your recordings and locally stored text.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Your Rights
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        You have full control over your content within Spika Voice. You can save, edit, delete,
                        and share your text anytime. Since we do not collect personal information, there is no
                        personal data stored that requires access or deletion requests.
                    </p>
                </section>

                {/* Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        8. Policy Updates
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We may update this Privacy Policy occasionally. Any changes will be posted on this page.
                        Continued use of the app means you accept the updated policy.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        9. Contact Us
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have any questions about this Privacy Policy or Spika Voice, please contact us at:
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-blue-600 underline ml-1"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}
