import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../Footer';
import * as S from './style';

const Layout = ({ children }) => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <S.AppContainer>
            {children}
            <Footer />
        </S.AppContainer>
    );
};

export default Layout;
