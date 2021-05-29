import Link from 'next/link';
import React from 'react';
import * as S from './style';

const Levels = () => {
    return (
        <S.Grid>
            <S.GridItem $column='1/2' $content $bgColor='var(--purple-2)'>
                <S.Header>Sponsorship Benefits</S.Header>
                <S.List>
                    <S.ListItem>
                        <S.Triangle /> Podium recognition at Grand Opening
                    </S.ListItem>
                    <S.ListItem>
                        <S.Triangle /> Visible recognition at Grand Opening
                    </S.ListItem>
                    <S.ListItem>
                        <S.Triangle /> Visible recognition at all Year One “The
                        Castle” hosted events
                    </S.ListItem>
                    <S.ListItem>
                        <S.Triangle /> Two “The Castle” Platinum level
                        memberships for two years
                    </S.ListItem>
                    <S.ListItem>
                        <S.Triangle /> Private tour of “The Castle” Pre-Grand
                        Opening
                    </S.ListItem>
                </S.List>
                <S.DonorMin>Donor level minimum of 25K</S.DonorMin>
                <Link href='/donate?level=the-castle' passHref>
                    <S.DonateLink>Donate Now</S.DonateLink>
                </Link>
            </S.GridItem>
            <S.GridItem $column='2/-1'>
                <S.Image src='/assets/levels/the-castle-level.png' />
            </S.GridItem>
            <S.GridItem $column='1/3'>
                <S.Image src='/assets/levels/the-palace-level.png' />
            </S.GridItem>
            <S.GridItem $column='3/-1' $content $bgColor='var(--purple-1)'>
                <S.Header>Sponsorship Benefits</S.Header>
                <S.List>
                    <S.ListItem>
                        <S.Triangle /> Visible recognition at Grand Opening
                    </S.ListItem>
                    <S.ListItem>
                        <S.Triangle /> Two “The Castle” Platinum level
                        memberships for one year
                    </S.ListItem>
                    <S.ListItem>
                        <S.Triangle /> Private tour of “The Castle” Pre-Grand
                        Opening
                    </S.ListItem>
                </S.List>
                <S.DonorMin>Donor level minimum of 15K</S.DonorMin>
                <Link href='/donate?level=the-palace' passHref>
                    <S.DonateLink>Donate Now</S.DonateLink>
                </Link>
            </S.GridItem>
            <S.GridItem $column='1/2' $content>
                <S.Header>Sponsorship Benefits</S.Header>
                <S.List>
                    <S.ListItem>
                        <S.Triangle /> Two “The Castle” Platinum level
                        memberships for one year
                    </S.ListItem>
                    <S.ListItem>
                        <S.Triangle /> Private tour of “The Castle” Pre-Grand
                        Opening
                    </S.ListItem>
                </S.List>
                <S.DonorMin>Donor level minimum of 5K</S.DonorMin>
                <Link href='/donate?level=the-chateau' passHref>
                    <S.DonateLink>Donate Now</S.DonateLink>
                </Link>
            </S.GridItem>
            <S.GridItem $column='2/-1'>
                <S.Image src='/assets/levels/the-chateau-level.png' />
            </S.GridItem>
        </S.Grid>
    );
};

export default Levels;
