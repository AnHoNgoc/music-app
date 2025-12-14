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
                        Welcome to the QR Code Generator & Scanner App. Your privacy is important to us.
                        This Privacy Policy explains how we handle information and permissions,
                        including camera access, when you use our app.
                    </p>
                </section>

                {/* Camera Permission */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Camera Access Permission
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        Our app requires camera access solely for the purpose of scanning QR codes.
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>The camera is used only when you choose the “Scan QR Code” feature.</li>
                        <li>No photos, videos, or camera data are recorded or stored.</li>
                        <li>Camera access can be enabled or disabled at any time in your device settings.</li>
                    </ul>
                </section>

                {/* Information Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Information We Collect
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        We do NOT collect personally identifiable information. The app may collect
                        limited non-personal data such as:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Anonymous usage statistics (e.g., feature usage)</li>
                        <li>Device type and operating system version</li>
                        <li>Crash reports and performance diagnostics</li>
                    </ul>
                </section>

                {/* How We Use Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. How We Use Information
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Improve app stability and performance</li>
                        <li>Fix bugs and technical issues</li>
                        <li>Enhance user experience</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Third-Party Services
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        The app may use third-party services for analytics and crash reporting.
                        These services collect only anonymous technical information.
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Firebase Analytics</li>
                        <li>Crashlytics (if enabled)</li>
                    </ul>
                    <p className="text-blue-800 mt-2">
                        We do not use advertising SDKs and do not share data for marketing purposes.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Data Security
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We apply reasonable security measures to protect app-related data.
                        However, no system can guarantee complete security.
                        We encourage users to keep their devices up to date.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Your Rights
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        You can control camera permission directly through your device settings.
                        Since we do not collect personal data, there is no personal information stored
                        that needs to be accessed or deleted.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Contact Us
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have any questions about this Privacy Policy or app permissions,
                        please contact us at:
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
