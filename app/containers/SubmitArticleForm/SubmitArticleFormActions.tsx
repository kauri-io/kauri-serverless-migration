import React, { useEffect } from 'react'
import styled from 'styled-components'
import Stack from 'stack-styled'
import ActionsSection from '../../components/Section/ActionsSection'
import PrimaryButton from '../../components/Button/PrimaryButton'
import SecondaryButton from '../../components/Button/SecondaryButton'
import TertiaryButton from '../../components/Button/TertiaryButton'
import ProposeUpdateModal from './ProposeUpdateModal'
import { showNotificationAction } from '../../lib/Epics/ShowNotificationEpic'
import initUppy from '../../lib/init-uppy'
import config from '../../config'

const UploadIcon = () => (
    <img src="https://png.icons8.com/color/50/000000/upload.png" />
)

const BackIcon = styled.div`
    width: 10px !important;
    height: 14px !important;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 10px solid ${props => props.theme.colors.primary};
`

const SubmitArticleFormActions = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: ${props => props.theme.primaryTextColor};
    & > div {
        z-index: 10;
    }
`

const ContainerRow = styled.div`
    display: flex;
    align-self: center;
    justify-self: flex-end;
    > :not(:last-child) {
        margin-right: ${props => props.theme.space[2]}px;
    }
    > :last-child {
        margin-right: 0px;
    }
`

interface IProps {
    routeChangeAction: (route: string) => void
    handleSubmit: (submissionType: string, updateComment?: string) => void
    userId: string
    openModalAction: (children: any) => void
    closeModalAction: () => void
    owner: string
    status: string
    getFieldDecorator: (field: string, arg1?: any) => any
    setFieldsValue: ({ attributes: { background: string } }) => void
    showNotificationAction: typeof showNotificationAction
    selectDestination: () => void
    communities: string[]
}

const isOwner = (
    status: string,
    owner: string,
    userId: string,
    communities: string[] | null
) =>
    (Array.isArray(communities) && communities.includes(owner)) ||
    !status ||
    !owner ||
    owner === userId

export default ({
    routeChangeAction,
    handleSubmit,
    userId,
    owner,
    status,
    setFieldsValue,
    getFieldDecorator,
    closeModalAction,
    openModalAction,
    showNotificationAction,
    selectDestination,
    communities,
}: IProps) => {
    useEffect(() => {
        const uppy = initUppy({
            allowGifs: false,
            trigger: '.background-upload',
        })
        getFieldDecorator('attributes')
        uppy.on('upload-success', (_data, data2) => {
            const url = `https://${config.gateway}:443/ipfs/${data2.body.hash}`
            setFieldsValue({
                attributes: {
                    background: url,
                },
            })
        })
    }, [])
    return (
        <SubmitArticleFormActions>
            <ActionsSection
                width={'100%'}
                justifyContent={['', 'start']}
                gridAutoFlow={['', 'column']}
                gridTemplateColumns="minmax(auto, 1fr) minmax(auto, 1fr) minmax(auto, 1fr)"
            >
                <TertiaryButton
                    icon={<BackIcon />}
                    onClick={() => routeChangeAction('back')}
                >
                    <span>Go Back</span>
                </TertiaryButton>
                <Stack
                    alignItems={['', 'center']}
                    justifyContent={['', 'center']}
                    gridAutoFlow={['row']}
                    gap={20}
                >
                    <TertiaryButton
                        className="background-upload"
                        icon={<UploadIcon />}
                    >
                        Upload Background
                    </TertiaryButton>
                </Stack>
                <ContainerRow>
                    <SecondaryButton onClick={handleSubmit('draft')}>
                        Save draft
                    </SecondaryButton>
                    {isOwner(status, owner, userId, communities) ? (
                        <PrimaryButton onClick={selectDestination}>
                            Publish Article
                        </PrimaryButton>
                    ) : (
                        <PrimaryButton
                            onClick={() =>
                                openModalAction({
                                    children: (
                                        <ProposeUpdateModal
                                            closeModalAction={() =>
                                                closeModalAction()
                                            }
                                            confirmModal={handleSubmit}
                                            showNotificationAction={
                                                showNotificationAction
                                            }
                                        />
                                    ),
                                })
                            }
                        >
                            Propose Update
                        </PrimaryButton>
                    )}
                </ContainerRow>
            </ActionsSection>
        </SubmitArticleFormActions>
    )
}
