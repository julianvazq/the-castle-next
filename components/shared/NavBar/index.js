import React from 'react';
import * as S from './style';

const NavBar = () => {
    return (
        <S.Nav>
            <S.InnerContainer>
                <S.Logo></S.Logo>
                <S.LinkContainer>
                    <S.StyledLink href='/'>
                        <a>Home</a>
                    </S.StyledLink>
                    <S.StyledLink href='/founders-circle'>
                        <a>Founders Circle</a>
                    </S.StyledLink>
                    <S.StyledLink href='in-kind-donations'>
                        <a>In-Kind Donations</a>
                    </S.StyledLink>
                    <S.StyledLink href='/donate'>
                        <a>Donate Now</a>
                    </S.StyledLink>
                </S.LinkContainer>
            </S.InnerContainer>
        </S.Nav>
    );
};

export default NavBar;
