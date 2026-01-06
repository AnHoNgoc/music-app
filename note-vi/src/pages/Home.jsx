export default function Home() {
    return (
        <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center px-4 py-12">

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-4 text-center">
                NoteVi App
            </h1>

            {/* Subtitle */}
            <p className="text-center text-yellow-800 max-w-xl mb-12">
                A smart note-taking app. Create, edit, and organize your notes effortlessly.
                Set reminders and never miss an important task again.
            </p>

            {/* Features */}
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-yellow-900">

                {/* Feature 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Create & Edit Notes</h3>
                    <p>
                        Quickly jot down ideas or detailed notes.
                        Edit anytime to keep your thoughts organized.
                    </p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Delete Notes</h3>
                    <p>
                        Easily remove old or unwanted notes.
                        Keep your workspace clean and clutter-free.
                    </p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Sort by Latest</h3>
                    <p>
                        Your most recent notes appear at the top.
                        Always access your latest thoughts instantly.
                    </p>
                </div>

                {/* Feature 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Reminders & Notifications</h3>
                    <p>
                        Set reminders for your notes.
                        Receive notifications so you never forget an important task.
                    </p>
                </div>

                {/* Feature 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Organize Efficiently</h3>
                    <p>
                        Categorize and manage your notes.
                        Keep everything neatly structured and easy to find.
                    </p>
                </div>

                {/* Feature 6 */}
                <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                    <h3 className="text-xl font-semibold mb-2">Clean & Simple UI</h3>
                    <p>
                        Minimal design focused on productivity.
                        Fast, intuitive, and distraction-free note-taking.
                    </p>
                </div>

            </div>
        </div>
    );
}