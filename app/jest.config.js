module.exports = {
    roots: ['<rootDir>/components', '<rootDir>/containers', '<rootDir>/lib'],
    setupFiles: ['./setupTests.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    automock: false,
    collectCoverageFrom: [
        'components/**/*.{ts,tsx}',
        'containers/**/*.{ts,tsx}',
        'lib/**/*.{ts,tsx}',
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
        "\\.(css|less)$": "<rootDir>/mocks/styleMock.js"
      }
}
