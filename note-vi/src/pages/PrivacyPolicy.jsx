export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-yellow-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-yellow-900 mb-8 text-center">
                    Privacy Policy
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-yellow-800 leading-relaxed">
                        Welcome to <strong>NoteVi</strong>. Your privacy is very important to us.
                        This Privacy Policy explains how we handle your information when you use
                        our note-taking application.
                    </p>
                </section>

                {/* Data Storage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        1. Data Storage
                    </h2>
                    <p className="text-yellow-800 leading-relaxed">
                        All your notes and reminders are stored locally on your device.
                        NoteVi does not require you to create an account or sign in.
                        Your data remains private and is not uploaded to any server.
                    </p>
                </section>

                {/* How We Use Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        2. How We Use Your Data
                    </h2>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        <li>Display and organize your notes.</li>
                        <li>Enable reminders and notifications for tasks.</li>
                        <li>Allow editing and deleting notes on your device.</li>
                    </ul>
                </section>

                {/* Notifications */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        3. Notifications
                    </h2>
                    <p className="text-yellow-800 leading-relaxed">
                        Push notifications are used only for reminders you set in the app.
                        Notification settings are controlled by your device.
                    </p>
                </section>

                {/* Data Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        4. Data Security
                    </h2>
                    <p className="text-yellow-800 leading-relaxed">
                        Since all data is stored locally on your device, we recommend
                        securing your device with a passcode or biometric lock.
                        NoteVi does not have access to your notes or reminders.
                    </p>
                </section>

                {/* User Rights */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        5. Your Rights
                    </h2>
                    <p className="text-yellow-800 leading-relaxed">
                        You can delete notes or clear all data at any time using the app.
                        Stopping use of NoteVi does not require contacting us since no data is stored externally.
                    </p>
                </section>

                {/* Policy Updates */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        6. Changes to This Policy
                    </h2>
                    <p className="text-yellow-800 leading-relaxed">
                        We may update this Privacy Policy occasionally to improve clarity.
                        Any changes will be reflected in this page.
                    </p>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        7. Contact Us
                    </h2>
                    <p className="text-yellow-800 leading-relaxed">
                        If you have any questions about this Privacy Policy or NoteVi, please contact us at{" "}
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-yellow-600 underline"
                        >
                            anhongoc1306@gmail.com
                        </a>
                        .
                    </p>
                </section>

            </div>
        </div>
    );
}