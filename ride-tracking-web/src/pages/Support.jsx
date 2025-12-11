const Support = () => {
    return (
        <div className="min-h-screen bg-green-50 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-green-900 mb-8 text-center">
                    Ride Tracking App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-green-800 leading-relaxed">
                        Welcome to the Ride Tracking App Support page. Here you can find help
                        on using the app to track your rides in real-time, share your location temporarily,
                        and stay aware of nearby rides safely.
                    </p>
                </section>

                {/* Real-Time Tracking */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        1. Real-Time Tracking
                    </h2>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Open the app to start sharing your location in real-time.</li>
                        <li>Nearby users’ locations are visible on the map while the app is active.</li>
                        <li>Location sharing stops automatically when you close the app.</li>
                    </ul>
                </section>

                {/* Viewing Rides */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        2. Viewing Rides
                    </h2>
                    <ul className="list-disc list-inside text-green-800 space-y-1">
                        <li>Observe nearby rides and paths in real-time on the map.</li>
                        <li>Optionally review your own ride path if history tracking is enabled.</li>
                        <li>Stay aware of movements in your vicinity for safety and convenience.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        3. Frequently Asked Questions
                    </h2>
                    <div className="text-green-800 leading-relaxed space-y-3">

                        <div>
                            <p><strong>Q: Do I need an account to use the app?</strong></p>
                            <p>A: No, the app works without registration. Simply open it to start sharing your location.</p>
                        </div>

                        <div>
                            <p><strong>Q: Can others track me when the app is closed?</strong></p>
                            <p>A: No, location sharing is active only while the app is open.</p>
                        </div>

                        <div>
                            <p><strong>Q: Is my ride history saved?</strong></p>
                            <p>A: Depending on settings, you can optionally review your past rides. No data is stored permanently without your consent.</p>
                        </div>

                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-green-900 mb-3">
                        4. Contact Support
                    </h2>
                    <p className="text-green-800 leading-relaxed">
                        If you need further assistance, contact us at:
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-green-600 underline ml-1"
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