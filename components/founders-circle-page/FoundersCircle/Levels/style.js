import { BsTriangleFill } from 'react-icons/bs';
import styled from 'styled-components';
import {
    mulishFont,
    SectionHeader,
    uppercase,
} from '../../../../styles/shared';

export const Grid = styled.section`
    max-width: 1400px;
    margin: auto;

    @media screen and (min-width: 800px) {
        margin-bottom: 4rem;
    }

    @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-columns: 4fr 1fr 4fr;
        margin-bottom: 0;
    }
`;

export const GridItem = styled.div`
    grid-column: ${(props) => props.$column};
    padding: ${(props) => props.$content && '4rem 2rem'};
    display: ${(props) => props.$content && 'flex'};
    background: ${(props) => props.$bgColor || ''};
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (min-width: 500px) {
        padding: ${(props) => props.$content && '4rem 5rem'};
    }

    @media screen and (min-width: 1200px) {
        padding: ${(props) => props.$content && '1rem 5rem'};
        background: none;
    }
`;

export const Image = styled.img`
    display: block;
    background: pink;
    width: 100%;

    ${GridItem} & {
        display: none;
    }

    @media screen and (min-width: 600px) {
        ${GridItem} & {
            display: block;
        }
    }

    @media screen and (min-width: 1200px) {
        ${GridItem} & {
            height: auto;
        }
    }
`;

export const Header = styled(SectionHeader)`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const Triangle = styled(BsTriangleFill)`
    margin-right: 1.25rem;
    transform: rotate(90deg);
    color: var(--purple-4);
    font-size: 0.5rem;
    flex: 0 0 8px;
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin: 0.75rem 0;
`;

export const DonorMin = styled.p`
    ${mulishFont}
    color: var(--light-gray);
    margin: 2rem 0 1.25rem;
    font-size: 0.875rem;
    width: 100%;
    text-align: center;

    @media screen and (min-width: 800px) {
        text-align: left;
    }
`;

export const DonateLink = styled.a`
    ${mulishFont}
    ${uppercase}
    font-weight: 700;
    font-size: 0.875rem;
    padding: 0.5rem 1.5rem;
    color: var(--white);
    background: var(--purple-4);
    border: 2px solid var(--purple-4);
    border-radius: 99px;
    margin: 0 auto;

    @media screen and (min-width: 800px) {
        margin: 0;
    }

    @media screen and (min-width: 1200px) {
        color: var(--purple-4);
        background: var(--white);
    }
`;
