import type { ReactNode } from "react";
import { Playfair_Display, DM_Mono, Caveat } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["400", "500"],
  display: "swap",
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "600"],
  display: "swap",
});

export const metadata = {
  title: "The Road Is The Destination",
  description: "A cinematic road trip travel experience",
};

export default function RoadtripLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${playfair.variable} ${dmMono.variable} ${caveat.variable}`}>
      {children}
    </div>
  );
}
