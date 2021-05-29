import { useRouter } from 'next/router';
import React from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import NavBar from '../NavBar';
import * as S from './style';

const Hero = () => {
    const width = useViewportWidth();
    const { pathname } = useRouter();
    const title = getTitle(pathname);

    function getTitle(pathname) {
        switch (pathname) {
            case '/':
                let title = (
                    <>
                        A sophisticated, uniquely styled venue <br /> in
                        Syracuse, NY
                    </>
                );

                if (width && width < 850) {
                    title =
                        'A sophisticated, uniquely styled venue in Syracuse, NY';
                }
                return title;
            case '/founders-circle':
                return 'Founders Circle Levels';
            case '/in-kind-donations':
                return 'In-Kind Donations';
            default:
                throw new Error('No hero title found.');
        }
    }

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
