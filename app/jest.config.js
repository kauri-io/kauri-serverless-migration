module.exports = {
    roots: ['<rootDir>/components', '<rootDir>/containers', '<rootDir>/lib'],
    setupFiles: ['./setupTests.js'],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    collectCoverage: true,
    collectCoverageFrom:[
        'components/**/*.{ts,tsx}',
        'containers/**/*.{ts,tsx}',
        'lib/**/*.{ts,tsx}'
    ],
}
