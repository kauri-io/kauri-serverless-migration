import cookie from 'cookie'

export const accountCheck = () => {
    const cookieToParse = global.window.document.cookie
    const userId = cookie.parse(cookieToParse)['USER_ID']

    const selectedAccount = global.window.web3.eth.accounts[0]
    return userId === selectedAccount
}
