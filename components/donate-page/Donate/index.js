import React from 'react';
import NavBar from '../../shared/NavBar';
import * as S from './styled';

const Donate = () => {
    return (
        <S.DonateContainer>
            <NavBar />
            <S.ContentContainer>donate</S.ContentContainer>
        </S.DonateContainer>
    );
};

export default Donate;
