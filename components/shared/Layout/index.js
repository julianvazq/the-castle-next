import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Footer';
import Hero from '../Hero';
import NavBar from '../NavBar';
import NewsletterSignup from '../NewsletterSignup';
import * as S from './style';

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <S.AppContainer>
            <Head>
                <link
                    rel='apple-touch-icon'
                    sizes='76x76'
                    href='/favicon/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon/favicon-16x16.png'
                />
                <link rel='manifest' href='/favicon/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/favicon/safari-pinned-tab.svg'
                    color='#ffffff'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
                <meta
                    name='description'
                    content='The Castle will be a one of a kind multi-use facility that will host a variety of community centered activities which provide an arena for professional development, awareness building (jobs, health, nutrition, etc.) and social engagement. '
                />
                <meta property='og:image' content='/assets/logo.svg' />
            </Head>
            {router.pathname !== '/donate' ? <Hero /> : <NavBar />}
            {children}
            <NewsletterSignup />
            <Footer />
        </S.AppContainer>
    );
};

export default Layout;
