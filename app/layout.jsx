import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <div className="bg-gradient bg-contain bg-repeat bg-bottom max-h-dvh">
          <div className="w-full bg-primary/100 bg-cube h-screen  from-primary/30 via-black/30 to-black/10">
          <Header/>
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
          </div>
        </div>
        
        
      </body>
    </html>
  );
}
