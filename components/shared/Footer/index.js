import Link from 'next/link';
import React from 'react';
import { MaxWidthContainer } from '../../../styles/shared';
import * as S from './style';

const links = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/founders-circle',
        text: 'Founders Circle',
    },
    {
        path: '/in-kind-donations',
        text: 'In-Kind Donations',
    },
    {
        path: '/contact',
        text: 'Contact Us',
    },
];

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <S.StyledFooter>
                <MaxWidthContainer>
                    <S.Logo src='/assets/logo.svg' />
                    <S.LinkContainer>
                        {links.map((link) => (
                            <S.StyledLink key={link.path}>
                                <Link href={link.path}>
                                    <a>{link.text}</a>
                                </Link>
                            </S.StyledLink>
                        ))}
                    </S.LinkContainer>
                    <S.SocialMediaLinks>
                        <li>
                            <a
                                href='https://www.instagram.com/thecastle603/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.Instagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.linkedin.com/company/the-castle-603'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.LinkedIn />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://twitter.com/thecastle603'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.Twitter />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.facebook.com/thecastle603'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <S.Facebook />
                            </a>
                        </li>
                    </S.SocialMediaLinks>
                </MaxWidthContainer>
            </S.StyledFooter>
            <S.Copyright>
                &#169; {year} Simply Ingram, LLC. All rights reserved.
            </S.Copyright>
        </>
    );
};

export default Footer;
