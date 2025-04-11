import Link from 'next/link';
import PageContainer from '@/components/PageContainer';

export default function NotFound() {
  return (
    <PageContainer className="flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">404</h1>
        <h2 className="text-2xl sm:text-3xl text-gray-300">Page Not Found</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
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
    </PageContainer>
  );
} 