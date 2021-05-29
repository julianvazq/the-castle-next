import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Footer';
import Hero from '../Hero';
import NavBar from '../NavBar';
import * as S from './style';

const Layout = ({ children }) => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <S.AppContainer>
            {router.pathname !== '/donate' ? <Hero title='asd' /> : <NavBar />}
            {children}
            <Footer />
        </S.AppContainer>
    );
};

export default Layout;
