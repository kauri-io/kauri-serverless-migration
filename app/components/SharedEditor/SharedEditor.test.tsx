import SharedEditor from './index'
import { shallowWithTheme } from '../../setupTests'
import { EditorState } from 'draft-js'

let props = {
    editorState: {
        draftEditorState: EditorState.createEmpty(),
        markdown: '# this is a test',
    },
    setFieldsValue: jest.fn(),
    getFieldsValue: jest.fn(),
    handleChange: jest.fn(),
}

describe('components/SharedEditor', () => {
    it('should match snapshot', () => {
        const wrapper = shallowWithTheme(<SharedEditor {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
})
