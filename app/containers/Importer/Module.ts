export const requestParsedUrl = async (url) => {
    const requestUrl = `${window.location.protocol}//${window.location.host}/api/import/${encodeURIComponent(url)}`
    const response = await fetch(requestUrl)
    const data = await response.json()
    return data
}