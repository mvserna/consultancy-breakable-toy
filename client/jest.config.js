module.exports = {
  modulePathIgnorePatterns: ["dist"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
};
