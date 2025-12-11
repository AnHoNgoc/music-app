export default function Home() {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 text-center">
                Ride Tracking App
            </h1>

            {/* Description */}
            <p className="text-center text-green-800 max-w-xl mb-12">
                Track your rides in real-time and share your location with nearby users effortlessly.
                See who is around you and stay aware of rides happening nearby.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-green-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
                    <p>See the location of nearby users in real-time on the map.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Simple Sharing</h3>
                    <p>Share your location without needing to create an account or login.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Route Overview</h3>
                    <p>Quickly see your path and how far you’ve traveled.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Privacy Control</h3>
                    <p>Your location is shared only while the app is active, no data is stored permanently.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Notifications</h3>
                    <p>Get alerts about nearby rides or users if you enable notifications.</p>
                </div>

            </div>
        </div>
    );
}