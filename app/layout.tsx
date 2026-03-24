import type {Metadata} from 'next';
import { Playfair_Display, Outfit } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Shine n Glow | Unisex Salon (SNG Bazaar)',
  description: 'Premium Unisex Salon in Chamba & Bhadram. Haircuts, makeup, and beauty services.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} dark`}>
      <body className="bg-[#0a0a0a] text-white font-sans antialiased selection:bg-[#d4af37] selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
