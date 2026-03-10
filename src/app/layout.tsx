import type { Metadata } from "next";
import { Lora, Montserrat} from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const proximaNova = localFont({
  src: [
    { path: '../fonts/ProximaNova/ReneBook.otf', weight: '400', style: 'normal'},
    { path: '../fonts/ProximaNova/ReneSemiBold.otf', weight: '700', style: 'normal'},
    { path: '../fonts/ProximaNova/ReneBookBlack.otf', weight: '900', style: 'normal'},
  ],
  variable: '--font-proxima'
});

export const metadata: Metadata = {
  title: "Flori",
  description: "Metabolic reset program for women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${proximaNova.variable} ${montserrat.variable} ${lora.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
