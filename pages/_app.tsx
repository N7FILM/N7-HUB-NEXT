import "@/styles/globals.css";
import type { AppProps } from "next/app";
import N7Navbar from "../components/N7Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <N7Navbar />
      <Component {...pageProps} />
    </>
  );
}
