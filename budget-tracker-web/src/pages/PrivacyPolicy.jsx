export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the CashLogix Budget Tracker App. Your privacy is important to us.
                        This Privacy Policy explains how information is handled when you use our app.
                        By using CashLogix, you agree to the terms described below.
                    </p>
                </section>

                {/* Data Collection */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Data Collection & Storage
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        CashLogix does not require account registration and does not collect personal
                        information.
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>All financial data (income, expenses, categories, notes) is stored locally on your device.</li>
                        <li>No data is transmitted to external servers.</li>
                        <li>We do not collect names, emails, or identifiers.</li>
                    </ul>
                </section>

                {/* Camera Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Camera Usage
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        The app may request access to your device’s camera solely to scan QR codes
                        related to receipts or products for easier data entry. No photos, videos,
                        or scanned images are stored, shared, or transmitted.
                    </p>
                </section>

                {/* Use of Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. How Your Data Is Used
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Display and organize your financial records within the app.</li>
                        <li>Generate summaries and charts locally on your device.</li>
                        <li>Ensure proper app functionality.</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Third-Party Services
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        CashLogix does not use third-party services for authentication, cloud storage,
                        analytics, or advertising that collect personal user data.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Data Security
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Since all data is stored locally on your device, you are responsible for
                        safeguarding your device. Uninstalling the app or clearing app data may
                        permanently delete your information.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Your Rights
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>View, edit, or delete your data directly within the app.</li>
                        <li>Clear all stored data by uninstalling the app.</li>
                        <li>No personal data is retained by us.</li>
                    </ul>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Contact Us
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have questions about this Privacy Policy, please contact us at:
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
