import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import * as React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
    // @ts-ignore
    return <PlasmicRootProvider Head={Head} skipFonts>
        <Component {...pageProps} />
    </PlasmicRootProvider>;
}
