import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Starbucks – Scaling Service Without Losing Soul | Case Study',
  description: 'Explore how Starbucks balanced rapid expansion with maintaining its premium customer experience, achieving 25% YoY revenue growth while reinvesting in service quality.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 