// COMPONENT THAT RENDERS MANY PAGES

import { AppProps } from "next/app";
import Head from "next/head";
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "src/apollo";
import { AuthProvider } from "src/auth/useAuth";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <AuthProvider>
  <Head>
    <title>Home Lookup</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Component {...pageProps} />;
  </AuthProvider>
  );
}
