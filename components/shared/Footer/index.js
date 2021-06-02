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
];

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <S.StyledFooter id='footer'>
                <MaxWidthContainer>
                    <S.Logo src='/assets/logo.svg' />
                    <S.FlexContainer>
                        <S.LinkContainer>
                            {links.map((link) => (
                                <S.StyledLink key={link.path}>
                                    <Link href={link.path}>
                                        <a>{link.text}</a>
                                    </Link>
                                </S.StyledLink>
                            ))}
                        </S.LinkContainer>
                        <S.LinkContainer>
                            <S.StyledLink>
                                <a href='mailto:theingrams@thecastle603.com'>
                                    theingrams@thecastle603.com
                                </a>
                            </S.StyledLink>
                            <S.StyledLink>
                                <a href='tel:315-863-1114'>315-863-1114</a>
                            </S.StyledLink>
                            <S.StyledLink>
                                <a href='tel:315-450-2771'>315-450-2771</a>
                            </S.StyledLink>
                        </S.LinkContainer>
                    </S.FlexContainer>
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
