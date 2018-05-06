let markdownpdf = require("markdown-pdf");
let fs = require("fs")

const args = process.argv;

if (!!args && args.length >= 3) {
    let filename = args[2];
    console.log("Converting...");
    markdownpdf().from(`./${filename}`).to(`./${filename}.pdf`, function () {
        console.log("Done.")
    })
} else {
    console.log("markdown file not found.")
}