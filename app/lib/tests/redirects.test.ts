import {
    redirectArticle,
    redirectCollection,
    redirectCommunity,
    redirectProfile,
} from '../redirects'

const end = jest.fn()
const writeHead = jest.fn()

const mockContext = {
    res: {
        end,
        writeHead,
    },
}

describe('Redirects', () => {
    describe('Articles', () => {
        beforeAll(() => {
            const mockApolloState = {
                apollo: {
                    data: {
                        '12345': {
                            title: 'test title',
                        },
                        'ResourceIdentifier:1234': {
                            version: '5',
                        },
                    },
                },
            }

            const mockUrl = {
                query: {
                    article_id: '1234',
                },
            }
            redirectArticle(mockContext, mockApolloState, mockUrl)
        })
        it('should end the request', () => {
            expect(end).toHaveBeenCalled()
        })
        it('should do the correct 301 redirect', () => {
            expect(writeHead).toHaveBeenCalledWith(301, {
                Location: '/test-title/1234/a',
            })
        })
    })

    describe('Collection', () => {
        beforeAll(() => {
            const mockApolloState = {
                apollo: {
                    data: {
                        'CollectionDTO:1234': {
                            name: 'test name',
                        },
                    },
                },
            }

            const mockUrl = {
                query: {
                    collection_id: '1234',
                },
            }
            redirectCollection(mockContext, mockApolloState, mockUrl)
        })
        it('should end the request', () => {
            expect(end).toHaveBeenCalled()
        })
        it('should do the correct 301 redirect', () => {
            expect(writeHead).toHaveBeenCalledWith(301, {
                Location: '/test-name/1234/c',
            })
        })
    })

    describe('Community', () => {
        beforeAll(() => {
            const mockApolloState = {
                apollo: {
                    data: {
                        '12345': {
                            title: 'test title',
                        },
                        'ResourceIdentifier:1234': {
                            version: '5',
                        },
                    },
                },
            }

            const mockUrl = {
                query: {
                    article_id: '1234',
                },
            }
            redirectCommunity(mockContext, mockApolloState, mockUrl)
        })
        it('should end the request', () => {
            expect(end).toHaveBeenCalled()
        })
        it('should do the correct 301 redirect', () => {
            expect(writeHead).toHaveBeenCalledWith(301, {
                Location: '/test-title/1234/a',
            })
        })
    })

    describe('Profile', () => {
        beforeAll(() => {
            const mockApolloState = {
                apollo: {
                    data: {
                        '12345': {
                            title: 'test title',
                        },
                        'ResourceIdentifier:1234': {
                            version: '5',
                        },
                    },
                },
            }

            const mockUrl = {
                query: {
                    article_id: '1234',
                },
            }
            redirectProfile(mockContext, mockApolloState, mockUrl)
        })
        it('should end the request', () => {
            expect(end).toHaveBeenCalled()
        })
        it('should do the correct 301 redirect', () => {
            expect(writeHead).toHaveBeenCalledWith(301, {
                Location: '/test-title/1234/a',
            })
        })
    })
})
