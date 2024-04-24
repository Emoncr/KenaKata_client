import { Inter, Lato, Quicksand } from "next/font/google";
import "./globals.css";


const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
});

const latoFont = Lato({
  preload: false,
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato"
})


export const metadata = {
  title: "KenaKata Grocery Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quickSand.variable} ${latoFont.variable}`} >
        {children}
      </body>
    </html>
  );
}
