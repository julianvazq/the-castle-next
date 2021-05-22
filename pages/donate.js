import Head from 'next/head';
import React from 'react';
import Donate from '../components/donate-page/Donate';

const DonatePage = () => {
    return (
        <>
            <Head>
                <title>Donate | The Castle</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <Donate />
        </>
    );
};

export default DonatePage;
