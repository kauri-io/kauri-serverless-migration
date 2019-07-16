module.exports = {
    roots: ['<rootDir>/components', '<rootDir>/containers', '<rootDir>/lib'],
    setupFiles: ['./setupTests.js'],
    snapshotSerializers: ["enzyme-to-json/serializer"]
}
