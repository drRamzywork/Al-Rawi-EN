import "@/styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Cairo } from "next/font/google";
import "react-spring-bottom-sheet/dist/style.css";
import "@sergeymyssak/swipeable-bottom-sheet/lib/min.css";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900", "1000"],
  style: ["normal"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={` ${cairo.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
