export default function Support() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    Zenvix Music Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the Zenvix Music support page. This app allows you to listen to music
                        stored locally on your device without requiring an internet connection.
                    </p>
                </section>

                {/* Playing Music */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Playing Music
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Open the app to view your music library.</li>
                        <li>Tap any song to start playing.</li>
                        <li>Use controls to pause, play, or skip tracks.</li>
                    </ul>
                </section>

                {/* Music Library */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Music Library
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>The app automatically reads music files from your device.</li>
                        <li>You can browse songs by folder or list.</li>
                        <li>Only audio files stored locally are displayed.</li>
                    </ul>
                </section>

                {/* Controls */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Playback Controls
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Play / Pause music anytime.</li>
                        <li>Skip to next or previous song.</li>
                        <li>Adjust volume using your device controls.</li>
                    </ul>
                </section>

                {/* Offline Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Offline Usage
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        Zenvix Music works completely offline. No internet connection is required to play your music.
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Frequently Asked Questions
                    </h2>
                    <div className="text-blue-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: Do I need internet to use the app?</strong></p>
                            <p>A: No, the app works fully offline.</p>
                        </div>
                        <div>
                            <p><strong>Q: Where are my songs stored?</strong></p>
                            <p>A: All songs are stored on your device.</p>
                        </div>
                        <div>
                            <p><strong>Q: Does the app collect my data?</strong></p>
                            <p>A: No, we do not collect or track any personal data.</p>
                        </div>
                        <div>
                            <p><strong>Q: Why can't I see my songs?</strong></p>
                            <p>A: Please make sure you have granted file access permission to the app.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Contact Support
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have questions or issues, please contact us at{" "}
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
