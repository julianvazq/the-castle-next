import React from 'react';
import NavBar from '../NavBar';
import * as S from './style';

const Layout = ({ children }) => {
    return (
        <S.AppContainer>
            <NavBar />
            {children}
        </S.AppContainer>
    );
};

export default Layout;
