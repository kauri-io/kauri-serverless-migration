import styled from 'styled-components'
import Stack from 'stack-styled'
import theme from '../../lib/theme-config'

const columnWidth = `${theme.DEFAULT_CARD_WIDTH}px`

export const Content = styled.section`
    display: flex;
    flex-diretion: column;
    overflow-y: auto;
    width: 100%;
    height: 100%;
`

export default ({ children, setRef }) => (
    <Content ref={ref => setRef && setRef(ref)}>
        <Stack
            justifyContent={['', 'center']}
            width={'100%'}
            gap={'30px'}
            gridTemplateColumns={`${columnWidth} ${columnWidth} ${columnWidth}`}
        >
            {children}
        </Stack>
    </Content>
)
