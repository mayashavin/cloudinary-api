/** Generator */
module.exports = (api, opts) => {
  api.extendPackage({
    dependencies: {
      "cloudinary-build-url": "latest",
    },
  });

  const urlModes = opts.urlModes.reduce(
    (opt, mode) => ({
      image: opt.image || mode === "buildImageUrl",
      video: opt.video || mode === "buildVideoUrl",
    }),
    {
      image: false,
      video: false,
    }
  );

  api.render("./template", {
    cloudName: opts.cloudName,
    ...urlModes,
    features: opts.urlModes,
  });

  api.onCreateComplete(() => {
    // // inject to main.js
    const fs = require("fs");
    const mainPath = api.resolve(api.entryFile);

    // get content
    let contentMain = fs.readFileSync(mainPath, { encoding: "utf-8" });

    const lines = contentMain.split(/\r?\n/g).reverse();
    // inject import
    const lastImportIndex = lines.findIndex((line) => line.match(/^import/));

    if (contentMain.includes("createApp(")) {
      //Vue 3x
      lines[
        lastImportIndex
      ] += `\nimport useCloudinary from './plugins/cloudinary'`;

      const lastCreateAppIndex = lines.findIndex((line) =>
        line.match(/^createApp\(/)
      );

      if (lastCreateAppIndex !== -1) {
        const sublines = lines[lastCreateAppIndex].split(".");
        sublines[0] = `const app = ${sublines[0]};`;
        const newLines = sublines.map((line, index) =>
          index ? `app.${line};` : line
        );

        const createAppLines = newLines.join("\n");

        lines[lastCreateAppIndex] = createAppLines;
      }

      contentMain = lines.reverse().join("\n");
      contentMain += `\nuseCloudinary(app);`;
    } else {
      //Vue 2x
      lines[lastImportIndex] += `\nimport './plugins/cloudinary'`;
      contentMain = lines.reverse().join("\n");
    }

    // modify app
    fs.writeFileSync(mainPath, contentMain, { encoding: "utf-8" });
    
    api.exitLog("🖼️ Learn more how to use url builder: https://cloudinary-build-url.netlify.com");
    api.exitLog("💻 Github: https://github.com/mayashavin/cloudinary-api");
    api.exitLog(
      "❤️ Have fun optimizing your images and videos with Cloudinary ❤️"
    );
  });
};
