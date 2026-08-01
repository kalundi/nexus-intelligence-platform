import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Healthcare Observatory',
  description: 'Population health and transportation risk insights for executive operations.',
};

export default function ObservatoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
