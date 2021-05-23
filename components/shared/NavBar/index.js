import Link from 'next/link';
import React from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import MobileNav from '../MobileNav';
import * as S from './style';

const NavBar = () => {
    const width = useViewportWidth();

    if (width < 800) {
        return <MobileNav />;
    }

    return (
        <S.Nav>
            <S.InnerContainer>
                <S.Logo src='/assets/logo.svg' />
                <S.LinkContainer>
                    <S.RegularLinks>
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                        <Link href='/founders-circle'>
                            <a>Founders Circle</a>
                        </Link>
                        <Link href='in-kind-donations'>
                            <a>In-Kind Donations</a>
                        </Link>
                    </S.RegularLinks>
                    <S.DonateLink>
                        <Link href='/donate'>
                            <a>Donate Now</a>
                        </Link>
                    </S.DonateLink>
                </S.LinkContainer>
            </S.InnerContainer>
        </S.Nav>
    );
};

export default NavBar;
