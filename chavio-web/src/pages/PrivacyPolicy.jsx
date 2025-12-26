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
                        Welcome to <strong>Chavio App</strong>. Your privacy is important to us.
                        This Privacy Policy explains how we collect, use, and protect your information
                        when you use our real-time chat application.
                    </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Information We Collect
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        To provide chat functionality, Chavio App may collect the following information:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Basic account information from Firebase Authentication (e.g. user ID, display name)</li>
                        <li>Messages you send and receive within the app</li>
                        <li>Usernames used for searching and displaying users</li>
                        <li>Device and app information (app version, platform)</li>
                    </ul>
                </section>

                {/* Authentication */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Authentication
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Chavio App uses Firebase Authentication to securely sign users in.
                        We do not store passwords directly. Authentication data is handled
                        securely by Firebase.
                    </p>
                </section>

                {/* Messaging Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Messages & Chat Data
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Messages you send are stored securely in our database to enable
                        real-time communication. Messages are visible only to the users
                        involved in the conversation.
                    </p>
                </section>

                {/* Push Notifications */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Push Notifications
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We use push notifications to notify you of new messages.
                        Notification tokens are used only for message delivery
                        and are not shared with third parties.
                    </p>
                </section>

                {/* How We Use Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. How We Use Your Information
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Provide real-time messaging features</li>
                        <li>Enable user discovery and search</li>
                        <li>Deliver push notifications</li>
                        <li>Maintain app security and performance</li>
                    </ul>
                </section>

                {/* Third-Party Services */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Third-Party Services
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Chavio App uses Firebase services (Authentication, Database, Notifications)
                        provided by Google. These services process data in accordance with
                        their own privacy policies.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Data Security
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We implement reasonable security measures to protect your data.
                        However, no system is completely secure, and we cannot guarantee
                        absolute security.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        8. Your Rights
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        You may update or delete your account by contacting us.
                        You can stop using the app at any time.
                    </p>
                </section>

                {/* Policy Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        9. Changes to This Policy
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        We may update this Privacy Policy from time to time.
                        Any changes will be posted on this page.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        10. Contact Us
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have any questions about this Privacy Policy or Chavio App,
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
