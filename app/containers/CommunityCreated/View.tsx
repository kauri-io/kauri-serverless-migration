import React from 'react'
import styled from 'styled-components'
import CommunityCard from '../../components/Card/CommunityCard'
import Head from 'next/head'
import Button from '../../components/Button'
import { Title2, BodyCard } from '../../components/Typography'
import { getCommunity } from '../../queries/__generated__/getCommunity'
import { getCommunityURL } from '../../lib/getURLs'

export interface IProps {
    data: getCommunity
    routeChangeAction: (route: string) => void
    type: 'created' | 'updated'
}

const Container = styled.section`
    display: flex;
    height: calc(100vh - 76px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.textPrimary};
    > :first-child {
        margin-bottom: ${props => props.theme.space[1]}px;
        color: white;
    }
    > :nth-child(2) {
        margin-bottom: ${props => props.theme.space[3]}px;
        color: white;
    }
    > :nth-child(3) {
        margin-bottom: ${props => props.theme.space[3]}px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const CommunityCreated = (props: IProps) => {
    const { routeChangeAction, type } = props
    const copy = type === 'updated' ? 'updated' : 'live'
    const subtitleCopy =
        copy === 'live' ? (
            <Row>
                <BodyCard>
                    Your community will be live soon, we are just creating it!
                </BodyCard>
                <BodyCard>This usually takes less than 10 seconds.</BodyCard>
            </Row>
        ) : (
            <BodyCard>Your community is now updated</BodyCard>
        )

    if (props.data.getCommunity) {
        const { id } = props.data.getCommunity

        return (
            <Container>
                <Head>
                    <title>{`Community ${copy} - Kauri`}</title>
                </Head>
                <Title2>Community</Title2>
                {subtitleCopy}
                <CommunityCard
                    {...props.data.getCommunity}
                    key={String(id)}
                    href={getCommunityURL(props.data.getCommunity)}
                />
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() =>
                        routeChangeAction(`/community/${String(id)}`)
                    }
                >
                    View Community
                </Button>
            </Container>
        )
    }
    return null
}

export default CommunityCreated
