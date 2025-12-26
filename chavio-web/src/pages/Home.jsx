export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
                Chavio Chat
            </h1>

            {/* Subtitle */}
            <p className="text-center text-blue-800 max-w-xl mb-12">
                A simple real-time chat app. No friend requests, no waiting —
                just log in and start messaging anyone instantly.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Instant Login</h3>
                    <p>
                        Secure authentication powered by Firebase.
                        Sign in and start chatting in seconds.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">No Friends Required</h3>
                    <p>
                        See all available users immediately.
                        Message anyone without sending friend requests.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Real-Time Messaging</h3>
                    <p>
                        Messages are delivered instantly with real-time updates.
                        Smooth and responsive chat experience.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Push Notifications</h3>
                    <p>
                        Never miss a message.
                        Get notified instantly when someone sends you a chat.
                    </p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Search Users</h3>
                    <p>
                        Quickly find users by name.
                        Start conversations with just one tap.
                    </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Clean & Simple UI</h3>
                    <p>
                        Minimal design focused on chatting.
                        Easy to use, fast, and distraction-free.
                    </p>
                </div>

            </div>
        </div>
    );
}