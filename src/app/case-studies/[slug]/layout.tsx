import { Metadata } from 'next';
import { caseStudies } from '@/data/caseStudies';

// Generate static params for all case studies at build time
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const caseStudy = caseStudies.find(cs => cs.slug === params.slug);
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.metaDescription,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.metaDescription,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
} 