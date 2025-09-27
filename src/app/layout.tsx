import Layout from '@/components/Layout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOLVIMATE',
  description: 'Building the future of AI',
    icons: {
    icon: '/fav.ico',        // 👈 put your file name here
    shortcut: '/fav.ico',
    apple: '/fav.ico',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
