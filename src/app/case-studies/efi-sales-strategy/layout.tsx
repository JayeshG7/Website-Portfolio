import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EFI, Inc. – Redesigning Sales Strategy Without Losing Momentum | Case Study',
  description: 'How EFI evolved its sales compensation and organizational model to increase performance, gain customer visibility, and reduce dependency on OEMs—without destabilizing its high-performing team culture.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 