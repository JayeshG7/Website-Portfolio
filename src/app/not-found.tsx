import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
        <p className="text-xl text-gray-300">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div>
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 