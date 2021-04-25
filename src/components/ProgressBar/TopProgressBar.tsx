// monitor navigation events and add progress indicators.
import NProgress from "nprogress";
import Router from "next/router";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

/*
show progress on start route change
 note: this is displayed on the already existing page
 */
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

/*
clear progress
 note: progress is cleared on a successful router change
 or a failure router change.
 */
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
