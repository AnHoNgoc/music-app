const Support = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
                    CashLogix App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-blue-800 leading-relaxed">
                        Welcome to the CashLogix App Support page. CashLogix helps you track
                        your income, expenses, and budgets easily — all stored locally on
                        your device for full privacy and control.
                    </p>
                </section>

                {/* Local Storage Info */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        1. Data Storage & Privacy
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>CashLogix does not require account registration or login.</li>
                        <li>All financial data is stored locally on your device.</li>
                        <li>Your data is never uploaded to any server.</li>
                        <li>Deleting the app may permanently remove your data.</li>
                    </ul>
                </section>

                {/* Managing Income & Expenses */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        2. Managing Income & Expenses
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Add income and expense records with amount, date, and category.</li>
                        <li>Edit or delete entries at any time.</li>
                        <li>Use categories and labels to keep transactions organized.</li>
                    </ul>
                </section>

                {/* Budget & Reports */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        3. Budget & Reports
                    </h2>
                    <ul className="list-disc list-inside text-blue-800 space-y-1">
                        <li>Create monthly budgets for different categories.</li>
                        <li>Monitor spending against your set limits.</li>
                        <li>View summaries and reports directly in the app.</li>
                    </ul>
                </section>

                {/* Camera Usage */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        4. Camera Usage
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        CashLogix may request access to your device's camera only to scan
                        QR codes related to receipts or products. This helps you quickly
                        update your financial records. No images or videos are stored,
                        saved, or shared.
                    </p>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        5. Frequently Asked Questions
                    </h2>
                    <div className="text-blue-800 leading-relaxed space-y-3">

                        <div>
                            <p><strong>Q: Do I need to create an account?</strong></p>
                            <p>A: No. CashLogix works without accounts and stores data locally.</p>
                        </div>

                        <div>
                            <p><strong>Q: What happens if I change devices?</strong></p>
                            <p>A: Your data will not transfer automatically and will stay on the original device.</p>
                        </div>

                        <div>
                            <p><strong>Q: Will I lose my data if I uninstall the app?</strong></p>
                            <p>A: Yes. Uninstalling the app may permanently delete all stored data.</p>
                        </div>

                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-900 mb-3">
                        6. Contact Support
                    </h2>
                    <p className="text-blue-800 leading-relaxed">
                        If you need further assistance, please contact us at:
                        <a
                            href="mailto:anhongoc1306@gmail.com"
                            className="text-blue-600 underline ml-1"
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
