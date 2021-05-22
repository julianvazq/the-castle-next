import styled from 'styled-components';

export const Content = styled.div`
    padding: 4rem 1.5rem;
`;

export const TextGrid = styled.div`
    @media screen and (min-width: 800px) {
        display: flex;

        & > p:first-child {
            margin-bottom: 0;
            margin-right: 4rem;
            flex-basis: 45%;
        }
        & > p:nth-child(2) {
            flex-basis: 55%;
        }
    }
`;
