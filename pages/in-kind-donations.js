import Head from 'next/head';
import React from 'react';
import InKindDonations from '../components/in-kind-donations-page/InKindDonations';

const InKindDonationsPage = () => {
    return (
        <>
            <Head>
                <title>In-Kind Donations | The Castle</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <InKindDonations />
        </>
    );
};

export default InKindDonationsPage;
