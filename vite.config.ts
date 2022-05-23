import nunjucks from "vite-plugin-nunjucks";
import inputs from "./src/inputs.json";
import { ViteWebfontDownload } from "vite-plugin-webfont-dl";

export default {
  base: "./",
  plugins: [
    nunjucks({ variables: {
      "index.html": {
        inputs: inputs
      }
    }}),
    ViteWebfontDownload([
      "https://fonts.googleapis.com/css2?family=Rubik&display=swap",
    ]),
  ],
  server: {
    fs: {
      allow: ["."],
    },
  }
};
