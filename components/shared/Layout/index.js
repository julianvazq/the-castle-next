import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Footer';
import Hero from '../Hero';
import NavBar from '../NavBar';
import * as S from './style';

const Layout = ({ children }) => {
    const router = useRouter();
    return (
        <S.AppContainer>
            {router.pathname !== '/donate' ? <Hero /> : <NavBar />}
            {children}
            <Footer />
        </S.AppContainer>
    );
};

export default Layout;
