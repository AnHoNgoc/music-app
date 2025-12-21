export default function Home() {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 text-center">
                Paw Trail Explored
            </h1>

            {/* Description */}
            <p className="text-center text-green-800 max-w-xl mb-12">
                Discover the fascinating world of animals. Explore detailed information,
                search for species, save your favorites, and stay up to date with the
                latest news from the animal kingdom.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-green-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Animal Exploration</h3>
                    <p>Explore a wide variety of animals with rich details and images.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
                    <p>Quickly find animals by name, habitat, or unique characteristics.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Favorites Collection</h3>
                    <p>Save your favorite animals and access them anytime.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Latest Animal News</h3>
                    <p>Stay informed with up-to-date news and stories from the animal world.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Wildlife Conservation</h3>
                    <p>Learn about conservation efforts and how to protect wildlife.</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Clean & Friendly UI</h3>
                    <p>A simple, modern interface designed for a smooth user experience.</p>
                </div>

            </div>
        </div>
    );
}
