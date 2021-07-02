import pkg from './package.json'
import ts from 'rollup-plugin-typescript2'
// import vuePlugin from "rollup-plugin-vue";

function createEntry(options) {
  const config = {
    input: "./lib/index.ts",
    external: ["vue", "cloudinary-core", "cloudinary-video-player"],
    output: {
      file: options.file,
      format: options.format,
      name: "CVideoPlayer",
      globals: {
        vue: "Vue",
        "cloudinary-core": "cloudinary"
      },
      exports: "default",
    },
    plugins: [
      ts({
        check: options.format == "es",
        tsconfigOverride: {
          compilerOptions: {
            declaration: options.format === "es",
          },
          exclude: ["__tests__", "example"],
          // include: ["lib/**/*.ts", "lib/**/*.tsx", "lib/**/*.vue"],
        },
      }),
      // vuePlugin(),
    ],
  };

  return config
}

export default [
  createEntry({
    format: "iife",
    file: pkg.browser,
  }),
  createEntry({
    format: "es",
    file: pkg.module,
  }),
  createEntry({
    format: "cjs",
    file: pkg.main,
  }),
];