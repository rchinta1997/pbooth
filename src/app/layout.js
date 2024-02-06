import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Sidenav from "@/components/Sidenav";
const inter = Inter({ subsets: ["latin"] });
// import "/bootstrap/dist/css/bootstrap.css";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"main-background fluid-container"}>
        <div className="row main-container-layout">
          {/* <div className="col-3 col-sm-md-3">
            <Sidenav />
          </div> */}
          <div className="col">{children}</div>
        </div>
      </body>
    </html>
  );
}
