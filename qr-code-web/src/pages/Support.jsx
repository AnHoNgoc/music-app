const Support = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    An QR Code App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the QR Code Generator & Scanner support page. Here you’ll find
                        helpful information on how to generate and scan QR codes, manage your
                        history, and resolve common issues.
                    </p>
                </section>

                {/* Generating QR Codes */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Generating QR Codes
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        To create a QR code:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Open the app and select the “Generate QR” option.</li>
                        <li>Choose the type of content (URL, text, contact info, etc.).</li>
                        <li>Enter your content and tap the generate button.</li>
                        <li>Download or share your QR code instantly.</li>
                    </ul>
                </section>

                {/* Scanning QR Codes */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Scanning QR Codes
                    </h2>
                    <p className="text-blue-800 leading-relaxed mb-2">
                        To scan a QR code:
                    </p>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Select the “Scan QR” option from the home screen.</li>
                        <li>Allow camera access when prompted.</li>
                        <li>Point your camera at the QR code.</li>
                        <li>The scanned content will appear automatically.</li>
                    </ul>
                </section>

                {/* App Features */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. App Features
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Create QR codes for multiple data types.</li>
                        <li>Fast and accurate QR code scanning.</li>
                        <li>Scan and generation history for easy access.</li>
                        <li>Secure camera usage with user permission.</li>
                        <li>Clean and intuitive interface.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Frequently Asked Questions
                    </h2>
                    <div className="text-blue-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: Why does the app need camera access?</strong></p>
                            <p>A: Camera access is required only to scan QR codes. We do not record or store camera footage.</p>
                        </div>
                        <div>
                            <p><strong>Q: Can I save my generated QR codes?</strong></p>
                            <p>A: Yes, you can download and save QR codes to your device.</p>
                        </div>
                        <div>
                            <p><strong>Q: Is my data stored or tracked?</strong></p>
                            <p>A: No personal data is collected. All generated and scanned data stays on your device.</p>
                        </div>
                        <div>
                            <p><strong>Q: What types of QR codes can I generate?</strong></p>
                            <p>A: You can generate QR codes for URLs, text, contact information, and more.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Contact Support
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you have questions, issues, or feedback, please contact us at{" "}
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
};

export default Support;
