export const config = {
  exportType: "default",
  nameFormat: "none",
  implementation: "sass",
  additionalData: `@use "blog/src/tokens/_tokens.scss";`,
  ignore: ["**/_tokens.scss", "**/tokens/**"]
}
