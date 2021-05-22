import Head from 'next/head';
import React from 'react';
import FoundersCircle from '../components/founders-circle-page/FoundersCircle';

const FoundersCirclePage = () => {
    return (
        <>
            <Head>
                <title>Founders Circle | The Castle</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <FoundersCircle />
        </>
    );
};

export default FoundersCirclePage;
