import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dolby Laboratories – Entering Broadcast with Precision | Case Study',
  description: 'Case study of how Dolby Laboratories strategically positioned and priced its LM100 Broadcast Loudness Meter to solve widespread audio issues while building a scalable foothold in the fragmented broadcast market.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 