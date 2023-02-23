module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ["standard", "prettier"],
  ignorePatterns: [
    "**/node_modules/**",
    "**/coverage/**",
    "**/vizzu-lib/**",
    "**/showcases/**",
  ],
};
