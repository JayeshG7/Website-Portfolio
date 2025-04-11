type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`relative w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 ${className}`}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 
