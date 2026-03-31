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
                        Welcome to Zenvix Music. Your privacy is important to us. This app is designed
                        to play music stored locally on your device and does not require an internet
                        connection or user account.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Information We Collect
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Zenvix Music does NOT collect any personal information. We do not require login,
                        and we do not collect or store any user data on external servers.
                    </p>
                </section>

                {/* Local Music Access */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Access to Local Files
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        The app may request permission to access music files stored on your device.
                        This is required to:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Display your music library</li>
                        <li>Play audio files from your device</li>
                    </ul>
                    <p className="text-blue-800 mt-2">
                        All music files remain on your device and are never uploaded or shared.
                    </p>
                </section>

                {/* Offline Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Offline Usage
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Zenvix Music works completely offline. No internet connection is required,
                        and the app does not communicate with any external servers.
                    </p>
                </section>

                {/* Third Party */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Third-Party Services
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We do not use any third-party services for analytics, advertising, or tracking.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Data Security
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Since all data remains on your device, you have full control over your music
                        and app usage. We do not store or transmit any user data.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Your Rights
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        You have full control over your music files on your device. You can add, delete,
                        or manage your music at any time outside the app.
                    </p>
                </section>

                {/* Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Policy Updates
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We may update this Privacy Policy occasionally. Any changes will be reflected
                        on this page.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        8. Contact Us
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have any questions, please contact us at:
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
