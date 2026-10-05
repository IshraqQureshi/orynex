import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], display: 'swap', variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap', variable: '--font-geist-mono' });

const title = 'Orynex Technologies — Software & Product Engineering';
const description = 'Orynex designs, builds and scales intelligent digital products for ambitious businesses.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.orynex.tech'),
  title,
  description,
  alternates: { canonical: 'https://www.orynex.tech' },
  openGraph: { title, description, url: 'https://www.orynex.tech', siteName: 'Orynex Technologies', type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export const viewport: Viewport = { themeColor: '#0B1B3A', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "if(!CSS.supports('animation-timeline: view()')&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-reveal')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
