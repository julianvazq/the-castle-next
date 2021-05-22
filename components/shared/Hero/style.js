import styled from 'styled-components';
import { cookieFont } from '../../../styles/shared';

export const Container = styled.section`
    /* display: flex;
    flex-direction: column; */
    background-image: url('/assets/castle-sm.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 700px;

    @media screen and (min-width: 700px) {
        background-image: url('/assets/castle-lg.jpg');
        height: 500px;
        min-height: auto;
    }
`;

export const TitleContainer = styled.div`
    margin: 4rem auto;
    padding: 0 1.5rem;
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1; */
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    color: var(--white);
    margin-bottom: 1rem;
    ${cookieFont};
`;

export const Decoration = styled.img`
    margin: 0 auto;
`;
