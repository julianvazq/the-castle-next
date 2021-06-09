import Head from 'next/head';
import Home from '../components/home-page/Home';

export default function HomePage() {
    return (
        <>
            <Head>
                <title>The Castle</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <Home />
        </>
    );
}
