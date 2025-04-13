import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virgin Mobile USA – Pricing Disruption for a Generation Ignored | Case Study',
  description: 'Discover how Virgin Mobile USA disrupted the mobile market by targeting underserved youth with transparent pricing and cultural relevance, aiming for 1M subscribers in year one.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 