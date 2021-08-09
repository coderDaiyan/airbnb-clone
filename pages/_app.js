import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import "tailwindcss/tailwind.css";
import "../styles/global.css";

const progress = new ProgressBar({
  size: 5,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
