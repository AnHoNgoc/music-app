export default function Home() {
    return (
        <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-12">


            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-4 text-center">
                An Quiz Mini App
            </h1>

            {/* Description */}
            <p className="text-center text-yellow-800 max-w-xl mb-12">
                Test your knowledge of world capitals across four continents — Asia, Europe, Africa, and the Americas.
                Challenge yourself, learn geography, and improve your memory with fun interactive quizzes.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-yellow-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">4 Continents</h3>
                    <p>Practice questions from Asia, Europe, Africa, and the Americas.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Capital City Questions</h3>
                    <p>Learn the capital cities of countries around the world.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Multiple-Choice Quiz</h3>
                    <p>Answer structured MCQ questions to test your memory and knowledge.</p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Score Tracking</h3>
                    <p>Track your performance and improve over time.</p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Clean & Simple UI</h3>
                    <p>Easy-to-use interface designed for quick and fun learning.</p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Learn While Playing</h3>
                    <p>Enjoy a mini learning experience while testing your geography skills.</p>
                </div>
            </div>
        </div>
    );
}