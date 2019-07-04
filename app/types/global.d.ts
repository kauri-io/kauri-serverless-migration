declare namespace NodeJS {
    interface Process {
        browser: boolean;
    }
    interface IAugmentedWindow extends Window {
        web3: any;
        ethereum: any;
        smartContracts: any;
        __REDUX_DEVTOOLS_EXTENSION__: any;
        encodeURI: any
    }
    interface Global {
        document: Document;
        window: IAugmentedWindow;
        navigator: Navigator;
        fetch: any;
    }
}