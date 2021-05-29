import useViewportWidth from '../../../hooks/useViewportWidth';
import { Paragraph } from '../../../styles/shared';
import Hero from '../../shared/Hero';
import InfoSection from '../../shared/InfoSection';
import * as S from './style';

export default function Home() {
    const width = useViewportWidth();
    let title = (
        <>
            A sophisticated, uniquely styled venue <br /> in Syracuse, NY
        </>
    );

    if (width && width < 850) {
        title = 'A sophisticated, uniquely styled venue in Syracuse, NY';
    }

    return (
        <>
            <Hero title={title} />
            <InfoSection title='The Castle. Bringing the community together.'>
                <S.TextGrid>
                    <Paragraph>
                        The Castle named for its royal like visual appearance
                        will be a one of a kind multi-use facility that will
                        host a variety of community centered activities which
                        provide an arena for professional development, awareness
                        building (jobs, health, nutrition, etc.) and social
                        engagement. This ultra-sophisticated, uniquely styled
                        venue will provide guests an experience that is both
                        elegant and legendary. <br />
                        <span>You are Prince. You are Princess.</span>
                    </Paragraph>
                    <Paragraph>
                        The Castle is in the heart and soul of Syracuse, New
                        York known as the Southside. This primarily residential
                        neighborhood with several commercial corridors is prime
                        for redevelopment. The Castle is a catalyst for an
                        economic renaissance materializing in this Southside
                        neighborhood, an area deemed as having the highest
                        concentration of poverty among Black and Hispanics. The
                        Castle will greatly impact the rejuvenation of this area
                        resulting in economic development, job creation and
                        uplifting social interaction.
                    </Paragraph>
                </S.TextGrid>
            </InfoSection>
        </>
    );
}
