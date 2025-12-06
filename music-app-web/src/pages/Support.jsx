const Support = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-purple-900 mb-8 text-center">
                    Music App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-purple-800 leading-relaxed">
                        Welcome to the Music Streamer App Support page. Here you can find help
                        on discovering music, managing playlists, and enjoying your favorite tracks online.
                    </p>
                </section>

                {/* Account Registration & Login */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        1. Account Registration & Login
                    </h2>
                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Create an account using your email or social login.</li>
                        <li>Login to access your playlists and preferences from any device.</li>
                        <li>Your listening history and favorites are securely synced to your account.</li>
                    </ul>
                </section>

                {/* Managing Playlists & Favorites */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        2. Managing Playlists & Favorites
                    </h2>
                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Create, edit, and delete your playlists easily.</li>
                        <li>Add songs to favorites to access them quickly anytime.</li>
                        <li>Organize your music by genre, mood, or custom tags.</li>
                    </ul>
                </section>

                {/* Streaming */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        3. Streaming
                    </h2>
                    <ul className="list-disc list-inside text-purple-800 space-y-1">
                        <li>Stream music online with high-quality audio.</li>
                        <li>Enjoy uninterrupted playback on multiple devices while connected to the internet.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        4. Frequently Asked Questions
                    </h2>
                    <div className="text-purple-800 leading-relaxed space-y-3">

                        <div>
                            <p><strong>Q: How do I create a playlist?</strong></p>
                            <p>A: Go to "My Playlists" and click "Create New Playlist".</p>
                        </div>

                        <div>
                            <p><strong>Q: Can I listen offline?</strong></p>
                            <p>A: No, all music streaming requires an active internet connection.</p>
                        </div>

                        <div>
                            <p><strong>Q: How can I discover new music?</strong></p>
                            <p>A: Use the "Discover" or "Trending" sections for personalized recommendations.</p>
                        </div>

                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-purple-900 mb-3">
                        5. Contact Support
                    </h2>
                    <p className="text-purple-800 leading-relaxed">
                        If you need further assistance, contact us at:
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-purple-600 underline ml-1"
                        >
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
};

export default Support;
