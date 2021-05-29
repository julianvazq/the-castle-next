import React from 'react';
import NavBar from '../NavBar';
import * as S from './style';

const Hero = ({ title }) => {
    return (
        <S.Container>
            <NavBar withHeroImage />
            <S.TitleContainer>
                <S.Title>{title}</S.Title>
                <S.Decoration
                    src='/assets/decoration.svg'
                    alt='Decorative element.'
                />
            </S.TitleContainer>
        </S.Container>
    );
};

export default Hero;
