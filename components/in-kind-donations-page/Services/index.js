import React from 'react';
import useViewportWidth from '../../../hooks/useViewportWidth';
import { MaxWidthContainer } from '../../../styles/shared';
import * as S from './style';

const Services = () => {
    const width = useViewportWidth();

    if (width < 700) {
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
                        <p>{s.text}</p>
                    </S.DesktopService>
                ))}
            </S.DesktopServicesContainer>
        </MaxWidthContainer>
    );
};

const services = [
    {
        text: 'Plumbing',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Electrical',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Heating, Ventilation & Air Conditioning',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Insulation',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Wood Refinishing',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Lighting',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Paving',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Construction Materials',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Roofing',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Doors and Windows',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Andio Visual Equipment',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Tables & Chairs',
        src: '/assets/castle-sm.jpg',
    },
    {
        text: 'Flatware & Dinnerware',
        src: '/assets/castle-sm.jpg',
    },
];

export default Services;
