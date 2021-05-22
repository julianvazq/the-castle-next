import styled from 'styled-components';
import { Paragraph } from '../../../styles/shared';

export const TextGrid = styled.div`
    @media screen and (min-width: 800px) {
        display: flex;

        & > ${Paragraph} {
            text-align: left !important;
        }

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
