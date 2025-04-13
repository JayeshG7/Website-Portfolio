import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cyworld – Redefining Value in a Saturated Social Network | Case Study',
  description: 'How Cyworld navigated the challenges of sustaining revenue growth and user engagement after reaching near-total market penetration in Korea, while evolving its business model in a rapidly shifting digital landscape.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 