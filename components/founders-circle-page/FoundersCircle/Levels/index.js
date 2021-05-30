import Link from 'next/link';
import React from 'react';
import useViewportWidth from '../../../../hooks/useViewportWidth';
import * as S from './style';

const Levels = () => {
    const width = useViewportWidth();

    if (width && width < 1200) {
        return (
            <S.Grid>
                <S.GridItem $column='2/-1'>
                    <S.Image
                        src='/assets/levels/the-castle-level-sm.png'
                        alt='The Castle.'
                    />
                </S.GridItem>
                <S.GridItem $column='1/2' $content $bgColor='var(--purple-2)'>
                    <S.Header>The Castle</S.Header>
                    <S.List>
                        <S.ListItem>
                            <S.Triangle /> Podium recognition at Grand Opening
                        </S.ListItem>
                        <S.ListItem>
                            <S.Triangle /> Visible recognition at Grand Opening
                        </S.ListItem>
                        <S.ListItem>
                            <S.Triangle /> Visible recognition at all Year One
                            “The Castle” hosted events
                        </S.ListItem>
                        <S.ListItem>
                            <S.Triangle /> Two “The Castle” Platinum level
                            memberships for two years
                        </S.ListItem>
                        <S.ListItem>
                            <S.Triangle /> Private tour of “The Castle”
                            Pre-Grand Opening
                        </S.ListItem>
                    </S.List>
                    <S.DonorMin>Donor level minimum of 25K</S.DonorMin>
                    <Link href='/donate?level=the-castle' passHref>
                        <S.DonateLink>Donate Now</S.DonateLink>
                    </Link>
                </S.GridItem>
                <S.GridItem $column='1/3'>
                    <S.Image
                        src='/assets/levels/the-palace-level-sm.png'
                        alt='The Palace.'
                    />
                </S.GridItem>
                <S.GridItem $column='3/-1' $content $bgColor='var(--purple-1)'>
                    <S.Header>The Palace</S.Header>
                    <S.List>
                        <S.ListItem>
                            <S.Triangle /> Visible recognition at Grand Opening
                        </S.ListItem>
                        <S.ListItem>
                            <S.Triangle /> Two “The Castle” Platinum level
                            memberships for one year
                        </S.ListItem>
                        <S.ListItem>
                            <S.Triangle /> Private tour of “The Castle”
                            Pre-Grand Opening
                        </S.ListItem>
                    </S.List>
                    <S.DonorMin>Donor level minimum of 15K</S.DonorMin>
                    <Link href='/donate?level=the-palace' passHref>
                        <S.DonateLink>Donate Now</S.DonateLink>
                    </Link>
                </S.GridItem>
                <S.GridItem $column='2/-1'>
                    <S.Image
                        src='/assets/levels/the-chateau-level-sm.png'
                        alt='The Chateau.'
                    />
                </S.GridItem>
                <S.GridItem $column='1/2' $content>
                    <S.Header>The Chateau</S.Header>
                    <S.List>
                        <S.ListItem>
                            <S.Triangle /> Two “The Castle” Platinum level
                            memberships for one year
                        </S.ListItem>
                        <S.ListItem>
                            <S.Triangle /> Private tour of “The Castle”
                            Pre-Grand Opening
                        </S.ListItem>
                    </S.List>
                    <S.DonorMin>Donor level minimum of 5K</S.DonorMin>
                    <Link href='/donate?level=the-chateau' passHref>
                        <S.DonateLink>Donate Now</S.DonateLink>
                    </Link>
                </S.GridItem>
            </S.Grid>
        );
    }

    return (
        <S.Grid>
            <S.GridItem $column='1/2' $content $bgColor='var(--purple-2)'>
                <S.Header>
                    {width && width < 850
                        ? 'The Castle'
                        : 'Sponsorship Benefits'}
                </S.Header>
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
                <S.Image
                    src='/assets/levels/the-castle-level.png'
                    alt='The Castle.'
                />
            </S.GridItem>
            <S.GridItem $column='1/3'>
                <S.Image
                    src='/assets/levels/the-palace-level.png'
                    alt='The Palace.'
                />
            </S.GridItem>
            <S.GridItem $column='3/-1' $content $bgColor='var(--purple-1)'>
                <S.Header>
                    {' '}
                    {width && width < 850
                        ? 'The Palace'
                        : 'Sponsorship Benefits'}
                </S.Header>
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
                <S.Header>
                    {' '}
                    {width && width < 850
                        ? 'The Chateau'
                        : 'Sponsorship Benefits'}
                </S.Header>
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
                <S.Image
                    src='/assets/levels/the-chateau-level.png'
                    alt='The Chateau.'
                />
            </S.GridItem>
        </S.Grid>
    );
};

export default Levels;
