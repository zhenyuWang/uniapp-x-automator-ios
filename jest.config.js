module.exports = {
    testTimeout: 10000,
    reporters: [
        'default'
    ],
    watchPathIgnorePatterns: ['/node_modules/', '/dist/', '/.git/'],
    moduleFileExtensions: ['js', 'json'],
    rootDir: __dirname,
    testMatch: ["<rootDir>/pages/**/*test.[jt]s?(x)"],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testPathIgnorePatterns: ['/node_modules/']
}
