import styled from 'styled-components';
import { Paragraph, SectionHeader } from '../../../styles/shared';

export const Content = styled.div`
    padding: 3.75rem 1.5rem 4rem;

    @media screen and (min-width: 800px) {
        & ${SectionHeader}, & ${Paragraph} {
            text-align: center;
        }

        & ${Paragraph} {
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`;
