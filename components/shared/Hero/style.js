import styled from 'styled-components';
import { cookieFont } from '../../../styles/shared';

export const Container = styled.section`
    background-image: url('/assets/castle-sm.jpg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 700px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 700px) {
        background-image: url('/assets/castle-lg.jpg');
        background-position: center;
        height: 600px;
        min-height: auto;
    }
`;

export const TitleContainer = styled.div`
    padding: 0 1.5rem;
    margin-bottom: 4rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const InnerContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    color: var(--white);
    margin-bottom: 1rem;
    ${cookieFont};

    @media screen and (min-width: 700px) {
        font-size: 4.5rem;
    }
`;

export const Decoration = styled.img`
    margin: 0 auto;
`;
