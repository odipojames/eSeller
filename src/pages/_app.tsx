import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import styled, { ThemeProvider } from "styled-components";
import { Footer, Header } from "components/Layout";
import { theme } from "providers/themes";
import "antd/dist/antd.css";
import apolloClient from "gql";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

// add Roboto fonts to the root app
import "../css/main.css";
import "nprogress/nprogress.css";
import store from "../store";

// add navigation progress for ssr purposes
import "../components/ProgressBar/TopProgressBar";

const BodyContainer = styled.div`
  background: ${(props) => props.theme.bodyBackground};
`;


class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps }: any = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <style jsx global>
            {`
              body {
                position: relative;
                margin: 0;
                min-height: 100vh;
              }
            `}
          </style>
          <Provider store={store}>
            <Header />
            <BodyContainer>
              <Component {...pageProps} />
            </BodyContainer>
            <Footer />
          </Provider>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
