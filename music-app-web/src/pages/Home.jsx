export default function Home() {
    return (
        <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 text-center">
                Music Streamer App
            </h1>

            {/* Description */}
            <p className="text-center text-purple-800 max-w-xl mb-12">
                Discover, stream, and share your favorite music anytime, anywhere.
                Create playlists, explore new artists, and enjoy personalized recommendations.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-purple-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Unlimited Streaming</h3>
                    <p>Listen to millions of songs without limits anytime you want.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Create Playlists</h3>
                    <p>Organize your favorite tracks and create personalized playlists.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Discover New Artists</h3>
                    <p>Explore new music and trending artists based on your taste.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Offline Mode</h3>
                    <p>Download songs and enjoy your music even without internet.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">High-Quality Audio</h3>
                    <p>Experience your favorite tracks in crystal-clear sound quality.</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Personalized Recommendations</h3>
                    <p>Get music suggestions tailored to your listening habits.</p>
                </div>

            </div>
        </div>
    );
}