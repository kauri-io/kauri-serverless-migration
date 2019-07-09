import React from 'react'
import MediumImportButton from '../../components/Button/MediumImportButton'

export const mediumImport = {
    buttonContent: <MediumImportButton />,

    buttonProps: {
        'aria-label': 'Import articles from Medium',
        style: { marginTop: -6, height: 18 },
    },

    execute: () => {},
}

export default mediumImport
