import { mountWithTheme } from '../../setupTests'
import PublicProfileCard from './PublicProfileCard'

let PublicProfileCardProps
let consoleWarn = console.warn

describe('components/Card/PublicProfileCard', () => {
    beforeAll(() => {
        global.console.warn = jest.fn()
        PublicProfileCardProps = {
            id: '1234567890',
            version: 123,
            articleCount: 123,
            collectionCount: 123,
            name: 'PublicProfile',
            avatar:
                'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU',
            username: 'test username',
        }
    })
    afterAll(() => {
        global.console.warn = consoleWarn
    })

    it('should match snapshot', () => {
        const wrapper = mountWithTheme(
            <PublicProfileCard {...PublicProfileCardProps} />
        )
        expect(wrapper).toMatchSnapshot()
    })
})
