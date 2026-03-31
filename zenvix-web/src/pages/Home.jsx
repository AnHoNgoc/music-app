export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
                Zenvix Music
            </h1>

            {/* Description */}
            <p className="text-center text-blue-800 max-w-xl mb-12">
                Enjoy your favorite music anytime with Zenvix Music. Play songs stored locally on your device,
                no internet connection or account required.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Play Music</h3>
                    <p>Listen to your favorite songs directly from your device with smooth playback.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Local Library</h3>
                    <p>Automatically scan and display music files stored on your device.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Offline Mode</h3>
                    <p>Enjoy music anytime without needing an internet connection.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Simple Controls</h3>
                    <p>Play, pause, skip tracks easily with intuitive controls.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Lightweight & Fast</h3>
                    <p>Optimized for performance with fast loading and smooth experience.</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">No Account Needed</h3>
                    <p>Start listening instantly without signing up or logging in.</p>
                </div>

            </div>
        </div>
    );
}