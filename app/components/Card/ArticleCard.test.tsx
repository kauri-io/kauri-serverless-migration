import { mountWithRedux } from '../../setupTests'
import ArticleCard from './ArticleCard'

let ArticleCardProps
let consoleWarn = console.warn

describe('components/Card/ArticleCard', () => {
    beforeAll(() => {
        global.console.warn = jest.fn()
        ArticleCardProps = {
            id: '0x12...',
            version: 123,
            title: 'Article',
            author: {
                avatar: 'https://dev.kauri.io/static/images/DefaultArticle.png',
                id: '0x12...',
                name: 'test name',
                username: 'test-username',
            },
            attributes: {
                background:
                    'https://img.volcanodiscovery.com/uploads/pics/krakatau_k18278.jpg',
            },
            voteResult: {
                sum: 2,
            },
            datePublished: '1994-06-13T00:05:32.000Z',
            comments: {
                totalElements: 1,
                content: [
                    {
                        posted: '1994-06-13T00:05:32.000Z',
                        author: {
                            id: '0x12...',
                            name: 'test name',
                            username: 'test-username',
                            avatar:
                                'https://messari.s3.amazonaws.com/images/agora-images/0%3Fe%3D1554940800%26v%3Dbeta%26t%3DSc-2dZDU1bQdc0I7ZnPKr-SaPEe0yEPICWMznVDT9zU',
                        },
                        body: 'test comment',
                    },
                ],
            },
            description: 'test description',
            href: {
                as: 'h6',
                href: 'https://kauri.io',
            },
            isLoggedIn: true,
        }
    })
    afterAll(() => {
        global.console.warn = consoleWarn
    })

    it('should match snapshot', () => {
        const wrapper = mountWithRedux(<ArticleCard {...ArticleCardProps} />)
        expect(wrapper).toMatchSnapshot()
    })
})
