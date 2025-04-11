type Props = {
    params: {
      slug: string;
    };
  };
  
  export default function CaseStudy({ params }: Props) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Case Study: {params.slug}</h1>
          <div className="aspect-video relative mb-8">
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-lg" />
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              {/* Add case study content */}
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
              {/* Add challenge content */}
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              {/* Add solution content */}
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">Results</h2>
              {/* Add results content */}
            </section>
          </div>
        </article>
      </div>
      
    );
  } 