export default content => {
    const words = content.split(' ').length
    return Math.ceil(words / 200)
}
