export default function Support() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Spika Voice Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the Spika Voice support page. Here you'll find helpful guidance on using
                        voice-to-text features, managing your saved text, editing, deleting, sharing, and switching
                        between English and Vietnamese.
                    </p>
                </section>

                {/* Recording & Voice-to-Text */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Recording & Voice-to-Text
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        To convert your voice to text:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Open the app and tap the record button.</li>
                        <li>Speak clearly in English or Vietnamese.</li>
                        <li>View your text immediately after recording.</li>
                    </ul>
                </section>

                {/* Managing Text */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Managing Text
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        You can manage your saved text easily:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Text is saved locally on your device for quick access.</li>
                        <li>Edit or correct any text as needed.</li>
                        <li>Delete text entries you no longer need.</li>
                    </ul>
                </section>

                {/* Sharing Text */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Sharing Text
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        To share your text:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Tap the share button on any saved text.</li>
                        <li>Send it via email, messaging apps, or copy to clipboard.</li>
                    </ul>
                </section>

                {/* Language Support */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Language Support
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Switch between English and Vietnamese easily.</li>
                        <li>Accurate transcription in both languages.</li>
                        <li>Record in one language and convert seamlessly.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Frequently Asked Questions
                    </h2>
                    <div className="text-blue-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: Do I need an account to use Spika Voice?</strong></p>
                            <p>A: No, you can use Spika Voice without creating an account.</p>
                        </div>
                        <div>
                            <p><strong>Q: Where is my text stored?</strong></p>
                            <p>A: All text is stored locally on your device, not in the cloud.</p>
                        </div>
                        <div>
                            <p><strong>Q: Can I edit text after recording?</strong></p>
                            <p>A: Yes, you can edit any saved text anytime.</p>
                        </div>
                        <div>
                            <p><strong>Q: Is my personal data tracked?</strong></p>
                            <p>A: No personal data is collected or tracked by the app.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Contact Support
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
};


