import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import styled, { css } from 'styled-components';
import { mulishFont, uppercase } from '../../../styles/shared';

export const StyledFooter = styled.footer`
    padding: 2rem 1.5rem;
    background: var(--purple-2);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    margin: 0 auto;
    margin-bottom: 2rem;
`;

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    & > *:first-child {
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 425px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & > * {
            width: 48%;
        }

        & > *:first-child {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 600px) {
        flex-direction: column;

        & > * {
            width: auto;
        }

        & > *:first-child {
            margin-bottom: 1rem;
        }
    }
`;

export const LinkContainer = styled.ul`
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 0.5rem;
    position: relative;

    &:first-of-type {
        border-bottom: 1px solid var(--purple-3);
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 425px) {
        &:first-of-type {
            border-bottom: none;
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 600px) {
        display: flex;
        justify-content: center;
        grid-column-gap: 0;
        grid-row-gap: 0;

        & > * + * {
            margin-left: 2rem;
        }

        &:first-of-type {
            border-bottom: 1px solid var(--purple-3);
            padding-bottom: 1rem;
            margin-bottom: 1rem;
        }
    }
`;

export const StyledLink = styled.li`
    ${mulishFont}
    ${uppercase}
    font-size: 0.875rem;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (min-width: 425px) {
        text-align: left;
    }
`;

export const SocialMediaLinks = styled.ul`
    display: flex;
    align-items: baseline;
    justify-content: center;

    & > * + * {
        margin-left: 1rem;
    }
`;

const iconStyle = css`
    font-size: 1.5rem;
    color: var(--purple-4);
`;

export const Twitter = styled(FaTwitter)`
    ${iconStyle}
`;
export const Facebook = styled(FaFacebookSquare)`
    ${iconStyle}
`;
export const LinkedIn = styled(FaLinkedinIn)`
    ${iconStyle}
`;
export const Instagram = styled(RiInstagramFill)`
    ${iconStyle}
`;

export const Copyright = styled.p`
    ${mulishFont}
    text-align: center;
    background: var(--purple-3);
    padding: 1rem 1.5rem;
    font-size: 0.875rem;

    @media screen and (min-width: 600px) {
        font-size: 1rem;
    }
`;
