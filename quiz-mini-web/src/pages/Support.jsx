const Support = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12 text-left">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">

                {/* Title */}
                <h1 className="text-4xl font-bold text-red-900 mb-8 text-center">
                    An Quiz Mini App Support
                </h1>

                {/* Introduction */}
                <section className="mb-6">
                    <p className="text-red-800 leading-relaxed">
                        Welcome to the Geography Quiz App Support page. Here you can find guidance on how to use the app
                        and get help if you encounter any issues while taking quizzes.
                    </p>
                </section>

                {/* Starting a Quiz */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">1. Starting a Quiz</h2>
                    <p className="text-red-800 leading-relaxed mb-2">
                        To begin a quiz:
                    </p>
                    <ul className="list-disc list-inside text-red-800 space-y-1">
                        <li>Open the app and select a category (Asia, Europe, Africa, or Americas).</li>
                        <li>Choose the quiz you want to play.</li>
                        <li>Read each question carefully and select your answer from the multiple-choice options.</li>
                        <li>Submit your answer to proceed to the next question.</li>
                    </ul>
                </section>

                {/* Viewing Results */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">2. Viewing Results</h2>
                    <p className="text-red-800 leading-relaxed mb-2">
                        After completing a quiz:
                    </p>
                    <ul className="list-disc list-inside text-red-800 space-y-1">
                        <li>You will see your score and which answers were correct or incorrect.</li>
                        <li>You can play the quiz again to improve your score.</li>
                        <li>Try different categories to learn more capitals and challenge yourself.</li>
                    </ul>
                </section>

                {/* App Features */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">3. App Features</h2>
                    <ul className="list-disc list-inside text-red-800 space-y-1">
                        <li>Multiple-choice questions for quick quizzes.</li>
                        <li>Score tracking to monitor your progress.</li>
                        <li>Interactive interface suitable for mobile and desktop.</li>
                        <li>Randomized questions for a fresh experience every time.</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">4. Frequently Asked Questions</h2>
                    <div className="text-red-800 leading-relaxed space-y-3">
                        <div>
                            <p><strong>Q: How do I start a quiz?</strong></p>
                            <p>A: Select a category and then choose a quiz to begin. Follow the prompts to answer questions.</p>
                        </div>
                        <div>
                            <p><strong>Q: Can I retake quizzes?</strong></p>
                            <p>A: Yes, you can replay quizzes as many times as you like to improve your score.</p>
                        </div>
                        <div>
                            <p><strong>Q: How is my score calculated?</strong></p>
                            <p>A: Each correct answer gives you one point. Your final score is displayed at the end of the quiz.</p>
                        </div>
                        <div>
                            <p><strong>Q: Is personal information required?</strong></p>
                            <p>A: No personal information is needed to play the quizzes. The app collects only anonymous usage data.</p>
                        </div>
                    </div>
                </section>

                {/* Contact Support */}
                <section>
                    <h2 className="text-2xl font-semibold text-red-900 mb-3">5. Contact Support</h2>
                    <p className="text-red-800 leading-relaxed">
                        If you have any questions, concerns, or feedback, please reach out to us at:{" "}
                        <a href="mailto:anhongoc1306@gmail.com" className="text-red-600 underline">
                            anhongoc1306@gmail.com
                        </a>
                    </p>
                </section>

            </div>
        </div>
    );
};

export default Support;