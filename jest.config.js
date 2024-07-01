module.exports = {
 transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios).+\\.js$"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    axios: "axios/dist/node/axios.cjs",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
};
