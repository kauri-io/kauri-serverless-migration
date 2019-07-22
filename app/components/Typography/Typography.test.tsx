import {
    BodyArticle,
    BodyCard,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Label,
    CTA,
    Title1,
    Title2,
} from './index'

import { mountWithTheme } from '../../setupTests'

describe('components/typography', () => {
    it('BodyArticle should match snapshot', () => {
        const wrapper = mountWithTheme(<BodyArticle>Test</BodyArticle>)
        expect(wrapper).toMatchSnapshot()
    })

    it('BodyCard should match snapshot', () => {
        const wrapper = mountWithTheme(<BodyCard>Test</BodyCard>)
        expect(wrapper).toMatchSnapshot()
    })

    it('H1 should match snapshot', () => {
        const wrapper = mountWithTheme(<H1>Test</H1>)
        expect(wrapper).toMatchSnapshot()
    })

    it('H2 should match snapshot', () => {
        const wrapper = mountWithTheme(<H2>Test</H2>)
        expect(wrapper).toMatchSnapshot()
    })

    it('H3 should match snapshot', () => {
        const wrapper = mountWithTheme(<H3>Test</H3>)
        expect(wrapper).toMatchSnapshot()
    })

    it('H4 should match snapshot', () => {
        const wrapper = mountWithTheme(<H4>Test</H4>)
        expect(wrapper).toMatchSnapshot()
    })

    it('H5 should match snapshot', () => {
        const wrapper = mountWithTheme(<H5>Test</H5>)
        expect(wrapper).toMatchSnapshot()
    })

    it('H6 should match snapshot', () => {
        const wrapper = mountWithTheme(<H6>Test</H6>)
        expect(wrapper).toMatchSnapshot()
    })

    it('Label should match snapshot', () => {
        const wrapper = mountWithTheme(<Label>Test</Label>)
        expect(wrapper).toMatchSnapshot()
    })

    it('CTA should match snapshot', () => {
        const wrapper = mountWithTheme(<CTA>Test</CTA>)
        expect(wrapper).toMatchSnapshot()
    })

    it('Title1 should match snapshot', () => {
        const wrapper = mountWithTheme(<Title1>Test</Title1>)
        expect(wrapper).toMatchSnapshot()
    })

    it('Title2 should match snapshot', () => {
        const wrapper = mountWithTheme(<Title2>Test</Title2>)
        expect(wrapper).toMatchSnapshot()
    })
})
