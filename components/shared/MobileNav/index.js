import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import * as S from './style';

const MobileNav = ({ withHeroImage }) => {
    const [open, setOpen] = useState(false);
    const { pathname } = useRouter();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const onLinkClick = (clickedPath) => {
        if (clickedPath === pathname) {
            setOpen(false);
        }
    };

    if (open) {
        return (
            <S.OpenNav>
                <S.InnerContainer>
                    <Link href='/'>
                        <a>
                            <S.Logo src='/assets/logo.svg' />
                        </a>
                    </Link>
                    <S.MenuButton onClick={() => setOpen(false)}>
                        <S.Close />
                    </S.MenuButton>
                </S.InnerContainer>
                <S.LinkContainer>
                    <Link href='/'>
                        <a onClick={() => onLinkClick('/')}>Home</a>
                    </Link>
                    <Link href='/founders-circle'>
                        <a onClick={() => onLinkClick('/founders-circle')}>
                            Founders Circle
                        </a>
                    </Link>
                    <Link href='/in-kind-donations'>
                        <a onClick={() => onLinkClick('/in-kind-donations')}>
                            In-Kind Donations
                        </a>
                    </Link>
                </S.LinkContainer>
                <S.DonateLink>
                    <Link href='/donate'>
                        <a onClick={() => onLinkClick('/donate')}>Donate Now</a>
                    </Link>
                </S.DonateLink>
            </S.OpenNav>
        );
    }

    return (
        <S.ClosedNav>
            {withHeroImage ? (
                <Link href='/'>
                    <a>
                        <S.Logo src='/assets/logo-white.svg' />
                    </a>
                </Link>
            ) : (
                <Link href='/'>
                    <a>
                        <S.Logo src='/assets/logo.svg' />
                    </a>
                </Link>
            )}
            <S.MenuButton onClick={() => setOpen(true)}>
                <S.Burger $dark={!withHeroImage} />
            </S.MenuButton>
        </S.ClosedNav>
    );
};

export default MobileNav;
