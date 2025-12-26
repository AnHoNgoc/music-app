export default function Support() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Chavio App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the Chavio Chat support page. Here you can find guidance on
                        signing in, finding users, sending messages, receiving notifications,
                        and resolving common issues.
                    </p>
                </section>

                {/* Sign In */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Sign In & Account
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Chavio Chat uses Firebase Authentication for secure sign-in.</li>
                        <li>You only need to sign in once to start chatting.</li>
                        <li>No friend requests or approvals are required.</li>
                    </ul>
                </section>

                {/* Find Users */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Finding Users
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>After signing in, you will see a list of available users.</li>
                        <li>Use the search bar to find users by their display name.</li>
                        <li>Tap on any user to start a conversation instantly.</li>
                    </ul>
                </section>

                {/* Messaging */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Sending & Receiving Messages
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Send messages in real time to any user.</li>
                        <li>Messages appear instantly in the chat screen.</li>
                        <li>Only you and the recipient can see your conversation.</li>
                    </ul>
                </section>

                {/* Push Notifications */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Push Notifications
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Enable notifications to receive alerts for new messages.</li>
                        <li>Notifications are sent only for chat-related activity.</li>
                        <li>You can manage notification permissions in your device settings.</li>
                    </ul>
                </section>

                {/* Privacy & Safety */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Privacy & Safety
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Your messages are stored securely to enable real-time chat.</li>
                        <li>No advertising or data selling is involved.</li>
                        <li>We do not display personal contact information publicly.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Frequently Asked Questions
                    </h2>
                    <div className="text-blue-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: Do I need to add friends to chat?</strong></p>
                            <p>A: No. You can message any available user without adding friends.</p>
                        </div>
                        <div>
                            <p><strong>Q: Can everyone see my messages?</strong></p>
                            <p>A: No. Messages are visible only to you and the recipient.</p>
                        </div>
                        <div>
                            <p><strong>Q: Why am I not receiving notifications?</strong></p>
                            <p>A: Please check notification permissions in your device settings.</p>
                        </div>
                        <div>
                            <p><strong>Q: Can I delete my account?</strong></p>
                            <p>A: Yes. Please contact support for account removal requests.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        7. Contact Support
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have questions, issues, or feedback, please contact us at{" "}
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-blue-600 underline"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}