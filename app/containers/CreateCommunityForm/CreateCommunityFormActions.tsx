
import ActionsSection, {
    MiddleActionsStack,
    RightActionsRow,
} from '../../components/Section/ActionsSection'
import PrimaryButtonComponent from '../../components/Button/PrimaryButton'
import TertiaryButtonComponent from '../../components/Button/TertiaryButton'
import UploadIcon from '../../components/Icon/UploadIcon'
import showFormValidationErrors from '../../lib/show-form-validation-errors'

interface IProps {
    id: string | null
    goBack: () => void
    setupImageUploader: () => void
    isSubmitting: boolean
    background: null | string
    validateForm: () => Promise<any>
}

const Component: React.FunctionComponent<IProps> = props => (
    <ActionsSection
        bg={
            (typeof props.background === 'string' && 'transparent') ||
            'bgPrimary'
        }
    >
        <MiddleActionsStack>
            <TertiaryButtonComponent
                icon={<UploadIcon />}
                handleClick={() => props.setupImageUploader()}
            >
                Background Image
            </TertiaryButtonComponent>
        </MiddleActionsStack>

        <RightActionsRow>
            <PrimaryButtonComponent
                type="submit"
                disabled={props.isSubmitting}
                onClick={() =>
                    showFormValidationErrors(
                        props.validateForm,
                        props.showNotificationAction,
                        () => {
                            return
                        }
                    )
                }
            >
                {`${props.id ? 'Update' : 'Create'} Community`}
            </PrimaryButtonComponent>
        </RightActionsRow>
    </ActionsSection>
)

export default Component
