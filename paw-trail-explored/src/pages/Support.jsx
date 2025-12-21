const Support = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
                    Paw Trail Explored Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-green-800 leading-relaxed">
                        Welcome to the Paw Trail Explored support page. Here you’ll find
                        helpful guidance on exploring animal content, searching for species,
                        managing your favorites, and staying updated with the latest
                        animal-related news.
                    </p>
                </section>

                {/* Exploring Animals */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        1. Exploring Animals
                    </h2>
                    <p className="text-green-800 leading-relaxed mb-2">
                        To explore animal content:
                    </p>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Open the app and browse the featured or categorized animals.</li>
                        <li>Select an animal to view detailed information and images.</li>
                        <li>Learn about habitats, behavior, and conservation status.</li>
                    </ul>
                </section>

                {/* Searching for Animals */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        2. Searching for Animals
                    </h2>
                    <p className="text-green-800 leading-relaxed mb-2">
                        To search for a specific animal:
                    </p>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Use the search bar on the home or explore screen.</li>
                        <li>Search by animal name, species, or habitat.</li>
                        <li>Tap on a result to view full details.</li>
                    </ul>
                </section>

                {/* Favorites */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        3. Favorites
                    </h2>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Add animals to your favorites for quick access later.</li>
                        <li>View all saved animals in the Favorites section.</li>
                        <li>Remove animals from favorites anytime.</li>
                    </ul>
                </section>

                {/* App Features */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        4. App Features
                    </h2>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Discover animals from around the world.</li>
                        <li>Smart and fast search functionality.</li>
                        <li>Personal favorites collection.</li>
                        <li>Latest news and stories about wildlife.</li>
                        <li>Clean, simple, and user-friendly interface.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        5. Frequently Asked Questions
                    </h2>
                    <div className="text-green-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: Do I need an account to use the app?</strong></p>
                            <p>A: No, Paw Trail Explored can be used without creating an account.</p>
                        </div>
                        <div>
                            <p><strong>Q: Are my favorites saved online?</strong></p>
                            <p>A: Favorites are stored locally on your device and are not shared.</p>
                        </div>
                        <div>
                            <p><strong>Q: Is the animal information accurate?</strong></p>
                            <p>A: We strive to provide accurate and up-to-date information from reliable sources.</p>
                        </div>
                        <div>
                            <p><strong>Q: Does the app track my personal data?</strong></p>
                            <p>A: No personal data is collected or tracked.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        6. Contact Support
                    </h2>
                    <p className="text-green-800 leading-relaxed">
                        If you have questions, issues, or feedback, please contact us at{" "}
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-green-600 underline"
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
