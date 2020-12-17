/** prompts.js */
const prompts = [
  {
    type: "input",
    name: "cloudName",
    message: "⛅ What is your cloud name?",
    validate: (input) => !!input,
  },
  {
    type: "checkbox",
    name: "urlModes",
    message: "🍪 Which type of media you want to build url for?",
    default: ["buildImageUrl"],
    choices: [
      {
        name: "🖼️ Image",
        value: "buildImageUrl",
      },
      {
        name: "📹 Video",
        value: "buildVideoUrl",
      },
    ],
    validate: (input) => !!input.length,
  },
];

module.exports = prompts