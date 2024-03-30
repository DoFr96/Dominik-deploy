import { Roboto } from "next/font/google";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavTestSide from "@/components/NavTestSide";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

export const metadata = {
  title: "Andrej Rupnik",
  description: "Personal trainer",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>
        <main
          className={` sm:max-w-[1280px] mx-auto  overflow-hidden min-h-screen flex flex-col justify-between `}
        >
          <div className="w-full sm:px-16 px-6 flex-grow">
            <NavTestSide />
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
