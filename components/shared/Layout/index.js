import { useRouter } from 'next/router';
import React from 'react';
import * as S from './style';

const Layout = ({ children }) => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <S.AppContainer>
            {/* <S.HeroContainer showImage={router.pathname !== '/donate'}>
                <NavBar withHeroImage={router.pathname !== '/donate'} />
            </S.HeroContainer> */}
            {children}
        </S.AppContainer>
    );
};

export default Layout;
