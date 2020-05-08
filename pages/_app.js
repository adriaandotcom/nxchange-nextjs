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
