import type { ComponentType } from "react";
import React from "react";
// import AppTopBar from './components/AppTopBar.tsx'

export default function App({
  Page,
  pageProps,
}: {
  Page: ComponentType<any>;
  pageProps: any;
}) {
  return (
    <main>
      <head>
        <title>Codestar [Aleph]</title>
        {/* This probably just doesn't work because the path does not end with .css.
        Instead, import in index.css
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" /> 
        */}
        <link rel="stylesheet" href="./style/index.css" />
      </head>
      {/* Styling does not work when <AppTopBar /> is loaded in this module? */}
      <Page {...pageProps} />
    </main>
  );
}
