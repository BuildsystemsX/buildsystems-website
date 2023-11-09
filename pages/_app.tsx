import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
    // @ts-ignore
    return <PlasmicRootProvider Head={Head} skipFonts>
        <Head>
            <link rel="icon" href="/black-logo.svg" sizes="any"/>
            <link rel="icon" href="/black-logo.png" sizes="any"/>
            <link rel="apple-touch-icon" href="/black-logo.png"/>
        </Head>
        <Component {...pageProps} />
    </PlasmicRootProvider>;
}
