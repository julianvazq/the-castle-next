import React from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import { MaxWidthContainer } from '../../../styles/shared';
import * as S from './style';

const Services = () => {
    const width = useViewportWidth();

    if (width < 600) {
        return (
            <S.MobileServicesContainer>
                {services.map((s) => (
                    <S.MobileService key={s.text}>{s.text}</S.MobileService>
                ))}
            </S.MobileServicesContainer>
        );
    }

    return (
        <MaxWidthContainer>
            <S.DesktopServicesContainer>
                {services.map((s) => (
                    <S.DesktopService key={s.text}>
                        <img src={s.src} alt={`Service: ${s.text} `} />
                        <figcaption>{s.text}</figcaption>
                    </S.DesktopService>
                ))}
            </S.DesktopServicesContainer>
        </MaxWidthContainer>
    );
};

const services = [
    {
        text: 'Plumbing',
        src: '/assets/services/plumbing.jpg',
    },
    {
        text: 'Electrical',
        src: '/assets/services/electrical.jpg',
    },
    {
        text: 'Heating, Ventilation & Air Conditioning',
        src: '/assets/services/ventilation.jpeg',
    },
    {
        text: 'Insulation',
        src: '/assets/services/insulation.jpg',
    },
    {
        text: 'Wood Refinishing',
        src: '/assets/services/wood.jpeg',
    },
    {
        text: 'Lighting',
        src: '/assets/services/lighting.jpg',
    },
    {
        text: 'Paving',
        src: '',
    },
    {
        text: 'Landscape',
        src: '/assets/services/grass.jpeg',
    },
    {
        text: 'Construction Materials',
        src: '/assets/services/materials.jpg',
    },
    {
        text: 'Roofing',
        src: '/assets/services/roofing.jpg',
    },
    {
        text: 'Doors and Windows',
        src: '/assets/services/door.jpg',
    },
    {
        text: 'Andio Visual Equipment',
        src: '/assets/services/audio.jpg',
    },
    {
        text: 'Tables & Chairs',
        src: '/assets/services/chairs.jpg',
    },
    {
        text: 'Flatware & Dinnerware',
        src: '/assets/services/plates.jpg',
    },
];

export default Services;
