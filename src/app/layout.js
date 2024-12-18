import localFont from "next/font/local";
import "./globals.css";
import Provider from "./Components/Provider/Provider";
import Main from "./Components/Main";
import DashboardSideBar from "./Components/Dashboard/DashboardSideBar";
import DashboardNavbar from "./Components/Dashboard/DashboardNavbar";
import { ThemeProvider } from "next-themes";
import Footer from "./Components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "EffortEdge",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-[#010313] overflow-x-hidden`}>
        <Provider>
          <ThemeProvider attribute="class">
            <div className="flex items-start">
              <DashboardSideBar />
              <DashboardNavbar />
            </div>
            <Main displayContent={children} />
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
