function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = document.getElementById("css-code").value;
    let jsCode = document.getElementById("js-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style>";
    output.contentWindow.eval(jsCode);
}

// const boilerplateHTML = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Generated Boilerplate</title>
//     </head>
//     <body>
//         <h1>Your Boilerplate Code</h1>
//         <p>This code was auto-generated.</p>
//     </body>
//     </html>
// `;

// const boilerplateCSS = `
//     h1 {color: green};
// `;

// document.getElementById('html-code').value = boilerplateHTML;
// document.getElementById('css-code').value = boilerplateCSS;
