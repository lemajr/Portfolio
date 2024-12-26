import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"], 
});

export const metadata = {
  title: "Lemajr | Portfolio",
  description: "Showcasing Erick B. Lema's portfolio with a sleek design and cutting-edge technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
