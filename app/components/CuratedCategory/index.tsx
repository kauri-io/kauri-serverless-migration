import React from 'react'
import styled from 'styled-components'
import { Label, BodyCard } from '../Typography'
import Image from '../Image'
import theme from '../../lib/theme-config'

const DEFAULT_CARD_WIDTH = theme.DEFAULT_CARD_WIDTH

const Container = styled.div<{ background: null | string }>`
    display: flex;
    z-index: 1;
    position: relative;
    flex-direction: column;
    width: ${DEFAULT_CARD_WIDTH}px;
    height: 90px;
    background: ${props => props.theme.colors.bgPrimary};
    cursor: pointer;
    border-radius: 4px;
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        height: 60px;
        width: 170px;
        > a {
            z-index: 9001;
        }
        > a > div > *:last-child {
            display: none;
        }
    }
`

const Content = styled.div`
    display: flex;
    z-index: 9001;
    width: 100%;
    position: absolute;
    flex-direction: column;
    text-overflow: ellipsis;
    padding: ${props => props.theme.space[2]}px;
    overflow-x: hidden;
    > :first-child {
        margin-bottom: ${props => props.theme.space[1]}px;
    }
`

export const CuratedCategoriesSection = styled.section`
    display: grid;
    grid-template-columns: repeat(
        auto-fill,
        minmax(${DEFAULT_CARD_WIDTH}px, ${DEFAULT_CARD_WIDTH}px)
    );
    width: 100%;
    grid-gap: ${props => props.theme.space[1]}px
        ${props => props.theme.space[3]}px;
    padding-top: ${props => props.theme.space[3]}px;
    padding-bottom: 0px;
    ${props => props.theme.padContent};
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
        grid-template-columns: repeat(auto-fill, minmax(170px, 170px));
        justify-content: center;
    }
`

interface IProps {
    category: string
    description: string
    background: string | null
    link?: string
}

const CuratedCategory: React.FunctionComponent<IProps> = ({
    category,
    description,
    background,
    link,
}) => (
    <Container background={background}>
        {background && (
            <Image
                asBackground={true}
                height="90px"
                width={`${DEFAULT_CARD_WIDTH}px`}
                mobileHeight="60px"
                mobileWidth="170px"
                overlay={{ color: theme.bgPrimary, opacity: 0.7 }}
                image={background}
                borderRadius={'4px'}
            />
        )}
        <a href={link}>
            <Content>
                <Label textTransform="uppercase" color="white">
                    {category}
                </Label>
                <BodyCard color="white">{description}</BodyCard>
            </Content>
        </a>
    </Container>
)

export default CuratedCategory
