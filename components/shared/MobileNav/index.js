import Link from 'next/link';
import React, { useState } from 'react';
import * as S from './style';

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    if (open) {
        return (
            <S.OpenNav>
                <S.InnerContainer>
                    <S.Logo src='/assets/logo.svg' />
                    <S.MenuButton onClick={() => setOpen(false)}>
                        <S.Close />
                    </S.MenuButton>
                </S.InnerContainer>
                <S.LinkContainer>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                    <Link href='/founders-circle'>
                        <a>Founders Circle</a>
                    </Link>
                    <Link href='in-kind-donations'>
                        <a>In-Kind Donations</a>
                    </Link>
                </S.LinkContainer>
                <S.DonateLink>
                    <Link href='/donate'>
                        <a>Donate Now</a>
                    </Link>
                </S.DonateLink>
            </S.OpenNav>
        );
    }

    return (
        <S.ClosedNav>
            <S.Logo src='/assets/logo.svg' />
            <S.MenuButton onClick={() => setOpen(true)}>
                <S.Burger />
            </S.MenuButton>
        </S.ClosedNav>
    );
};

export default MobileNav;
