export default function Support() {
    return (
        <div className="min-h-screen bg-yellow-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-yellow-900 mb-8 text-center">
                    NoteVi Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-yellow-800 leading-relaxed">
                        Welcome to the NoteVi support page. Here you can find guidance on
                        creating, editing, deleting notes, setting reminders, and organizing
                        your notes efficiently.
                    </p>
                </section>

                {/* Creating Notes */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        1. Creating & Editing Notes
                    </h2>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        <li>Tap the “New Note” button to create a note instantly.</li>
                        <li>Edit any note by selecting it and updating your content.</li>
                        <li>Changes are saved automatically so you never lose your work.</li>
                    </ul>
                </section>

                {/* Deleting Notes */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        2. Deleting Notes
                    </h2>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        <li>Swipe or select a note to delete it.</li>
                        <li>Deleted notes are removed permanently, so double-check before deleting.</li>
                    </ul>
                </section>

                {/* Sorting Notes */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        3. Sorting Notes
                    </h2>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        <li>Notes are automatically sorted by latest first.</li>
                        <li>You can also organize them manually by categories or tags.</li>
                    </ul>
                </section>

                {/* Reminders & Notifications */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        4. Reminders & Notifications
                    </h2>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        <li>Set reminders for any note to get notified at the right time.</li>
                        <li>Notifications ensure you never forget important tasks.</li>
                        <li>You can manage reminder permissions in your device settings.</li>
                    </ul>
                </section>

                {/* Privacy & Security */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        5. Privacy & Security
                    </h2>
                    <ul className="list-disc list-inside text-yellow-800 space-y-1">
                        <li>All notes are stored securely on your device or cloud.</li>
                        <li>We respect your privacy — no ads or data selling.</li>
                        <li>You can protect notes with a passcode for extra security.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        6. Frequently Asked Questions
                    </h2>
                    <div className="text-yellow-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: Can I set reminders for multiple notes?</strong></p>
                            <p>A: Yes. Each note can have its own reminder with notifications.</p>
                        </div>
                        <div>
                            <p><strong>Q: How are notes organized?</strong></p>
                            <p>A: Notes are sorted by latest first, and you can categorize or tag them.</p>
                        </div>
                        <div>
                            <p><strong>Q: Can I recover deleted notes?</strong></p>
                            <p>A: Deleted notes are permanent. Make sure to back up important notes.</p>
                        </div>
                        <div>
                            <p><strong>Q: Is my data secure?</strong></p>
                            <p>A: Yes. Notes are stored securely and not shared with third parties.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-yellow-900 mb-3">
                        7. Contact Support
                    </h2>
                    <p className="text-yellow-800 leading-relaxed">
                        If you have questions, issues, or feedback, please contact us at{" "}
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-yellow-600 underline"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
}