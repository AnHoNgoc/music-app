export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
                Spika Voice
            </h1>

            {/* Description */}
            <p className="text-center text-blue-800 max-w-xl mb-12">
                Convert your voice into text quickly and accurately. Supports both English and Vietnamese,
                allows local storage, easy editing, deleting, and sharing of your text.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Voice-to-Text</h3>
                    <p>Record your voice and instantly convert it to text in English or Vietnamese.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Local Storage</h3>
                    <p>All your text is saved directly on your device, no internet connection required.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Edit & Delete</h3>
                    <p>Easily edit or delete any generated text to manage your content efficiently.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Share Text</h3>
                    <p>Quickly share your text to other apps or send it to friends.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Bilingual Support</h3>
                    <p>Switch seamlessly between English and Vietnamese with accurate transcription.</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">User-Friendly Interface</h3>
                    <p>A modern, clean design focused on a smooth voice recording and text reading experience.</p>
                </div>

            </div>
        </div>
    );
}