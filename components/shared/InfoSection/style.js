import styled from 'styled-components';
import { Paragraph, SectionHeader } from '../../../styles/shared';

export const Content = styled.div`
    padding: 4rem 1.5rem;

    @media screen and (min-width: 800px) {
        & ${SectionHeader}, & ${Paragraph} {
            text-align: center;
        }

        & ${Paragraph} {
            max-width: 700px;
            margin: 0 auto;
        }
    }
`;
