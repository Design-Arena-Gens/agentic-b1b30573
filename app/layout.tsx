import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NHPC Multibagger Thesis (Educational View)',
  description:
    'Educational overview of NHPC Ltd. with entry, target, and stop-loss levels under ₹100, including fundamental and risk analysis.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
