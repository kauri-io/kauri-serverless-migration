interface IAugmentedWindow extends Window {
    web3: any
    ethereum: any
    smartContracts: any
    __REDUX_DEVTOOLS_EXTENSION__: any
    encodeURI: any
    setFieldsValue: any
    getFieldsValue: any
    ethereum: any
}

declare namespace NodeJS {
    interface Process {
        browser: boolean
    }
    interface Global {
        document: Document
        window: IAugmentedWindow
        navigator: Navigator
        fetch: any
    }
}

declare global {
    interface Window {
        web3: any
    }
}

window.web3 = window.web3 || {}
