import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EMC² – Customer Centricity in a Digital Era | Case Study',
  description: 'Explore how EMC Corporation transformed its customer strategy through digital transformation, achieving 99% retention rate and scaling customer-centricity in a digital-first world.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 