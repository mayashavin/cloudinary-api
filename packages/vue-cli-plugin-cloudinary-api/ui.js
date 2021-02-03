const path = require("path");
const resolve = (file) => path.resolve(__dirname, file);

const prompts = require(resolve('./prompts'))

module.exports = api => {
  api.describeConfig({
    // Unique ID for the config
    id: "cld-apis.vue",
    // Displayed name
    name: "Cloudinary Light APIs",
    // Shown below the name
    description: "Optimize image and videos with Cloudinary for Vue",
    // "More info" link
    link: "https://cloudinary-build-url.netlify.app",
    icon: "/_plugin/vue-cli-plugin-cloudinary-api/icon.png",
    onRead: ({ data, cwd }) => ({
      prompts,
    }),
    onWrite: ({ prompts, answers, data, files, cwd, api }) => {
      //
    },
  });
}