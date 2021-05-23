import styled from 'styled-components';

export const DonateContainer = styled.section``;

export const ContentContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    padding: 0 1.5rem;
    margin: 4rem 0;

    @media screen and (min-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4rem;

        &:first-child {
            margin-right: 4rem;
        }
    }
`;

export const Info = styled.div``;
