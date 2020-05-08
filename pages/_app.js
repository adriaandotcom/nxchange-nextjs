import React from "react";
import App from "next/app";
import { appWithTranslation } from "../initializers/i18n";
import "../styles/global.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default appWithTranslation(MyApp);

// import React from "react";
// import App from "next/app";
// import { appWithTranslation } from "../initializers/i18n";
// import "../styles/global.css";

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   console.log("appProps", appProps);
//   return { ...appProps };
// };

// export default appWithTranslation(MyApp);
