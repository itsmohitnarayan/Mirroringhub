const { exec } = require('child_process');

function encodeVideo(inputFile, outputFile) {
    exec(`ffmpeg -i ${inputFile} -c:v libx265 ${outputFile}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error encoding video: ${stderr}`);
            return;
        }
        console.log(`Video encoded successfully: ${outputFile}`);
    });
}

module.exports = { encodeVideo };
