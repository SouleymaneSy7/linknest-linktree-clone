import { type Config } from "prettier";

const config: Config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
