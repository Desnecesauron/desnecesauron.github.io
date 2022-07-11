function downloadThat() {
    
    //const require = createRequire(import.meta.url);

    //const http = require('https'); // or 'https' for https:// URLs
   // const fs = require('fs');

   // const file = fs.createWriteStream("file.pdf");
    const request = fetch("https://github.com/Desnecesauron/desnecesauron.github.io/blob/main/README.md")
    //const request = http.get("https://github.com/Desnecesauron/desnecesauron.github.io/blob/main/CVCesar.pdf", function(response) {
    //response.pipe(file);

    // after download completed close filestream
    /*file.on("finish", () => {
        file.close();
        console.log("Download Completed");
    });
    });*/

}


function downloadThatCT() {
    
    const request = fetch("/README.md")

}