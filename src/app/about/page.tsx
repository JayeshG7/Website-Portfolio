export default function About() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            I'm a passionate developer with expertise in building modern web applications.
            My journey in tech started with...
          </p>
          {/* Add more sections as needed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              {/* Add experience details */}
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              {/* Add education details */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
