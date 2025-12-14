export default function Home() {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 text-center">
                An QR Code App
            </h1>

            {/* Description */}
            <p className="text-center text-blue-800 max-w-xl mb-12">
                Create, scan, and manage QR codes easily. Generate QR codes for links,
                text, and more — or instantly scan codes using your device camera.
                Fast, secure, and user-friendly.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">QR Code Generator</h3>
                    <p>Create QR codes for URLs, text, contact info, and more in seconds.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">QR Code Scanner</h3>
                    <p>Scan QR codes instantly using your camera with fast detection.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Camera Permission Safe</h3>
                    <p>Your camera is only used for scanning QR codes securely.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Download & Share</h3>
                    <p>Save generated QR codes and share them easily with others.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">History Tracking</h3>
                    <p>View previously scanned and generated QR codes anytime.</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Clean & Simple UI</h3>
                    <p>Minimal design focused on speed, clarity, and ease of use.</p>
                </div>

            </div>
        </div>
    );
}